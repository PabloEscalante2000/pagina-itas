import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = {
  title: "Nosotros | ITAS",
  description: "Conoce más sobre ITAS, Instituto Triádico de Análisis del Sujeto. Un instituto dedicado a la formación, la reflexión clínica y la producción de conocimiento en salud mental.",
};

const somos = [
  "Formación especializada para profesionales de la salud mental",
  "Seminarios, talleres y cursos abiertos al público",
  "Producción editorial de contenidos terapéuticos y clínicos",
  "Un enfoque propio: la TMTD",
];

const noSomos = [
  "Un centro de atención clínica",
  "Una plataforma de autoayuda rápida",
  "Una propuesta superficial",
];

export default function Nosotros() {
  return (
    <>
      <Nav />
      {/* Hero */}
      <section className="bg-ocean pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-neulis-neue text-4xl md:text-6xl font-bold text-white mb-4">
            Sobre ITAS
          </h1>
          <p className="font-neulis-sans text-white/80 text-lg max-w-2xl mx-auto">
            Instituto Triádico de Análisis del Sujeto
          </p>
        </div>
      </section>

      {/* Qué es ITAS */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-neulis-neue text-3xl font-bold text-ocean mb-6">
              ¿Qué es ITAS?
            </h2>
            <div className="font-neulis-sans text-ocean/80 space-y-4 text-lg">
              <p>
                ITAS es un instituto dedicado a la formación, la reflexión clínica y la producción de conocimiento en salud mental, dirigido a profesionales, educadores, padres y personas interesadas en comprender con mayor profundidad la experiencia humana.
              </p>
              <p>
                Somos un espacio donde la clínica, la teoría y la divulgación rigurosa se articulan sin simplificaciones ni recetas, desde una posición ética y académica clara.
              </p>
              <p>
                Todo nuestro trabajo se organiza a partir de un enfoque propio: la <strong>Teoría de la Mente Triádica-Dialéctica (TMTD)</strong>, que atraviesa nuestras propuestas formativas, editoriales y de pensamiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tres pilares */}
      <section className="py-20 bg-ocean/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-neulis-neue text-3xl font-bold text-ocean mb-4">
              Nuestras líneas de trabajo
            </h2>
            <p className="font-neulis-sans text-ocean/70 mb-8">
              ITAS desarrolla su labor en tres líneas complementarias y articuladas. Estas líneas no funcionan de manera aislada: comparten una misma concepción de la subjetividad y un mismo compromiso con el rigor conceptual, la ética clínica y la responsabilidad en la transmisión del conocimiento.
            </p>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-neulis-neue text-xl font-semibold text-ocean mb-2">
                  1. Formación profesional
                </h3>
                <p className="font-neulis-sans text-ocean/70 mb-4">
                  ITAS ofrece formación especializada para psicólogos, psicoterapeutas, educadores y profesionales afines que buscan profundizar su práctica clínica y su comprensión de la subjetividad contemporánea.
                </p>
                <p className="font-neulis-sans text-ocean/70 mb-4">
                  Nuestros programas no están pensados como capacitaciones rápidas ni como entrenamientos técnicos descontextualizados. Formamos profesionales que piensan clínicamente, que leen los fenómenos humanos en su complejidad y que sostienen una posición ética frente al sufrimiento psíquico.
                </p>
                <ul className="font-neulis-sans text-ocean/60 text-sm space-y-1 list-disc list-inside">
                  <li>Programas formativos y diplomados</li>
                  <li>Seminarios clínicos especializados</li>
                  <li>Espacios de reflexión teórica y epistemológica</li>
                  <li>Material académico y bibliografía propia</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-neulis-neue text-xl font-semibold text-ocean mb-2">
                  2. Seminarios, talleres y cursos abiertos
                </h3>
                <p className="font-neulis-sans text-ocean/70 mb-4">
                  Además de la formación profesional, ITAS desarrolla espacios de aprendizaje dirigidos a padres, docentes y público general, interesados en comprender mejor temas vinculados a:
                </p>
                <ul className="font-neulis-sans text-ocean/60 text-sm space-y-1 list-disc list-inside mb-4">
                  <li>Infancia y adolescencia</li>
                  <li>Vínculos familiares y educativos</li>
                  <li>Emociones, conducta y desarrollo</li>
                  <li>Subjetividad en el mundo contemporáneo</li>
                </ul>
                <p className="font-neulis-sans text-ocean/70">
                  Estos espacios están diseñados con un lenguaje claro y accesible, sin perder profundidad conceptual ni rigor teórico. No se trata de charlas motivacionales ni de recetas rápidas, sino de espacios para pensar, comprender y acompañar mejor la experiencia humana.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-neulis-neue text-xl font-semibold text-ocean mb-2">
                  3. ITAS Editorial
                </h3>
                <p className="font-neulis-sans text-gold text-sm font-medium mb-3">
                  Conocimiento que se lee, se piensa y se elabora
                </p>
                <p className="font-neulis-sans text-ocean/70 mb-4">
                  ITAS es también una editorial especializada en contenidos terapéuticos, clínicos y psicoeducativos, orientada a la producción de materiales con profundidad conceptual y cuidado ético.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-neulis-sans text-ocean font-medium text-sm">Libros académicos y clínicos</p>
                    <p className="font-neulis-sans text-ocean/60 text-sm">
                      Publicaciones dirigidas a estudiantes, profesionales y lectores interesados en una comprensión rigurosa de la psicoterapia, la psicología y la subjetividad contemporánea.
                    </p>
                  </div>
                  <div>
                    <p className="font-neulis-sans text-ocean font-medium text-sm">Cuentos infantiles con enfoque terapéutico</p>
                    <p className="font-neulis-sans text-ocean/60 text-sm">
                      Relatos pensados para niños, que funcionan como recursos simbólicos y emocionales. No son cuentos moralizantes ni didácticos en exceso, sino historias que respetan la inteligencia emocional del niño y abren espacios de elaboración subjetiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* César Escalante */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            <Image
              src="/assets/cesar.jpg"
              alt="César Escalante"
              width={300}
              height={300}
              className="rounded-2xl object-cover object-top w-64 h-72 shrink-0"
            />
            <div>
              <h2 className="font-neulis-neue text-3xl font-bold text-ocean mb-2">
                César Escalante
              </h2>
              <p className="font-neulis-sans text-gold font-medium mb-4">
                Autor y referente académico
              </p>
              <div className="font-neulis-sans text-ocean/80 space-y-3">
                <p>
                  ITAS reúne, desarrolla y proyecta la obra de César Andrés Escalante Sifuentes, psicólogo clínico, psicoterapeuta y neuropsicólogo, con más de veinticinco años de experiencia en educación y psicoterapia.
                </p>
                <p>
                  Su trabajo teórico y clínico ha dado origen a la Teoría de la Mente Triádica-Dialéctica, y se expresa a través de:
                </p>
                <ul className="list-disc list-inside text-ocean/70 text-sm space-y-1">
                  <li>Libros académicos</li>
                  <li>Ensayos y artículos</li>
                  <li>Materiales formativos</li>
                  <li>Contenidos editoriales</li>
                </ul>
                <p className="italic text-ocean/60">
                  ITAS es el espacio donde esta producción intelectual se organiza, se publica y se proyecta como propuesta formativa y teórica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos y contenidos */}
      <section className="py-20 bg-gold/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-neulis-neue text-3xl font-bold text-ocean mb-6">
              Artículos y contenidos
            </h2>
            <p className="font-neulis-sans text-ocean/80 text-lg mb-6">
              ITAS cuenta con un espacio editorial de artículos, ensayos y textos de reflexión, dirigidos tanto a profesionales como a lectores interesados en temas de salud mental, subjetividad, vínculos y cultura contemporánea.
            </p>
            <p className="font-neulis-sans text-ocean/70 mb-4">
              Estos contenidos buscan:
            </p>
            <ul className="font-neulis-sans text-ocean/70 space-y-2">
              <li className="flex items-center gap-3">
                <span className="size-2 bg-gold rounded-full shrink-0"></span>
                Generar pensamiento crítico
              </li>
              <li className="flex items-center gap-3">
                <span className="size-2 bg-gold rounded-full shrink-0"></span>
                Abrir preguntas, no clausurar respuestas
              </li>
              <li className="flex items-center gap-3">
                <span className="size-2 bg-gold rounded-full shrink-0"></span>
                Vincular teoría clínica y experiencia cotidiana
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ITAS es / no es */}
      <section className="py-20 bg-ocean">
        <div className="container mx-auto px-6">
          <h2 className="font-neulis-neue text-3xl font-bold text-white text-center mb-12">
            En síntesis
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="font-neulis-neue text-xl font-semibold text-gold mb-6">
                ITAS es:
              </h3>
              <ul className="space-y-3">
                {somos.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white font-neulis-sans">
                    <Check className="size-5 text-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="font-neulis-neue text-xl font-semibold text-white/60 mb-6">
                ITAS no es:
              </h3>
              <ul className="space-y-3">
                {noSomos.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/70 font-neulis-sans">
                    <X className="size-5 text-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="font-neulis-neue text-xl text-white text-center mt-12 max-w-2xl mx-auto">
            ITAS es un lugar para quienes quieren pensar en serio la experiencia humana.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-neulis-neue text-2xl font-bold text-ocean mb-6">
            Conoce nuestras líneas de trabajo
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/formacion"
              className="bg-ocean hover:bg-ocean/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
            >
              Formación profesional
            </Link>
            <Link
              href="/seminarios"
              className="bg-ocean hover:bg-ocean/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
            >
              Seminarios y talleres
            </Link>
            <Link
              href="/editorial"
              className="bg-ocean hover:bg-ocean/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
            >
              Editorial
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
