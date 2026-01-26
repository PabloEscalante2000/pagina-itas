import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-ocean text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/assets/itas_logo.png"
              alt="ITAS Logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Contacto */}
          <div className="font-neulis-sans">
            <h4 className="font-neulis-neue text-lg font-semibold mb-4 text-gold">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-gold" />
                <span className="text-sm">El Pacayar 149, Miraflores 15048</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-gold" />
                <a href="tel:+51939491876" className="text-sm hover:text-gold transition-colors">
                  +51 939 491 876
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-gold" />
                <a href="mailto:contacto@institutoitas.com" className="text-sm hover:text-gold transition-colors">
                  contacto@institutoitas.com
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="font-neulis-sans">
            <h4 className="font-neulis-neue text-lg font-semibold mb-4 text-gold">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#seminarios" className="text-sm hover:text-gold transition-colors">Seminarios</a>
              </li>
              <li>
                <a href="#talleres" className="text-sm hover:text-gold transition-colors">Talleres</a>
              </li>
              <li>
                <a href="#libros" className="text-sm hover:text-gold transition-colors">Libros</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center space-y-2">
          <p className="text-sm font-neulis-sans text-white/70">
            © {new Date().getFullYear()} Instituto Triádico de Análisis del Sujeto. Todos los derechos reservados.
          </p>
          <Link
            href="/politica-privacidad"
            className="text-sm font-neulis-sans text-white/50 hover:text-gold transition-colors"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
