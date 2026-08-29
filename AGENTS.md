# AGENTS.md

## Propósito del repositorio

Este repositorio contiene un portafolio profesional estático para presentar proyectos públicos de GitHub y facilitar el contacto para oportunidades de trabajo.

El resultado debe ser pequeño, rápido, accesible, verificable y fácil de mantener. Favorece soluciones sencillas sobre abstracciones, dependencias o funciones que no aporten valor directo al portafolio.

## Alcance del producto

Mantén únicamente estas dos rutas públicas:

- `/`: presentación personal, proyectos seleccionados, llamada a contacto y pie de página.
- `/privacidad/`: aviso de privacidad básico.

La página principal debe incluir:

1. Encabezado con navegación a proyectos y privacidad.
2. Presentación breve con nombre, rol y propuesta profesional.
3. Cuadrícula de 3 a 6 proyectos.
4. Contacto mediante un enlace `mailto:`.
5. Pie con GitHub, privacidad y año.

No añadas blog, autenticación, panel administrativo, testimonios, filtros, carruseles, newsletter, contadores, base de datos o formulario de contacto salvo petición explícita.

## Tecnología y arquitectura

- Usa Astro con TypeScript.
- Mantén la salida completamente estática. No añadas SSR, adaptadores de servidor ni Pages Functions.
- Usa TypeScript `strictest` cuando sea viable; usa `strict` si una incompatibilidad comprobada impide `strictest`.
- Usa CSS propio. No instales React, Vue, Svelte, Tailwind, librerías de componentes o paquetes de iconos para resolver este alcance.
- No envíes JavaScript al navegador salvo que una función esencial lo requiera. Prefiere HTML y CSS.
- Mantén las dependencias al mínimo: Astro, TypeScript y `@astrojs/check` deberían ser suficientes.
- Guarda y actualiza `package-lock.json`. En CI instala con `npm ci`.
- No consultes GitHub desde el navegador. Los datos de proyectos deben estar escritos y validados durante el desarrollo.

Estructura esperada:

```text
public/
  _headers
  favicon.svg
  robots.txt
  images/projects/
src/
  components/
  data/projects.ts
  layouts/BaseLayout.astro
  pages/index.astro
  pages/privacidad.astro
  styles/global.css
.github/
  workflows/ci.yml
  dependabot.yml
astro.config.mjs
package.json
package-lock.json
tsconfig.json
README.md
```

Adapta la estructura si el repositorio ya contiene una alternativa coherente. No reorganices archivos sin una razón funcional.

## Modelo de proyectos

Centraliza los proyectos en `src/data/projects.ts` con una forma equivalente a:

```ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  repositoryUrl: `https://github.com/${string}`;
  image: string;
  imageAlt: string;
  technologies: string[];
};
```

Antes de escribir una descripción, revisa el README, los manifiestos y los archivos principales del repositorio correspondiente.

- Explica el problema, la solución y una característica técnica comprobable.
- Mantén cada descripción entre 35 y 55 palabras, salvo que el diseño exija una variación menor.
- No inventes métricas, clientes, funcionalidades, tecnologías o estado de producción.
- Si no existe evidencia suficiente, omite la afirmación o marca el contenido como pendiente.
- Comprueba que cada URL apunte al repositorio correcto y use HTTPS.

## Imágenes

- Prefiere una captura real del proyecto.
- Si no existe, usa una ilustración original relacionada con su función.
- Mantén una relación aproximada de 16:9 y una dirección de arte consistente.
- Guarda las imágenes localmente en WebP o AVIF; evita hotlinking.
- Como referencia, usa 1600×900 y menos de 200 KB cuando no degrade visiblemente la imagen.
- Declara ancho, alto y texto alternativo útil.
- No uses logos, capturas o recursos con licencia dudosa.
- No aceptes SVG de origen desconocido sin revisarlo y sanearlo.

## Sistema visual

Usa esta paleta como base:

| Token | Color |
|---|---|
| Fondo | `#FFF9F5` |
| Texto principal | `#22223B` |
| Texto secundario | `#5F6170` |
| Primario | `#6D5BD0` |
| Lila suave | `#E9E4FF` |
| Verde pastel | `#BFE3D0` |
| Durazno pastel | `#FFD6A5` |
| Superficie | `#FFFFFF` |

Usa texto oscuro sobre los tonos pastel claros. Reserva texto blanco para el color primario oscuro. Evita gradientes saturados, sombras fuertes, vidrio excesivo y animaciones decorativas.

El diseño debe sentirse contemporáneo, cálido y profesional:

- composición mobile-first;
- tarjetas amplias con bordes suaves;
- jerarquía tipográfica clara;
- espacio suficiente entre elementos;
- ancho de lectura aproximado de 65 a 72 caracteres;
- tipografía del sistema o fuentes alojadas localmente;
- transiciones breves y compatibles con `prefers-reduced-motion`.

## Accesibilidad

El objetivo es WCAG 2.2 nivel AA.

- Usa HTML semántico y un solo `h1` por página.
- Mantén el orden correcto de encabezados.
- Incluye un enlace visible al foco para saltar al contenido.
- Toda función debe ser utilizable con teclado.
- Proporciona foco visible y no lo ocultes detrás de elementos fijos.
- Usa objetivos táctiles de al menos 44×44 px como criterio de diseño.
- Mantén contraste AA y no comuniques información solo mediante color.
- Define `lang="es-MX"`.
- Permite zoom al 200 % sin pérdida de contenido o funcionalidad.
- Proporciona textos alternativos y nombres accesibles específicos.
- Si un enlace abre otra pestaña, comunícalo de forma accesible.

Comprueba el diseño como mínimo a 320, 768, 1024 y 1440 px.

## Privacidad

La primera versión no debe recopilar datos en el sitio.

- Usa `mailto:` para contacto.
- No añadas formularios, cookies, analítica, píxeles, chat, iframes o scripts de terceros.
- El aviso puede describir los datos que una persona envíe voluntariamente por correo, pero debe coincidir con el funcionamiento real.
- No solicites datos personales sensibles.
- No inventes nombre legal, domicilio, correo ARCO, periodos de conservación, transferencias o procedimientos.
- Trata los campos legales faltantes como bloqueos de contenido para producción.
- El aviso debe cubrir identidad y domicilio del responsable, datos tratados, finalidades, limitación de uso o divulgación, derechos ARCO, cambios y fecha de actualización.
- Señala en el README que el texto requiere revisión jurídica antes de su publicación definitiva. No muestres advertencias internas dentro de la experiencia pública.
- Si se añade recopilación de datos en el futuro, detén la implementación hasta actualizar alcance, aviso y controles técnicos.

## Seguridad

Mantén una política de mínimo privilegio y una superficie de ataque pequeña.

- Nunca guardes tokens, claves, contraseñas o información privada en el repositorio.
- No uses `set:html`, `innerHTML` o contenido HTML no confiable.
- No uses scripts, fuentes, estilos, imágenes o widgets remotos sin una necesidad aprobada.
- Usa `rel="noopener noreferrer"` en enlaces externos que abran otra pestaña.
- No añadas CORS permisivo.
- Mantén CSP sin `script-src 'unsafe-inline'` y sin comodines.
- No desactives una protección para resolver un error sin investigar primero la causa.
- Revisa dependencias nuevas por necesidad, mantenimiento, licencia y vulnerabilidades.
- Limita workflows de GitHub Actions a `permissions: contents: read`, salvo necesidad documentada.
- Configura Dependabot semanal para npm y GitHub Actions.
- Protege `main`, exige CI y evita pushes forzados cuando la configuración del repositorio lo permita.

`public/_headers` debe incluir, como mínimo:

- `Content-Security-Policy` restrictiva con `default-src 'self'`, `object-src 'none'`, `frame-ancestors 'none'`, `form-action 'none'`, `connect-src 'none'` y fuentes locales;
- `Strict-Transport-Security`;
- `X-Content-Type-Options: nosniff`;
- `X-Frame-Options: DENY` como compatibilidad adicional;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `Permissions-Policy` con cámara, micrófono, geolocalización, pagos y USB desactivados;
- políticas de apertura y recursos entre orígenes adecuadas para un sitio local y estático.

Después de modificar CSP o recursos, prueba el sitio publicado y revisa la consola. No des por hecho que los encabezados se aplican porque el archivo existe.

## SEO y metadatos

- Define título y descripción únicos por ruta.
- Configura la URL canónica desde el dominio final.
- Incluye Open Graph con una imagen local apropiada.
- Añade favicon, `robots.txt`, sitemap y una página 404.
- Evita que las vistas previas y el subdominio alternativo se indexen cuando exista un dominio de producción.
- No uses texto o metadatos que no estén respaldados por el contenido visible.

## Flujo de trabajo para agentes

1. Inspecciona el repositorio y las instrucciones antes de editar.
2. Conserva cambios existentes del usuario y limita cada cambio al objetivo solicitado.
3. Si el proyecto aún no existe, crea la base mínima de Astro antes de añadir contenido.
4. Implementa primero estructura y contenido; luego estilo, seguridad y automatización.
5. Reutiliza patrones existentes antes de crear nuevas abstracciones.
6. Ejecuta las verificaciones relevantes y corrige los fallos causados por el cambio.
7. Revisa visualmente cualquier cambio de interfaz.
8. En el resumen final, distingue resultados comprobados de pasos pendientes o no accesibles.

No hagas commits, pushes ni despliegues salvo que el usuario lo pida. No elimines cambios ajenos para hacer pasar las pruebas.

## Comandos de verificación

Una vez creado el proyecto, deben existir scripts equivalentes a:

```bash
npm run check
npm run build
npm audit --audit-level=high
```

La CI debe ejecutar instalación limpia, comprobación de tipos, compilación y auditoría de vulnerabilidades altas.

Además de los comandos, realiza estas comprobaciones cuando el cambio lo amerite:

- enlaces internos y externos;
- ausencia de errores en consola;
- navegación con teclado;
- zoom al 200 %;
- reducción de movimiento;
- responsive en los anchos definidos;
- recursos bloqueados por CSP;
- encabezados reales en producción;
- Lighthouse móvil, con objetivo de 95 o más en rendimiento, accesibilidad, buenas prácticas y SEO.

No afirmes que Lighthouse, encabezados o despliegue fueron verificados si no ejecutaste la prueba correspondiente.

## Despliegue

El destino previsto es Cloudflare Pages:

- rama de producción: `main`;
- comando de compilación: `npm run build`;
- directorio de salida: `dist`;
- sin variables secretas para la primera versión;
- HTTPS y dominio personalizado administrados en Cloudflare.

No conviertas el proyecto a SSR para desplegarlo. Si Cloudflare no está disponible, entrega instrucciones y deja el despliegue marcado como pendiente.

## Definición de terminado

Una tarea está terminada cuando:

- cumple el alcance solicitado sin funciones adicionales;
- no contiene secretos ni placeholders destinados a producción;
- las descripciones de proyectos están respaldadas por sus repositorios;
- `npm run check` y `npm run build` pasan;
- no quedan vulnerabilidades altas conocidas introducidas por el cambio;
- la interfaz fue revisada en móvil y escritorio;
- teclado, foco, contraste y zoom siguen funcionando;
- enlaces, imágenes y metadatos son correctos;
- CSP y encabezados no rompen el sitio;
- el resumen final incluye cambios, verificaciones y cualquier riesgo o pendiente real.

