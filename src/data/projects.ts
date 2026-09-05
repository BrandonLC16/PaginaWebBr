export type Project = {
  slug: string;
  title: string;
  focus: string;
  description: string;
  repositoryUrl: `https://github.com/${string}`;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  technologies: string[];
  video?: {
    src: string;
    label: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'deteccion',
    title: 'Reconocimiento de señas',
    focus: 'Visión por computadora · Escritorio',
    description:
      'Aplicación de escritorio que reconoce señas estáticas mediante la geometría de una o dos manos, con procesamiento local. Usa MediaPipe y OpenCV para detectar 21 landmarks, normaliza los vectores, compara plantillas por similitud coseno y estabiliza resultados en el tiempo para reducir cambios aislados.',
    repositoryUrl: 'https://github.com/BrandonLC16/Deteccion',
    image: '/images/projects/deteccion-poster-v2.webp',
    imageWidth: 928,
    imageHeight: 928,
    imageAlt:
      'Demostración del programa identificando una seña frente a la cámara y mostrando su similitud.',
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'NumPy'],
    video: {
      src: '/images/projects/deteccion-demo-enfoque-v2.mp4',
      label: 'Demostración en video del reconocimiento de señas en funcionamiento',
    },
  },
  {
    slug: 'sanangel-ai',
    title: 'SanAngel AI',
    focus: 'Backend · Automatización conversacional',
    description:
      'Backend para automatizar la atención de una cadena de carnicerías sin dejar que el modelo invente información comercial. Integra FastAPI con OpenAI Responses API y un webhook de WhatsApp autenticado con HMAC-SHA256; además separa el acuse de recibo del procesamiento y controla duplicados en memoria.',
    repositoryUrl: 'https://github.com/BrandonLC16/SanAngel_AI',
    image: '/images/projects/sanangel-ai-portfolio-v2.webp',
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt:
      'Composición de un teléfono con WhatsApp, inteligencia artificial y servicios de una carnicería.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'WhatsApp'],
  },
  {
    slug: 'inventario',
    title: 'Plataforma de inventario',
    focus: 'Full stack · Operaciones',
    description:
      'Sistema para administrar productos y existencias entre almacenes con operaciones trazables. Combina una API modular en Java y Spring Boot con PostgreSQL y un cliente Angular; implementa ajustes atómicos, bloqueo pesimista, reservas contra sobreventa, kardex, recepciones parciales y autenticación JWT por roles.',
    repositoryUrl: 'https://github.com/BrandonLC16/Inventario',
    image: '/images/projects/inventario-portfolio-v2.webp',
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt:
      'Ilustración de un almacén con mercancía, estanterías y una interfaz de control de inventario.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular'],
  },
  {
    slug: 'gestion-venta',
    title: 'Gestión de ventas',
    focus: 'Aplicación de escritorio · Datos',
    description:
      'Aplicación de escritorio para concentrar ventas y catálogos operativos en una interfaz Java. Gestiona clientes, empleados, proveedores y productos, registra ventas mediante consultas preparadas y conserva su historial en MySQL; el proyecto incluye esquema SQL y empaquetado ejecutable con Ant para Java 21.',
    repositoryUrl: 'https://github.com/BrandonLC16/GestionVenta',
    image: '/images/projects/gestion-venta.webp',
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt:
      'Ilustración de una terminal de venta con productos, recibo y registros comerciales.',
    technologies: ['Java 21', 'Swing', 'MySQL', 'Ant'],
  },
];
