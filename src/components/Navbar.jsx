import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12 text-slate-950">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold text-slate-950 p-1 md:bg-transparent">
          JA<span className="text-teal-700"> / </span>DEV
        </h1>
      </div>

      {/* Menu */}
      <ul
        className={`flex items-center sm:gap-10 gap-4 
          md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
          md:opacity-100 bg-white/80 text-slate-800 backdrop-blur-md border border-slate-200 shadow-sm
          md:bg-transparent md:backdrop-blur-none
          md:border-0 md:shadow-none
          p-4 rounded-br-2xl rounded-bl-2xl 
          transition-all md:transition-none
          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li><a href="#home" className="sm:text-lg text-base font-medium">Inicio</a></li>
        <li><a href="#about" className="sm:text-lg text-base font-medium">Sobre mí</a></li>
        <li><a href="#notebook" className="sm:text-lg text-base font-medium">Cuaderno</a></li>
        <li><a href="#project" className="sm:text-lg text-base font-medium">Proyectos</a></li>
        <li><a href="#contact" className="sm:text-lg text-base font-medium">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
