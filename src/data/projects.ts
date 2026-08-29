export type Project = {
  slug: string;
  title: string;
  description: string;
  repositoryUrl: `https://github.com/${string}`;
  image: string;
  imageAlt: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: 'sanangel-ai',
    title: 'SanAngel AI',
    description:
      'Backend para automatizar la atención de una cadena de carnicerías sin dejar que el modelo invente información comercial. Integra FastAPI con OpenAI Responses API y un webhook de WhatsApp autenticado con HMAC-SHA256; además separa el acuse de recibo del procesamiento y controla duplicados en memoria.',
    repositoryUrl: 'https://github.com/BrandonLC16/SanAngel_AI',
    image: '/images/projects/sanangel-ai.webp',
    imageAlt:
      'Ilustración de un asistente conversacional conectado a mensajes, seguridad y atención comercial.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'WhatsApp'],
  },
  {
    slug: 'inventario',
    title: 'Plataforma de inventario',
    description:
      'Sistema para administrar productos y existencias entre almacenes con operaciones trazables. Combina una API modular en Java y Spring Boot con PostgreSQL y un cliente Angular; implementa ajustes atómicos, bloqueo pesimista, reservas contra sobreventa, kardex, recepciones parciales y autenticación JWT por roles.',
    repositoryUrl: 'https://github.com/BrandonLC16/Inventario',
    image: '/images/projects/inventario.webp',
    imageAlt:
      'Ilustración de almacenes, cajas y un panel para controlar movimientos de inventario.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular'],
  },
  {
    slug: 'deteccion',
    title: 'Reconocimiento de señas',
    description:
      'Aplicación de escritorio que reconoce señas estáticas mediante la geometría de una o dos manos, con procesamiento local. Usa MediaPipe y OpenCV para detectar 21 landmarks, normaliza los vectores, compara plantillas por similitud coseno y estabiliza resultados en el tiempo para reducir cambios aislados.',
    repositoryUrl: 'https://github.com/BrandonLC16/Deteccion',
    image: '/images/projects/deteccion.webp',
    imageAlt:
      'Ilustración de una mano con puntos de referencia analizada por una cámara de escritorio.',
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'NumPy'],
  },
  {
    slug: 'gestion-venta',
    title: 'Gestión de ventas',
    description:
      'Aplicación de escritorio para concentrar ventas y catálogos operativos en una interfaz Java. Gestiona clientes, empleados, proveedores y productos, registra ventas mediante consultas preparadas y conserva su historial en MySQL; el proyecto incluye esquema SQL y empaquetado ejecutable con Ant para Java 21.',
    repositoryUrl: 'https://github.com/BrandonLC16/GestionVenta',
    image: '/images/projects/gestion-venta.webp',
    imageAlt:
      'Ilustración de una terminal de venta con productos, recibo y registros comerciales.',
    technologies: ['Java 21', 'Swing', 'MySQL', 'Ant'],
  },
];
