import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-ocean text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/assets/itas_logo.png"
                alt="ITAS Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-white/60 mt-3 font-neulis-sans">
              Instituto Triádico de Análisis del Sujeto
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61587337855194" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="https://pe.linkedin.com/in/instituto-tri%C3%A1dico-de-an%C3%A1lisis-del-sujeto-itas-5434243a6" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors">
                <Linkedin className="size-5" />
              </a>
              <a href="https://www.instagram.com/itas.instituto/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors">
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="font-neulis-sans">
            <h4 className="font-neulis-neue text-lg font-semibold mb-4 text-gold">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-sm hover:text-gold transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link href="/formacion" className="text-sm hover:text-gold transition-colors">Formación</Link>
              </li>
              <li>
                <Link href="/seminarios" className="text-sm hover:text-gold transition-colors">Seminarios</Link>
              </li>
              <li>
                <Link href="/editorial" className="text-sm hover:text-gold transition-colors">Editorial</Link>
              </li>
              <li>
                <Link href="/tmtd" className="text-sm hover:text-gold transition-colors">TMTD</Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="font-neulis-sans">
            <h4 className="font-neulis-neue text-lg font-semibold mb-4 text-gold">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/formacion" className="text-sm hover:text-gold transition-colors">Programas formativos</Link>
              </li>
              <li>
                <Link href="/seminarios" className="text-sm hover:text-gold transition-colors">Nuestros talleres</Link>
              </li>
              <li>
                <a href="https://elamoresundelirio.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gold transition-colors">Libros y publicaciones</a>
              </li>
            </ul>
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
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center space-y-2">
          <p className="text-sm font-neulis-sans text-white/70">
            © {new Date().getFullYear()} ITAS - Instituto Triádico de Análisis del Sujeto. Todos los derechos reservados.
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
