"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-ocean h-20 flex items-center p-2 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={"/assets/itas_logo.png"}
          alt="Insituto Itas"
          width={350}
          height={100}
        />

        {/* Desktop menu */}
        <ul className="text-white font-neulis-neue hidden md:flex gap-8 text-lg cursor-pointer">
          <li>Inicio</li>
          <li>Cursos</li>
          <li>Especialistas</li>
          <li>Contacto</li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-ocean md:hidden shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="text-white font-neulis-neue flex flex-col items-center gap-6 py-8 text-lg cursor-pointer">
          <li className="hover:text-gold transition-colors" onClick={() => setOpen(false)}>Inicio</li>
          <li className="hover:text-gold transition-colors" onClick={() => setOpen(false)}>Cursos</li>
          <li className="hover:text-gold transition-colors" onClick={() => setOpen(false)}>Especialistas</li>
          <li className="hover:text-gold transition-colors" onClick={() => setOpen(false)}>Contacto</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
