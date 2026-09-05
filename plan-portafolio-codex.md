# Plan rápido de trabajo: portafolio web de proyectos

**Objetivo:** publicar en una jornada de trabajo un portafolio moderno, rápido, accesible y seguro que presente tu perfil, muestre tus repositorios de GitHub y contenga un aviso de privacidad básico.

**Resultado final:** dos rutas públicas:

- `/`: presentación personal, proyectos y llamada a contacto.
- `/privacidad/`: aviso de privacidad.

El sitio será estático. No tendrá base de datos, inicio de sesión, formulario, cookies, analítica ni código de terceros en el primer lanzamiento. El contacto será un enlace `mailto:`. Esta decisión reduce el tiempo de desarrollo, el mantenimiento y la superficie de ataque.

---

## 1. Decisión técnica

### Tecnología elegida

- **Astro con TypeScript estricto.** Astro es apropiado para sitios centrados en contenido y puede entregar las páginas sin JavaScript en el navegador. TypeScript ayuda a detectar proyectos incompletos o datos mal escritos antes de publicar.
- **CSS propio.** Sin Tailwind, React, librerías de componentes ni paquetes de iconos. Para dos páginas, esas dependencias añaden mantenimiento sin aportar suficiente valor.
- **Contenido local tipado.** Los proyectos vivirán en `src/data/projects.ts`; no se consultará la API de GitHub cuando una persona visite la página.
- **Imágenes locales optimizadas.** Capturas reales o ilustraciones propias en WebP/AVIF. No se enlazarán imágenes remotas de forma directa.
- **Hosting: Cloudflare Pages.** Compilación desde GitHub, HTTPS, CDN, despliegues automáticos y vistas previas por cambio. Configuración: rama `main`, comando `npm run build`, directorio `dist`.

### Por qué esta configuración permite terminar rápido

La página no necesita servidor. El contenido cambia solamente cuando tú haces un cambio en GitHub y Cloudflare vuelve a compilar. Al eliminar formulario, API en producción y scripts externos, también se puede aplicar una política de seguridad del navegador muy restrictiva.

### Dependencias mínimas

- `astro`
- `typescript`
- `@astrojs/check`

Usar la versión estable vigente al crear el proyecto, guardar `package-lock.json` y compilar siempre con `npm ci` en integración continua.

---

## 2. Información necesaria antes de empezar (30 minutos)

Completa esta ficha. Es el único bloqueo real para que Codex produzca contenido correcto:

| Dato | Contenido |
|---|---|
| Nombre profesional | `{Brandon Mauricio López Canizales}` |
| Rol o especialidad | `{Ing. Desarrollo de Software}` |
| Presentación, 2–3 frases | `{Desarrollador con experiencia profesional en automatización, Experiencia practica trabajando con Java, Spring, JavaScript, TypeScript, Python, Perfil analitico, orientado a la calidad.}` |
| GitHub | `{https://github.com/BrandonLC16}` |
| Repositorios seleccionados | `{https://github.com/BrandonLC16/SanAngel_AI, https://github.com/BrandonLC16/Inventario, https://github.com/BrandonLC16/Deteccion, https://github.com/BrandonLC16/GestionVenta}` |
| Correo profesional | `{brandon1697@live.com.mx}` |
| Ciudad/país que deseas mostrar | `{Monterrey, Nuebo León, Mécxico}` |
| Responsable del tratamiento | `{Brandon Mauricio Lopez Canizales}` |
| Domicilio requerido para el aviso | `{Itrio #339 Solidaridad Monterrey}` |
| Correo para solicitudes ARCO | `{brandon1697@live.com.mx}` |
| Dominio deseado | `{lcbrandon.com}` |

**Regla:** Codex no debe inventar datos biográficos, funciones de un repositorio ni información legal. Todo campo sin información queda marcado como pendiente y no debe llegar a producción.

---

## 3. Alcance visual y de contenido

### Página principal

1. **Encabezado compacto:** nombre o monograma, enlaces “Proyectos” y “Privacidad”, botón “Hablemos”.
2. **Presentación:** nombre, rol, texto breve, botón a proyectos y enlace de contacto. Una composición asimétrica suave puede dar personalidad sin sacrificar lectura.
3. **Proyectos:** cuadrícula de 3 a 6 tarjetas. Cada tarjeta contiene imagen, título, descripción de 35–55 palabras, tecnologías breves y enlace al repositorio.
4. **Contacto:** una frase y botón de correo. El correo debe ser visible para que el enlace siga siendo comprensible.
5. **Pie:** nombre, año, GitHub y privacidad.

No añadir testimonios, blog, experiencia, contadores, carruseles, filtros ni animaciones complejas en la primera versión.

### Aviso de privacidad

Una página sobria, legible y enlazada desde el encabezado y el pie. Debe cubrir:

- identidad y domicilio del responsable;
- datos que pueden recibirse por correo, por ejemplo nombre, correo y contenido del mensaje;
- finalidades: responder, evaluar una solicitud de servicio y, si procede, preparar una propuesta;
- ausencia de datos sensibles solicitados;
- conservación y eliminación;
- medios para limitar uso o divulgación;
- mecanismo para ejercer acceso, rectificación, cancelación y oposición (ARCO);
- transferencias o proveedores que intervengan, si aplican;
- medio para comunicar cambios y fecha de última actualización;
- aclaración de que el sitio no usa cookies, analítica ni formulario, mientras eso siga siendo verdad.

La Ley Federal de Protección de Datos Personales en Posesión de los Particulares vigente exige elementos específicos en su artículo 15. El texto final debe revisarse con una persona profesional del derecho antes de publicarse; esta plantilla es planificación técnica, no asesoría legal.

### Dirección de arte

Estilo contemporáneo, cálido y profesional: tarjetas amplias, mucho espacio, bordes suaves, sombras discretas y sin gradientes saturados.

**Paleta propuesta, ya comprobada para contraste en las combinaciones indicadas:**

| Uso | Color |
|---|---|
| Fondo cálido | `#FFF9F5` |
| Texto principal | `#22223B` |
| Texto secundario | `#5F6170` |
| Primario | `#6D5BD0` |
| Lila suave | `#E9E4FF` |
| Verde pastel | `#BFE3D0` |
| Durazno pastel | `#FFD6A5` |
| Superficie | `#FFFFFF` |

Contrastes relevantes: texto principal/fondo 14.79:1, texto secundario/fondo 5.87:1 y blanco/primario 5.18:1. No usar texto blanco sobre los tonos pastel claros; usar `#22223B`.

**Tipografía:** pila del sistema (`Inter` solamente si se aloja localmente). Tamaño base mínimo de 16 px, ancho de lectura de 65–72 caracteres y jerarquía fluida con `clamp()`.

**Movimiento:** solo transiciones breves de color o elevación. Respetar `prefers-reduced-motion`.

---

## 4. Modelo de contenido de proyectos

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

Para cada repositorio, Codex debe revisar el README, manifiestos como `package.json` o equivalentes y archivos principales. La descripción debe explicar el problema, la solución y una cualidad técnica comprobable. Si la evidencia no está en el repositorio, no se afirma.

### Imágenes

Orden de preferencia:

1. captura real del proyecto, recortada a 16:9;
2. diagrama o composición original basada en su función;
3. ilustración abstracta coherente con la paleta.

Exportar a WebP o AVIF, aproximadamente 1600×900, normalmente por debajo de 200 KB, con ancho, alto y texto alternativo. Evitar logos o material con licencias dudosas.

---

## 5. Arquitectura de archivos

```text
/
├─ public/
│  ├─ _headers
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ images/projects/
├─ src/
│  ├─ components/
│  │  ├─ Header.astro
│  │  ├─ ProjectCard.astro
│  │  └─ Footer.astro
│  ├─ data/projects.ts
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/index.astro
│  ├─ pages/privacidad.astro
│  └─ styles/global.css
├─ .github/
│  ├─ workflows/ci.yml
│  └─ dependabot.yml
├─ astro.config.mjs
├─ package.json
├─ package-lock.json
├─ tsconfig.json
└─ README.md
```

Configurar Astro con salida estática, URL canónica del dominio y TypeScript `strictest` si el proyecto lo acepta sin fricción; `strict` como alternativa. No instalar adaptador de SSR.

---

## 6. Seguridad desde el primer despliegue

### Decisiones estructurales

- Sin datos secretos, claves o tokens en el repositorio.
- Sin HTML introducido por visitantes ni uso de `set:html`.
- Sin dependencias externas en tiempo de ejecución.
- Sin scripts de analítica, fuentes remotas, iframes o widgets.
- Enlaces externos con `rel="noopener noreferrer"`; si abren otra pestaña, indicarlo de forma accesible.
- Validar que todas las URLs de repositorios comiencen con `https://github.com/`.
- Mantener el correo y los datos legales en un único archivo de configuración para evitar inconsistencias.
- Imágenes con nombre seguro, sin SVG de origen desconocido.

### Archivo `public/_headers`

Partir de esta política y ajustarla solamente si una prueba demuestra que el sitio requiere otra fuente:

```text
/*
  Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'none'; media-src 'none'; worker-src 'none'; manifest-src 'self'; upgrade-insecure-requests
  Referrer-Policy: strict-origin-when-cross-origin
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin
  X-Permitted-Cross-Domain-Policies: none
  Strict-Transport-Security: max-age=31536000; includeSubDomains
```

No añadir `'unsafe-inline'` a `script-src`. Si una característica lo exige, primero debe moverse a un archivo local; si no es posible, documentar y revisar el cambio. Como el sitio es estático, Cloudflare puede aplicar `_headers` directamente. Si en el futuro se añade SSR o una Function, esos encabezados tendrán que emitirse también desde la función.

### Repositorio y cadena de suministro

- Confirmar `npm run check`, `npm run build` y `npm audit --audit-level=high` en cada cambio.
- Activar Dependabot semanal para npm y GitHub Actions.
- Activar alertas de dependencias, actualizaciones de seguridad y escaneo de secretos disponibles en GitHub.
- Proteger `main`: requerir la comprobación de CI antes de integrar cambios y bloquear pushes forzados.
- Limitar permisos del workflow: `contents: read`.
- No desplegar desde una computadora personal con tokens permanentes; conectar Cloudflare al repositorio y usar el flujo administrado.

---

## 7. SEO, accesibilidad y calidad

- HTML semántico: un `h1`, encabezados ordenados, `main`, `nav`, `section`, `article` y `footer`.
- Enlace “Saltar al contenido”, foco visible, navegación completa con teclado.
- Objetivos táctiles de al menos 44×44 px como criterio de diseño, por encima del mínimo WCAG de 24×24 px en los casos aplicables.
- Contraste WCAG AA, texto redimensionable y sin información comunicada solo por color.
- `lang="es-MX"`, títulos y descripciones únicos, URL canónica, Open Graph y favicon.
- Imágenes con dimensiones, carga diferida bajo el primer pliegue y texto alternativo útil.
- Diseño comprobado a 320, 768, 1024 y 1440 px.
- Página 404 sencilla.
- `robots.txt` y sitemap solo para el dominio de producción; las vistas previas deben usar `X-Robots-Tag: noindex`.

**Criterios de aceptación:**

- `npm run check`, CI y compilación terminan sin errores.
- No existen secretos ni campos `{PENDIENTE}` en producción.
- Todos los enlaces funcionan y apuntan al repositorio correcto.
- No hay errores en consola ni recursos bloqueados inesperadamente por CSP.
- Lighthouse en móvil: objetivo ≥95 en rendimiento, accesibilidad, buenas prácticas y SEO; cualquier excepción queda explicada.
- Prueba manual con teclado, reducción de movimiento y zoom al 200 %.
- Encabezados presentes en el dominio publicado y HTTPS activo.

---

## 8. Cronograma para terminar en una jornada

| Bloque | Tiempo | Entregable |
|---|---:|---|
| Preparar datos y elegir repositorios | 30 min | Ficha completa y 3–6 URLs |
| Investigar repositorios y redactar | 60 min | Descripciones verificadas y concepto visual |
| Crear estructura y sistema visual | 75 min | Dos rutas funcionales y responsive |
| Preparar y optimizar imágenes | 60 min | Imágenes locales listas |
| Privacidad, SEO y accesibilidad | 45 min | Contenido final y metadatos |
| Seguridad y automatización | 45 min | `_headers`, CI y Dependabot |
| Pruebas, correcciones y despliegue | 60 min | Sitio público verificado |
| **Total estimado** | **6 h 15 min** | Primera versión publicada |

Si faltan capturas o textos, publicar primero tres proyectos sólidos. Es mejor una selección breve y comprobada que seis tarjetas incompletas.

---

## 9. Prompts para trabajar con Codex

La documentación oficial de OpenAI recomienda prompts centrados en el resultado, con criterios de éxito, restricciones, evidencia disponible y forma de entrega. Usa el **prompt maestro** para que Codex complete el trabajo de punta a punta. Los prompts por fase sirven si prefieres revisar cada resultado antes del siguiente.

### Prompt maestro recomendado

```text
Construye y deja listo para publicar mi portafolio profesional en este repositorio.

Resultado esperado:
- Un sitio estático con Astro y TypeScript.
- Dos rutas: `/` para presentación, proyectos y contacto; `/privacidad/` para el aviso de privacidad.
- Diseño moderno, cálido y responsive con esta paleta: fondo #FFF9F5, texto #22223B, texto secundario #5F6170, primario #6D5BD0, lila #E9E4FF, verde #BFE3D0, durazno #FFD6A5 y blanco #FFFFFF.
- De 3 a 6 tarjetas de proyecto, cada una con título, descripción verificada de 35–55 palabras, imagen local optimizada, tecnologías y enlace al repositorio.
- Listo para Cloudflare Pages con `npm run build` y salida `dist`.

Mis datos:
- Nombre: {Brandon Mauricio Lopez Canizales}
- Rol: {Ing. Desarrollo de Software}
- Presentación: {Desarrollador con experiencia profesional en automatización, Experiencia practica trabajando con Java, Spring, JavaScript, TypeScript, Python, Perfil analitico, orientado a la calidad.}
- GitHub: {https://github.com/BrandonLC16}
- Repositorios: {https://github.com/BrandonLC16/SanAngel_AI, https://github.com/BrandonLC16/Inventario, https://github.com/BrandonLC16/Deteccion, https://github.com/BrandonLC16/GestionVenta}
- Correo profesional: {brandon1697@live.com.mx}
- Ubicación pública: {Monterrey, Nuevo Leon, Mexico}
- Responsable del tratamiento: {Brandon Mauricio Lopez Canizales}
- Domicilio del responsable: {Itrio 339, Solidaridad, Monterrey}
- Correo ARCO: {brandon1697@live.com.mx}
- Dominio: {lcbrandon.com}

Antes de editar, inspecciona el repositorio actual. Investiga cada repositorio de proyecto usando README, manifiestos y archivos principales. No inventes características: si algo no puede comprobarse, omítelo o márcalo como pendiente. Reutiliza capturas propias existentes; si no hay una imagen adecuada, crea una composición original coherente con la función del proyecto y guárdala localmente.

Restricciones:
- Salida estática, sin SSR, backend, API de GitHub en el navegador, formulario, cookies, analítica, fuentes remotas, iframes ni scripts de terceros.
- Contacto mediante `mailto:`.
- CSS propio y dependencias mínimas. No React, Tailwind ni librerías de componentes.
- No uses `set:html` ni `script-src 'unsafe-inline'`.
- HTML semántico, WCAG 2.2 AA, navegación por teclado, foco visible, `prefers-reduced-motion` y objetivos táctiles de 44 px.
- Enlaces externos seguros y metadatos SEO completos.
- Implementa `public/_headers` con CSP restrictiva, HSTS, `nosniff`, protección contra frames, política de referente, permisos desactivados y políticas de origen.
- Añade CI para instalar con `npm ci`, comprobar tipos, compilar y auditar vulnerabilidades altas. Añade Dependabot semanal para npm y GitHub Actions.
- No incluyas secretos. No publiques placeholders.

Aviso de privacidad:
Redáctalo en español claro para un profesional independiente en México y cubre identidad y domicilio del responsable, datos recibidos por correo, finalidades, conservación, limitación de uso, derechos ARCO, transferencias si aplican, cambios y fecha de actualización. Indica que no hay cookies, analítica ni formulario solo si la implementación lo confirma. Marca el texto como pendiente de revisión jurídica en el README, no en la experiencia principal.

Verificación obligatoria:
- Ejecuta las comprobaciones existentes, `npm run check`, compilación y auditoría.
- Revisa responsive a 320, 768, 1024 y 1440 px.
- Comprueba teclado, zoom 200 %, enlaces, consola y que la CSP no rompa recursos.
- Si puedes probar el despliegue, verifica HTTPS y encabezados de respuesta.

Al terminar, entrega un resumen breve con: cambios realizados, archivos clave, pruebas ejecutadas con su resultado, campos que aún requieren mis datos y pasos exactos de despliegue en Cloudflare Pages. No declares completado nada que no hayas verificado.
```

### Prompt 1: investigación de repositorios

```text
Analiza estos repositorios públicos: {LISTA_DE_URLS}. Para cada uno revisa README, manifiestos, estructura y archivos principales. Devuélveme una tabla con: nombre, problema que resuelve, funcionamiento comprobado, tecnologías comprobadas, elemento diferenciador, descripción propuesta de 35–55 palabras, concepto de imagen 16:9 y URL exacta. Cita el archivo o sección del repositorio que sustenta cada afirmación. No inventes; marca “sin evidencia” cuando corresponda. Al final recomienda los 3–6 proyectos que mejor presentan mi perfil de {ROL} y explica la selección en una frase por proyecto.
```

### Prompt 2: estructura y diseño

```text
Implementa la primera versión visual del portafolio en Astro con TypeScript estricto. Crea `/` y `/privacidad/`, componentes reutilizables solo donde reduzcan duplicación y un archivo tipado para proyectos. Usa la paleta y estructura del plan. Mantén CSS propio, HTML semántico, diseño mobile-first y cero JavaScript de cliente salvo que una función esencial lo requiera. No instales React, Tailwind, librerías de UI, fuentes o iconos remotos. Usa texto y proyectos ya aprobados; no inventes contenido. Compila y corrige todos los errores antes de presentar el resultado.
```

### Prompt 3: imágenes y contenido

```text
Completa las tarjetas usando las descripciones verificadas. Para cada proyecto elige primero una captura real disponible; si no existe, crea una ilustración original 16:9 que represente su función, sin texto pequeño ni logos ajenos. Mantén una dirección de arte consistente con lila, verde y durazno pastel. Exporta WebP o AVIF optimizado, añade dimensiones y texto alternativo que describa la imagen sin repetir el título. Guarda todo localmente y confirma que ninguna página hace hotlinking.
```

### Prompt 4: privacidad y seguridad

```text
Haz una revisión específica de privacidad y seguridad de este sitio estático. Confirma que no recopila datos en el navegador, no usa cookies, analítica, formularios, iframes ni recursos remotos. Redacta el aviso con mis datos reales y los elementos del artículo 15 de la LFPDPPP vigente; no inventes identidad, domicilio ni procedimiento ARCO. Implementa una CSP restrictiva sin `unsafe-inline`, HSTS, `nosniff`, protección contra frames, Referrer-Policy, Permissions-Policy y políticas de origen mediante `public/_headers`. Revisa enlaces externos, uso de HTML dinámico, secretos, dependencias, SVG e imágenes. Añade CI y Dependabot. Ejecuta comprobación de tipos, build y auditoría y entrega hallazgos por severidad con evidencia.
```

### Prompt 5: control de calidad

```text
Audita el portafolio como revisor final. Comprueba visualmente 320, 768, 1024 y 1440 px, navegación por teclado, foco visible, orden de encabezados, enlace para saltar al contenido, contraste, zoom 200 %, reducción de movimiento, textos alternativos, enlaces rotos, consola, metadatos SEO y página 404. Ejecuta `npm run check`, build y auditoría de dependencias. Corrige lo que esté dentro del alcance. Entrega una tabla final de criterios con estado “aprobado”, “corregido” o “pendiente”, y nunca marques aprobado sin evidencia.
```

### Prompt 6: despliegue

```text
Prepara este repositorio para Cloudflare Pages sin convertirlo a SSR. Confirma rama de producción `main`, comando `npm run build` y directorio `dist`. Configura la URL canónica para {DOMINIO}, sitemap/robots para producción y `noindex` para vistas previas de Pages. Documenta cómo conectar el repositorio desde Workers & Pages, añadir el dominio y verificar HTTPS, DNS y encabezados. Tras el despliegue, comprueba la página principal, `/privacidad/`, 404, recursos, CSP y enlaces. Devuelve la URL pública y evidencia de las comprobaciones; si no tienes acceso a Cloudflare, deja instrucciones exactas y señala que el despliegue sigue pendiente.
```

---

## 10. Pasos de publicación en Cloudflare Pages

1. Subir el repositorio a GitHub con `main` como rama principal.
2. En Cloudflare, abrir **Workers & Pages**, crear una aplicación de Pages e importar el repositorio.
3. Elegir `main`, comando `npm run build` y salida `dist`.
4. No configurar variables secretas: esta versión no las necesita.
5. Hacer el primer despliegue y revisar la URL `*.pages.dev`.
6. Añadir el dominio propio, completar DNS y esperar el certificado HTTPS administrado.
7. Verificar encabezados en `/` y `/privacidad/`, que los recursos no sean bloqueados y que la URL canónica use el dominio final.
8. Configurar vistas previas con `X-Robots-Tag: noindex` y evitar indexar el subdominio de Pages cuando ya exista dominio propio.
9. Activar protección de rama y funciones de seguridad del repositorio.

---

## 11. Mantenimiento mínimo

- **Al añadir un proyecto:** editar `projects.ts`, incorporar una imagen local y ejecutar las comprobaciones.
- **Semanal:** revisar los PR de Dependabot; no combinar automáticamente sin CI.
- **Mensual:** comprobar enlaces, correo y repositorios destacados.
- **Cuando cambie la recopilación de datos:** actualizar primero el aviso de privacidad y la CSP. Un formulario, analítica o newsletter cambian el alcance legal y técnico.
- **Anual:** revisar datos profesionales, fecha del aviso y dependencias mayores.

---

## 12. Fuentes consultadas

- [OpenAI: guía vigente de modelos y buenas prácticas de prompting](https://developers.openai.com/api/docs/guides/latest-model)
- [Astro: soporte y configuración de TypeScript](https://v5.docs.astro.build/en/guides/typescript/)
- [Cloudflare: desplegar Astro en Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Cloudflare: encabezados personalizados en Pages](https://developers.cloudflare.com/pages/configuration/headers/)
- [OWASP: HTTP Security Response Headers](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)
- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Cámara de Diputados: LFPDPPP vigente](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)
- [GitHub: guía rápida para proteger un repositorio](https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository)
- [GitHub: actualizaciones de Dependabot](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates)
