export const listTools = [
  { id: 1, gambar: '/assets/tools/python.png', nama: 'Python', ket: 'Lógica y desarrollo backend', dad: '0' },
  { id: 2, gambar: '/assets/tools/postgresql.png', nama: 'PostgreSQL', ket: 'Datos y consultas SQL', dad: '60' },
  { id: 3, gambar: '/assets/tools/js.png', nama: 'JavaScript', ket: 'Interacción en la web', dad: '120' },
  { id: 4, gambar: '/assets/tools/reactjs.png', nama: 'React', ket: 'Interfaces por componentes', dad: '180' },
  { id: 5, gambar: '/assets/tools/html.png', nama: 'HTML5', ket: 'Estructura de contenido', dad: '0' },
  { id: 6, gambar: '/assets/tools/css.png', nama: 'CSS3', ket: 'Diseño adaptable', dad: '60' },
  { id: 7, gambar: '/assets/tools/tailwind.png', nama: 'Tailwind CSS', ket: 'Estilos y composición visual', dad: '120' },
  { id: 8, gambar: '/assets/tools/github.png', nama: 'GitHub', ket: 'Repositorios y versiones', dad: '180' },
  { id: 9, gambar: '/assets/tools/vscode.png', nama: 'VS Code', ket: 'Entorno de desarrollo', dad: '0' },
  { id: 10, gambar: '/assets/tools/vite.png', nama: 'Vite', ket: 'Desarrollo y compilación web', dad: '60' },
  { id: 11, gambar: '/assets/tools/supabase.png', nama: 'Supabase', ket: 'Servicios de datos', dad: '120' },
];
import CardCipJunin from "/assets/proyek/card-cip-junin.png";
import AsistenciaMariscal from "/assets/proyek/asistencia-mariscal.svg";
import SensorPilcomayo from "/assets/proyek/sensor-pilcomayo.svg";

export const listProyek = [
  {
    id: 1,
    gambar: CardCipJunin,
    title: "CARD · CIP Junín",
    subtitle: "Sitio web del Centro de Arbitraje y Resolución de Disputas del CIP Junín.",
    fullDescription: "Proyecto web institucional del Centro de Arbitraje y Resolución de Disputas del Colegio de Ingenieros del Perú, Consejo Departamental de Junín. Reúne información sobre la institución, servicios, arbitraje, juntas de resolución de disputas, normativa y acceso a mesa de partes.",
    demo: "https://www.cip-junin.org.pe/card"
  },
  {
    id: 2,
    gambar: AsistenciaMariscal,
    title: "Sistema de asistencia · Mariscal Castilla",
    subtitle: "Sistema de asistencia para el colegio Mariscal Castilla, desarrollado de forma local.",
    fullDescription: "Sistema de asistencia desarrollado para el colegio Mariscal Castilla. El proyecto se ejecuta en un entorno local y no cuenta con una URL pública.",
    status: "Proyecto local",
    category: "Gestión de asistencia"
  },
  {
    id: 3,
    gambar: SensorPilcomayo,
    title: "Sensor de contaminación · Pilcomayo",
    subtitle: "Sistema de sensores para detectar contaminación en el río de Pilcomayo.",
    fullDescription: "Proyecto de un sistema de sensores para detectar contaminación en el río de Pilcomayo. Orientado al monitoreo ambiental del agua, sin una URL pública disponible.",
    status: "Sin enlace público",
    category: "Monitoreo ambiental"
  },
];
