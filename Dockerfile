# =========================
# STAGE 1: BASE
# =========================
FROM node:22-bookworm-slim AS base

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1


# =========================
# STAGE 2: DEPENDENCIAS
# =========================
FROM base AS deps

COPY package.json package-lock.json ./
RUN npm ci


# =========================
# STAGE 3: BUILDER
# =========================
FROM base AS builder

# Traemos node_modules desde deps (evita reinstalar todo)
COPY --from=deps /app/node_modules ./node_modules
# Ahora sí copiamos el resto del código del proyecto
COPY . .

RUN npm run build


# =========================
# STAGE 4: RUNTIME (PRODUCCIÓN)
# =========================
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Por defecto los contenedores corren como root.
# Eso es peligroso en producción.
#
# Aquí creamos usuario limitado para ejecutar la app.
RUN groupadd --system --gid 1001 nodejs \
  && useradd --uid 1001 --gid nodejs --no-create-home nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cambia ownership de archivos al usuario "nextjs"
# para evitar problemas de permisos al correr sin root
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Desde aquí en adelante, el contenedor NO corre como root
USER nextjs

EXPOSE 3000

# standalone genera un server Node listo para producción
CMD ["node", "server.js"]