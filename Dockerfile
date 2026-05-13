# =============================================================================
# IMAGEN DE PRODUCCIÓN — Next.js en modo "standalone"
# =============================================================================
# Este archivo define un build en VARIAS ETAPAS (multi-stage):
#   1) deps     → instala dependencias de forma reproducible (npm ci).
#   2) builder  → copia el código y ejecuta `next build` (necesita devDeps).
#   3) runner   → imagen FINAL mínima: solo Node + salida standalone + static.
#
# Por qué multi-stage: la imagen que subes a un registry no incluye el código
# fuente completo ni node_modules de desarrollo; solo lo imprescindible para
# ejecutar `node server.js`, lo que reduce tamaño y superficie de ataque.
#
# Requisito en el proyecto: next.config.ts con `output: 'standalone'`.
# syntax=... habilita características modernas del parser de Dockerfile (BuildKit).
# =============================================================================

# syntax=docker/dockerfile:1

# -----------------------------------------------------------------------------
# Etapa "base": imagen común (Node LTS sobre Debian slim = buen equilibrio
# tamaño vs compatibilidad con binarios nativos si algún día los necesitas).
# WORKDIR /app: todos los COPY/RUN siguientes son relativos a esta carpeta.
# -----------------------------------------------------------------------------
FROM node:22-bookworm-slim AS base
WORKDIR /app

# Desactiva la telemetría de Next en CI/containers (menos ruido, sin datos a Vercel).
ENV NEXT_TELEMETRY_DISABLED=1

# -----------------------------------------------------------------------------
# Etapa "deps": SOLO package.json + lockfile → `npm ci`
# -----------------------------------------------------------------------------
# npm ci instala exactamente lo que dice package-lock.json (ideal para Docker/CI).
# No copiamos el resto del repo aún: si solo cambia código fuente, Docker puede
# reutilizar la caché de esta capa cuando el lockfile no cambió.
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# -----------------------------------------------------------------------------
# Etapa "builder": compila la aplicación (TypeScript, Tailwind, bundle Next…)
# -----------------------------------------------------------------------------
# Reutilizamos node_modules de "deps" (más rápido que volver a instalar).
# COPY . . trae el contexto de build (respeta .dockerignore: sin .git, sin .env).
# `npm run build` genera .next/ y, con output standalone, la carpeta
# .next/standalone lista para copiar en la etapa final.
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# -----------------------------------------------------------------------------
# Etapa "runner": lo que REALMENTE se ejecuta en producción
# -----------------------------------------------------------------------------
# NODE_ENV=production: comportamiento optimizado de Node y dependencias.
# PORT / HOSTNAME: Next escucha en 0.0.0.0 para que el mapeo de puertos Docker
# (p.ej. -p 3000:3000) funcione; si solo escuchara "localhost", no entraría
# tráfico desde fuera del contenedor.
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuario dedicado (no root): si el proceso se viera comprometido, limita daños.
# --no-create-home: no necesitamos home interactivo en un contenedor de solo app.
# UID 1001 sin --system en useradd evita warnings de rango en algunas imágenes Debian.
RUN groupadd --system --gid 1001 nodejs \
  && useradd --uid 1001 --gid nodejs --no-create-home nextjs

# Archivos estáticos públicos (favicon, imágenes en /public, etc.).
COPY --from=builder /app/public ./public

# Salida "standalone" de Next: incluye server.js y dependencias mínimas empaquetadas.
# --chown: el usuario nextjs debe poder leer (y escribir si Next lo requiere en runtime).
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# A partir de aquí los procesos no corren como root.
USER nextjs

# Documentación del puerto (no abre el puerto solo; sirve de documentación y a
# herramientas como Compose / Kubernetes).
EXPOSE 3000

# Punto de entrada oficial del bundle standalone de Next (equivalente a next start).
CMD ["node", "server.js"]
