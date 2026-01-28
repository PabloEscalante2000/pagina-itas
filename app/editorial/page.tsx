import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, BookHeart, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Editorial | ITAS",
  description: "Libros académicos, ensayos clínicos y cuentos infantiles con enfoque terapéutico.",
};

export default function Editorial() {
  return (
    <>
      <Nav />

      {/* Hero del libro destacado */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/itas_libro_fondo.png')" }}
      >
        <div className="absolute inset-0 bg-ocean/80"></div>
        <div className="relative z-10 container mx-auto px-6 py-32 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido */}
            <div className="text-white order-2 md:order-1">
              <span className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-neulis-sans mb-6">
                Nuevo lanzamiento
              </span>
              <h1 className="font-neulis-neue text-4xl md:text-6xl font-bold mb-4">
                El amor es un delirio
              </h1>
              <p className="font-neulis-sans text-xl md:text-2xl text-gold mb-6">
                Un ensayo sobre cómo la mente, en nombre del amor, fabrica certezas para no tolerar la duda.
              </p>
              <p className="font-neulis-sans text-white/80 text-lg mb-6 leading-relaxed">
                ¿Cuándo la experiencia amorosa se convierte en operación mental? ¿En qué momento comenzamos a buscar certezas absolutas, transformando gestos en pruebas y pensamientos en verdades incuestionables?
              </p>
              <blockquote className="border-l-4 border-gold pl-4 my-8">
                <p className="font-neulis-sans text-white/90 italic text-lg">
                  "No siempre sufrimos por lo que pasó, sino por lo que nuestra mente concluyó con muy pocas pruebas."
                </p>
              </blockquote>
              <p className="font-neulis-sans text-white/70 mb-8">
                Por <strong className="text-white">César Escalante</strong> — Ensayo clínico y reflexivo basado en investigación epistemológica.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://elamoresundelirio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
                >
                  Conocer más
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>

            {/* Imagen del libro */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/20 rounded-3xl blur-2xl"></div>
                <Image
                  src="/assets/itas_libro.png"
                  alt="El amor es un delirio - César Escalante"
                  width={400}
                  height={600}
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Editorial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-neulis-neue text-4xl font-bold text-ocean mb-6">
              ITAS Editorial
            </h2>
            <p className="font-neulis-sans text-gold text-xl mb-4">
              Conocimiento que se lee, se piensa y se siente
            </p>
            <p className="font-neulis-sans text-ocean/80 text-lg leading-relaxed">
              ITAS es también una editorial especializada en contenidos terapéuticos, con dos grandes líneas de publicación que buscan ofrecer conocimiento profundo, accesible y con sentido.
            </p>
          </div>
        </div>
      </section>

      {/* Líneas editoriales */}
      <section className="py-20 bg-ocean/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Libros académicos */}
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-ocean/10 p-4 rounded-2xl">
                  <BookOpen className="size-10 text-ocean" />
                </div>
                <h2 className="font-neulis-neue text-2xl font-bold text-ocean">
                  Libros académicos y clínicos
                </h2>
              </div>
              <p className="font-neulis-sans text-ocean/70 mb-6">
                Dirigidos a estudiantes, profesionales y lectores interesados en una comprensión profunda del psiquismo.
              </p>
              <ul className="space-y-3 font-neulis-sans text-ocean/80">
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-gold rounded-full"></span>
                  Psicoterapia
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-gold rounded-full"></span>
                  Psicología
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-gold rounded-full"></span>
                  Subjetividad contemporánea
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-gold rounded-full"></span>
                  Teoría y análisis clínico
                </li>
              </ul>
            </div>

            {/* Cuentos infantiles */}
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gold/10 p-4 rounded-2xl">
                  <BookHeart className="size-10 text-gold" />
                </div>
                <h2 className="font-neulis-neue text-2xl font-bold text-ocean">
                  Cuentos infantiles terapéuticos
                </h2>
              </div>
              <p className="font-neulis-sans text-ocean/70 mb-6">
                Historias que respetan la inteligencia emocional del niño y abren espacios de elaboración.
              </p>
              <ul className="space-y-3 font-neulis-sans text-ocean/80">
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-gold rounded-full"></span>
                  Historias pensadas para niños
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-gold rounded-full"></span>
                  Recursos simbólicos y emocionales
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-gold rounded-full"></span>
                  Cuentos que acompañan procesos internos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial cuentos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gold/10 rounded-3xl p-10">
            <h2 className="font-neulis-neue text-2xl font-bold text-ocean mb-4">
              Sobre nuestros cuentos infantiles
            </h2>
            <p className="font-neulis-sans text-ocean/80 text-lg">
              Nuestros cuentos <strong>no son moralizantes ni didácticos en exceso</strong>. Son relatos que respetan la inteligencia emocional del niño y abren espacios de elaboración interna, permitiendo que cada lector encuentre su propio sentido en la historia.
            </p>
          </div>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-20 bg-ocean">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-neulis-neue text-3xl font-bold text-white mb-6">
              Artículos y contenidos
            </h2>
            <p className="font-neulis-sans text-white/80 text-lg mb-8">
              ITAS cuenta con un espacio editorial de artículos, ensayos y textos de reflexión, dirigidos tanto a profesionales como a lectores interesados en temas de salud mental, subjetividad, vínculos y cultura contemporánea.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 text-white px-5 py-2 rounded-full font-neulis-sans text-sm">
                Generar pensamiento crítico
              </span>
              <span className="bg-white/10 text-white px-5 py-2 rounded-full font-neulis-sans text-sm">
                Abrir preguntas, no cerrar respuestas
              </span>
              <span className="bg-white/10 text-white px-5 py-2 rounded-full font-neulis-sans text-sm">
                Vincular teoría y experiencia cotidiana
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-neulis-neue text-3xl font-bold text-ocean mb-4">
            ¿Interesado en nuestras publicaciones?
          </h2>
          <p className="font-neulis-sans text-ocean/70 max-w-xl mx-auto mb-8">
            Contáctanos para conocer el catálogo disponible y próximos lanzamientos.
          </p>
          <a
            href="https://wa.me/51939491876"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold/90 text-white font-neulis-neue px-8 py-4 rounded-full transition-colors"
          >
            Consultar catálogo
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
