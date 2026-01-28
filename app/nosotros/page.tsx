import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = {
  title: "Nosotros | ITAS",
  description: "Conoce más sobre ITAS, Instituto Triádico de Análisis del Sujeto.",
};

const somos = [
  "Formación para terapeutas",
  "Espacios de aprendizaje para padres y docentes",
  "Una editorial especializada",
  "Un enfoque propio y coherente",
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
                ITAS es un instituto dedicado a la formación, la reflexión clínica y la producción de contenidos terapéuticos, dirigido tanto a profesionales de la salud mental como a padres, docentes y público en general interesado en comprender con mayor profundidad la experiencia humana.
              </p>
              <p>
                Somos un espacio donde la clínica, la teoría y la divulgación se encuentran, y donde el conocimiento no se transmite de forma superficial ni estandarizada, sino con sentido, profundidad y responsabilidad ética.
              </p>
              <p>
                Nuestro trabajo se articula desde un enfoque propio: la <strong>Teoría de la Mente Triádica-Dialéctica (TMTD)</strong>, que atraviesa toda nuestra propuesta formativa, editorial y de contenidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tres pilares */}
      <section className="py-20 bg-ocean/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-neulis-neue text-3xl font-bold text-ocean mb-8">
              ITAS es tres cosas en una sola marca
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-neulis-neue text-xl font-semibold text-ocean mb-2">
                  1. Un instituto de formación para terapeutas y profesionales
                </h3>
                <p className="font-neulis-sans text-ocean/70">
                  Programas formativos, diplomados, seminarios clínicos y espacios de reflexión teórica para quienes buscan profundizar su práctica.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-neulis-neue text-xl font-semibold text-ocean mb-2">
                  2. Un espacio de seminarios, talleres y cursos abiertos
                </h3>
                <p className="font-neulis-sans text-ocean/70">
                  Contenidos accesibles para padres, docentes y público general sobre infancia, vínculos, emociones y subjetividad contemporánea.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-neulis-neue text-xl font-semibold text-ocean mb-2">
                  3. Una editorial especializada en contenidos terapéuticos
                </h3>
                <p className="font-neulis-sans text-ocean/70">
                  Libros académicos, ensayos clínicos y cuentos infantiles con enfoque terapéutico que respetan la inteligencia emocional del lector.
                </p>
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
                  ITAS reúne y desarrolla la obra de César Andrés Escalante Sifuentes, psicólogo clínico, psicoterapeuta y neuropsicólogo, con más de veinticinco años de experiencia en educación y psicoterapia.
                </p>
                <p>
                  Su trabajo teórico y clínico ha dado origen a la TMTD, y se expresa a través de libros académicos, ensayos, artículos, materiales formativos y contenidos editoriales.
                </p>
                <p className="italic text-ocean/60">
                  ITAS es el espacio donde su producción intelectual se organiza, se publica y se proyecta.
                </p>
              </div>
            </div>
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
