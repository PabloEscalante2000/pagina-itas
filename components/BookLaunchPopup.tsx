"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";

export default function BookLaunchPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("bookPopupDismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("bookPopupDismissed", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 transition-colors shadow"
          aria-label="Cerrar"
        >
          <X className="size-5 text-ocean" />
        </button>

        {/* Banner superior */}
        <div className="bg-ocean px-6 py-3 text-center">
          <span className="text-gold font-neulis-neue font-bold text-sm uppercase tracking-widest">
            ✦ Nuevo lanzamiento — 27 de marzo ✦
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-0">
          {/* Imagen del libro */}
          <div className="sm:w-48 bg-ocean/5 flex items-center justify-center p-6 shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 bg-gold/20 rounded-2xl blur-xl"></div>
              <Image
                src="/assets/el_amor_es_un_delirio_portada.jpeg"
                alt="El amor es un delirio - César Escalante"
                width={160}
                height={240}
                className="relative rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <span className="text-xs font-neulis-sans text-gold font-semibold uppercase tracking-wider mb-2">
              Ensayo clínico y reflexivo
            </span>
            <h2 className="font-neulis-neue text-2xl font-bold text-ocean leading-tight mb-1">
              El amor es un delirio
            </h2>
            <p className="font-neulis-sans text-sm text-ocean/60 mb-3">
              Por <strong className="text-ocean">César Escalante</strong>
            </p>

            <blockquote className="border-l-3 border-gold pl-3 mb-4">
              <p className="font-neulis-sans text-ocean/80 italic text-sm leading-relaxed">
                &quot;No siempre sufrimos por lo que pasó, sino por lo que nuestra mente concluyó con muy pocas pruebas.&quot;
              </p>
            </blockquote>

            <p className="font-neulis-sans text-ocean/70 text-sm mb-5 leading-relaxed">
              Un ensayo sobre cómo la mente, en nombre del amor, fabrica certezas para no tolerar la duda.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="https://elamoresundelirio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white font-neulis-neue text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                Conocer más
                <ExternalLink className="size-3.5" />
              </a>
              <Link
                href="/editorial"
                onClick={handleClose}
                className="inline-flex items-center justify-center text-center text-ocean/70 hover:text-ocean font-neulis-sans text-xs underline underline-offset-2 transition-colors"
              >
                Ver en ITAS Editorial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
