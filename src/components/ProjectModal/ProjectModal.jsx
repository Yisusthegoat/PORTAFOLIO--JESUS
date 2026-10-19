import React, { useState, useEffect } from 'react';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ isOpen, onClose, project }) => {
  // State untuk mengontrol animasi penutupan
  const [isClosing, setIsClosing] = useState(false);

  // Fungsi untuk menangani penutupan dengan animasi
  const handleClose = () => {
    setIsClosing(true);
    // Tunggu animasi selesai (300ms) sebelum memanggil onClose dari props
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset state untuk pembukaan berikutnya
    }, 300);
  };

  // Mencegah scroll di background saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    // Overlay
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-slate-950/45 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat diklik di dalam
        className={`bg-white border border-sky-100 rounded-2xl shadow-2xl shadow-sky-200/60 w-full max-w-lg transform transition-transform duration-300 ${isClosing ? 'animate-out' : 'animate-in'}`}
      >
        {/* --- GAMBAR PROYEK --- */}
        {project.gambar ? <img
          src={project.gambar} 
          alt={project.title} 
          className="w-full h-56 object-cover rounded-t-2xl"
        /> : (
          <div className="flex h-48 flex-col items-center justify-center gap-4 rounded-t-2xl bg-gradient-to-br from-sky-100 to-orange-50 p-6 text-center text-sky-900">
            <i className={`${project.icon || 'ri-calendar-check-line'} text-5xl`} aria-hidden="true" />
            <span className="text-lg font-semibold">{project.category || project.title}</span>
          </div>
        )}

        <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-slate-950">{project.title}</h2>
                <button
                    onClick={handleClose}
                    aria-label="Cerrar proyecto"
                    className="text-slate-400 hover:text-slate-950 transition-colors p-2 rounded-full hover:bg-slate-100 -mt-2 -mr-2"
                >
                    <FiX size={24} />
                </button>
            </div>

            {/* --- DESKRIPSI LENGKAP --- */}
            {project.status && (
              <span className="w-fit rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-800">{project.status}</span>
            )}
            <p className="text-slate-600 text-base leading-relaxed">
                {project.fullDescription || project.subtitle}
            </p>

            {project.tech?.length > 0 && (
              <ul className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
                {project.tech.map((technology) => (
                  <li key={technology} className="rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-700">
                    {technology}
                  </li>
                ))}
              </ul>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold bg-sky-600 text-white p-3 px-5 rounded-full w-full hover:bg-sky-700 transition-colors"
              >
                <FiExternalLink />
                <span>Visitar proyecto</span>
              </a>
            )}

            {(project.github || project.url) && (
              <a
                href={project.github || project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 font-semibold bg-sky-600 text-white p-3 px-5 rounded-full w-full cursor-pointer border border-transparent hover:bg-sky-700 transition-colors"
            >
                <FiGithub />
                <span>Ver código fuente</span>
              </a>
            )}
        </div>
      </div>
       {/* CSS untuk animasi */}
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.95); opacity: 0; }
        }
        .animate-out {
          animation: scaleOut 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
