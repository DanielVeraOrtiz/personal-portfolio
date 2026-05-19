import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Modo "standalone" (obligatorio para el Dockerfile de producción de este repo).
   *
   * Qué hace: tras `next build`, Next genera `.next/standalone/` con un servidor
   * Node mínimo (`server.js`) y solo las dependencias necesarias para ejecutar,
   * en lugar de depender de todo `node_modules`. La imagen Docker final copia
   * esa carpeta + `.next/static` + `public`, logrando imágenes más pequeñas y
   * despliegues más predecibles que copiar el repo completo.
   *
   * Referencia: documentación oficial de Next.js → "Output File Tracing" / Docker.
   */
  output: 'standalone',
  images: {
    remotePatterns: [new URL('https://cdn.jsdelivr.net/**')],
  },
};

export default nextConfig;
