# Portafolio profesional de Brandon Lopez

Sitio estático construido con Astro y TypeScript para presentar proyectos públicos y facilitar el contacto profesional. No incluye JavaScript de cliente, formularios, cookies, analítica, fuentes remotas ni servicios de terceros en tiempo de ejecución.

## Requisitos

- Node.js 24
- npm 11 o posterior

## Desarrollo y verificación

```bash
npm ci
npm run dev
npm run check
npm run build
npm audit --audit-level=high
```

La compilación queda en `dist/`. Las rutas indexables son `/` y `/privacidad/`; la compilación también genera `404.html` para solicitudes inexistentes.

## Contenido de proyectos

Los datos se centralizan en `src/data/projects.ts`. Las descripciones actuales se redactaron después de revisar, para cada repositorio, su README, manifiesto y archivos principales. Los recursos en `public/images/projects/` combinan imágenes asociadas a los proyectos y una demostración local del reconocimiento de señas; las imágenes publicadas se normalizan a WebP de 1600 × 900.

## Privacidad

El sitio solo enlaza a `mailto:` y no recopila información directamente. El aviso describe los datos que una persona puede enviar voluntariamente por correo.

El aviso de privacidad requiere revisión jurídica profesional antes de la publicación definitiva. Si en el futuro se añade un formulario, analítica, cookies u otra recopilación, se debe detener el despliegue hasta actualizar el aviso, el consentimiento aplicable y los controles técnicos.

## Despliegue en Cloudflare Workers

- Rama de producción: `main`
- Comando de compilación: `npm run build`
- Comando de despliegue: `npx wrangler deploy`
- Directorio de recursos estáticos: `dist` (declarado en `wrangler.jsonc`)
- Versión de Node: `24` (declarada en `.node-version`)
- Variables secretas: ninguna

El Worker debe conservar el nombre `paginawebbr`, porque Cloudflare exige que coincida con `wrangler.jsonc`. Configura `lcbrandon.com` como dominio personalizado, redirige `www` hacia el dominio raíz y revisa que las vistas previas no sean indexables. Comprueba en el sitio publicado HTTPS, los encabezados de `public/_headers`, la consola y Lighthouse antes de considerarlo en producción.

## Seguridad y mantenimiento

La CSP evita conexiones salientes, contenido embebido, objetos, formularios y scripts no locales. GitHub Actions ejecuta instalación limpia, comprobación de tipos, compilación y auditoría de vulnerabilidades altas. Dependabot revisa semanalmente npm y GitHub Actions.
