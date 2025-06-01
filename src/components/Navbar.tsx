// src/components/Navbar.tsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // íconos hamburguesa y close

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#f9f9f9] sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="bg-pink-300 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">
            Mi
          </div>
          <span className="text-pink-400 font-semibold text-xl">caela</span>
        </div>

        {/* Links - desktop */}
        <ul className="hidden md:flex gap-6 font-medium text-sm md:text-base">
          <li><a href="#inicio" className="hover:underline decoration-pink-300 underline-offset-4 transition">INICIO</a></li>
          <li><a href="#sobre-mi" className="hover:underline decoration-pink-300 underline-offset-4 transition">SOBRE MI</a></li>
          <li><a href="#certificaciones" className="hover:underline decoration-pink-300 underline-offset-4 transition">CERTIFICACIONES</a></li>
          <li><a href="#proyectos" className="hover:underline decoration-pink-300 underline-offset-4 transition">PROYECTOS</a></li>
          <li><a href="#contacto" className="hover:underline decoration-pink-300 underline-offset-4 transition">CONTACTO</a></li>
        </ul>

        {/* Botón de descarga - desktop */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-block bg-pink-300 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded hover:bg-pink-400 transition"
        >
          DESCARGAR CVS
        </a>

        {/* Hamburguesa - mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-pink-400 text-2xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden px-8 pb-4 flex flex-col gap-3 font-medium text-sm bg-[#f9f9f9]">
          <a href="#inicio" className="hover:text-pink-400">INICIO</a>
          <a href="#sobre-mi" className="hover:text-pink-400">SOBRE MI</a>
          <a href="#certificaciones" className="hover:text-pink-400">CERTIFICACIONES</a>
          <a href="#proyectos" className="hover:text-pink-400">PROYECTOS</a>
          <a href="#contacto" className="hover:text-pink-400">CONTACTO</a>
          <a
            href="/cv.pdf"
            download
            className="bg-pink-300 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-pink-400 transition text-center"
          >
            DESCARGAR CVS
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
