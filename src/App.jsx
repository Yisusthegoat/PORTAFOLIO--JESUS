import { useState } from "react";
import { listTools, listProyek } from "./data.js";
import LocalContact from "./components/LocalContact";
import ShinyText from "./components/ShinyText/ShinyText";


import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import Aurora from "./components/Aurora/Aurora";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const learningWeeks = [
  {
    week: "Semana 1",
    title: "Fundamentos de la Web y entorno de trabajo",
    learned: "Aprendí a reconocer cómo funciona una solución web desde su base: qué diferencia existe entre una página, un sitio, una aplicación y un sistema web. También comprendí que la web no solo depende del diseño visible, sino de procesos como DNS, TCP/IP y HTTP, que permiten que el navegador se comunique con los servidores.",
    practice: "En el laboratorio exploré Visual Studio Code, sus partes principales, extensiones y atajos. Esto me ayudó a trabajar de forma más ordenada y rápida al crear archivos para un proyecto web.",
    reflection: "Esta semana me sirvió para entender el panorama general del desarrollo web y el rol que puede cumplir un desarrollador frontend, backend o fullstack."
  },
  {
    week: "Semana 2",
    title: "HTML, XML y estilos con CSS",
    learned: "Aprendí a estructurar contenido usando HTML5 y a comprender la importancia del árbol DOM en el renderizado de una página. También revisé XML como lenguaje de marcado y entendí que una buena estructura facilita la lectura del navegador, el mantenimiento del código y el SEO.",
    practice: "Practiqué CSS3 aplicando propiedades de visualización, unidades de medida, flexbox, grid, position y criterios de diseño responsivo. Con esto pude adaptar una página a diferentes tamaños de pantalla.",
    reflection: "Me quedó claro que HTML define la estructura y CSS comunica la presentación visual; ambos deben trabajar juntos para crear interfaces ordenadas y compatibles."
  },
  {
    week: "Semana 3",
    title: "Frameworks CSS: Bootstrap y Tailwind",
    learned: "Aprendí que Bootstrap permite construir interfaces rápidamente mediante componentes ya preparados, mientras que Tailwind ofrece más control usando clases utilitarias. Comparar ambos enfoques me ayudó a entender cuándo conviene rapidez y cuándo conviene personalización.",
    practice: "Desarrollé vistas usando layouts, botones, tarjetas, formularios, navegación, badges, dropdowns y utilidades de flexbox. También reforcé conceptos como container, display, position, spacing, borders, background y tipografía.",
    reflection: "Esta semana reforcé mi criterio visual: no basta con que una página funcione, también debe verse organizada, ser responsive y mantener coherencia entre sus componentes."
  },
  {
    week: "Semana 4",
    title: "JavaScript, TypeScript, DOM y Canvas",
    learned: "Aprendí a usar JavaScript para dar comportamiento a una página web mediante variables, operadores, tipos de datos, estructuras de control, bucles y funciones. También conocí TypeScript como una forma de escribir código más controlado mediante tipos.",
    practice: "Manipulé elementos del DOM, cambié estilos con JavaScript y trabajé animaciones básicas usando Canvas. Esto me permitió ver cómo el código puede responder a eventos e interactuar con lo que el usuario ve.",
    reflection: "Comprendí que JavaScript convierte una página estática en una experiencia interactiva, y que dominar el DOM es clave para construir interfaces dinámicas."
  },
  {
    week: "Semana 5",
    title: "Desarrollo frontend con frameworks JavaScript",
    learned: "Aprendí cómo se estructura y funciona un framework JavaScript con renderizado del lado del cliente (Client Side Rendering). Revisé la gestión de dependencias, las herramientas de creación de proyectos y el desarrollo basado en componentes usando JSX, props y children. También exploré estilos inline, Style Sheets, Style Modules y frameworks CSS para dar presentación a los componentes.",
    practice: "En el laboratorio 05A practiqué cómo pasar datos mediante props y children y mostrarlos en un componente hijo. Organicé la interfaz en componentes y apliqué estilos para mantener una presentación coherente.",
    reflection: "Comprendí que dividir una interfaz en componentes facilita reutilizar código y que las props y children permiten comunicar y componer sus distintas partes."
  },
  {
    week: "Semana 6",
    title: "Eventos, condicionales, bucles y consumo de APIs",
    learned: "Aprendí a manejar eventos y a mostrar contenido mediante renderizado condicional e iterativo. También revisé formularios, routing y consumo de APIs con promesas, async/await y la librería Axios para obtener datos de una API.",
    practice: "En el laboratorio 06A trabajé con eventos y renderizado condicional e iterativo usando datos de una API. Practiqué cómo responder a las acciones del usuario y representar los resultados en la interfaz.",
    reflection: "Entendí cómo combinar la interacción del usuario con datos externos para construir aplicaciones dinámicas y organizar el contenido según la información disponible."
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };



  return (
    <>
      <div className="portfolio-backdrop fixed inset-0 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <Aurora
          colorStops={["#0EA5E9", "#F97316", "#10B981"]}
          blend={0.25}
          amplitude={0.45}
          speed={0.25}
        />
      </div>
      <main id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center gap-3 mb-6 bg-white/80 text-slate-700 w-fit p-4 rounded-2xl border border-sky-100 shadow-sm">
              <img src="./assets/profile-jesus.jpg" className="w-10 h-10 rounded-md object-cover" alt="Jesus Antonio" />
              <q>Cada problema es una oportunidad para construir algo útil.</q>
            </div>
            <p className="section-eyebrow">DESARROLLO WEB / PORTAFOLIO PERSONAL</p>
            <h1 className="hero-name">
              Jesús Antonio<span>Ñahuinripa Zamudio.</span>
            </h1>
            <p className="mb-6 text-slate-700">
              Desarrollador backend, con conocimientos en Python. Dedicado a crear experiencias digitales modernas y de alto rendimiento a través de soluciones innovadoras y fáciles de usar.
            </p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/CV.pdf" 
                download="Jesus_Antonio_Nahuinripa_Zamudio_CV.pdf" 
                className="font-semibold bg-sky-600 text-white p-4 px-6 rounded-full border border-sky-700 hover:bg-sky-700 transition-colors shadow-sm"
              >
                <ShinyText text="Descargar CV" disabled={false} speed={3} className="custom-class" />
              </a>
              <a href="#project" className="font-semibold bg-white text-slate-800 p-4 px-6 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm">
                <ShinyText text="Explorar Mis Proyectos" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>
          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-3s">
            <figure className="portrait-card">
              <img src="./assets/profile-jesus.jpg" alt="Jesús Antonio Ñahuinripa Zamudio" width="420" height="480" />
              <figcaption><span>Jesús Antonio</span><small>Estudiante de Ingeniería de Sistemas</small></figcaption>
            </figure>
          </div>
        </div>

        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-2xl border border-sky-100 shadow-xl shadow-sky-100/70 bg-white/90 p-6 relative overflow-hidden" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8 relative z-10" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-sky-100">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-5">
                  Sobre Mí
                </h2>
                <p className="mb-6 text-slate-700">
                  Soy JESUS ANTONIO ÑAHUINRIPA ZAMUDIO, estudiante de Ingeniería de Sistemas del IX ciclo en la Universidad Nacional del Centro del Perú (UNCP). Me desempeño como desarrollador backend, con sólidos conocimientos en ciberseguridad y automatización mediante Python (scripts). Cuento con experiencia en entornos y herramientas como Parrot OS, Red Hat y Pandora FMS, así como conocimientos en seguridad ofensiva (nivel intermedio – Black Hat), enfocados en el análisis de vulnerabilidades y pruebas de seguridad. Además, poseo conocimientos en Machine Learning y Deep Learning, aplicando conceptos de aprendizaje automático y redes neuronales para el análisis de datos y desarrollo de soluciones inteligentes. Actualmente, me encuentro en constante proceso de aprendizaje, con un fuerte interés en fortalecer mis competencias en seguridad informática e inteligencia artificial
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      6<span className="text-sky-600">+</span>
                    </h1>
                    <p className="text-slate-600">Proyectos Completados</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      1<span className="text-sky-600">+</span>
                    </h1>
                    <p className="text-slate-600">Año de Experiencia</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="420" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.00<span className="text-sky-600">/4.00</span>
                    </h1>
                    <p className="text-slate-600">GPA</p>
                  </div>
                </div>
                <ShinyText
                  text="La mente lo es todo. En lo que piensas, te conviertes"
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-orange-600"
                />
              </div>
            </div>
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl border border-sky-100 bg-slate-50 p-4 shadow-lg shadow-sky-100">
                <img
                  src="./assets/profile-jesus.jpg"
                  alt="Jesus Antonio Ñahuinripa Zamudio"
                  className="h-[420px] w-full rounded-xl object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="learning-journal mt-32" id="notebook">
          <header className="journal-heading">
            <div>
              <p className="section-eyebrow">01 / MI PROCESO</p>
              <h2>Bitácora de aprendizaje</h2>
              <p>De los fundamentos de la web a las interfaces con datos. Mis apuntes de clase y práctica, semana a semana.</p>
            </div>
            <span className="journal-count">06 <small>semanas</small></span>
          </header>
          <div className="journal-entries">
              {learningWeeks.map((item, index) => (
                <details
                  key={item.week}
                  className="journal-entry"
                  open={index === 0}
                >
                  <summary>
                    <span className="entry-number">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <span className="entry-week">{item.week}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <span className="entry-toggle" aria-hidden="true">+</span>
                  </summary>
                  <div className="entry-body">
                    <div>
                      <h4>Conceptos y aprendizaje</h4>
                      <p>{item.learned}</p>
                    </div>
                    <div>
                      <h4>Práctica de laboratorio</h4>
                      <p>{item.practice}</p>
                    </div>
                    <aside className="entry-reflection">
                      <h4>Lo que me llevo</h4>
                      <p>{item.reflection}</p>
                    </aside>
                  </div>
                </details>
              ))}
          </div>
        </section>

        <div className="tools mt-32">
          <p className="section-eyebrow">MI MESA DE TRABAJO</p>
          <h2 className="text-4xl/snug font-bold mb-4 text-slate-950">Con qué construyo.</h2>
          <p className="max-w-2xl text-base/loose text-slate-600">Lenguajes, datos y herramientas que acompañan mi aprendizaje y mis proyectos.</p>
          <div className="tool-inventory">
            {listTools.map((tool, index) => (
              <div
                key={tool.id} 
                className="tool-row"
              >
                <span className="tool-index">{String(index + 1).padStart(2, '0')}</span>
                <img
                  src={tool.gambar}
                  alt=""
                  loading="lazy"
                />
                <div>
                  <h3>{tool.nama}</h3>
                  <p>{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proyek */}
        <div className="proyek mt-32 py-10 relative overflow-hidden" id="project" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <div className="relative z-10">
            <p className="section-eyebrow">02 / TRABAJOS SELECCIONADOS</p>
            <h2 className="text-4xl font-bold mb-4 text-slate-950">Ideas llevadas a la práctica.</h2>
            <p className="max-w-2xl text-base/loose text-slate-600">Desarrollo institucional, gestión escolar y monitoreo ambiental. Explora el detalle de cada trabajo.</p>
            <div className="proyek-box mt-14">
              <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="700" data-aos-delay="280" data-aos-once="true">
                <ChromaGrid
                  items={listProyek}
                  onItemClick={handleProjectClick}
                  radius={500}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>
            </div>
          </div>
        </div>

        <LocalContact />
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
