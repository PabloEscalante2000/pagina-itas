import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GraduationCap, BookOpen, Users, FileText } from "lucide-react";

export const metadata = {
  title: "Formación Profesional | ITAS",
  description: "Formación especializada para psicólogos, psicoterapeutas y profesionales de la salud mental.",
};

const ofertas = [
  {
    icon: GraduationCap,
    title: "Programas formativos y diplomados",
    description: "Formación estructurada y profunda para el desarrollo de competencias clínicas avanzadas.",
  },
  {
    icon: BookOpen,
    title: "Seminarios clínicos especializados",
    description: "Espacios de análisis de casos, supervisión y reflexión sobre la práctica terapéutica.",
  },
  {
    icon: Users,
    title: "Espacios de reflexión teórica y clínica",
    description: "Grupos de estudio y discusión para profundizar en conceptos y su aplicación.",
  },
  {
    icon: FileText,
    title: "Material académico propio",
    description: "Textos, guías y recursos desarrollados desde la TMTD para acompañar tu formación.",
  },
];

export default function Formacion() {
  return (
    <>
      <Nav />
      {/* Hero */}
      <section className="bg-ocean pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-neulis-neue text-4xl md:text-6xl font-bold text-white mb-4">
            Formación Profesional
          </h1>
          <p className="font-neulis-sans text-white/80 text-lg max-w-2xl mx-auto">
            Para terapeutas y profesionales de la salud mental
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-neulis-sans text-ocean/80 text-lg leading-relaxed">
              ITAS ofrece formación especializada para psicólogos, psicoterapeutas, educadores y profesionales afines, interesados en profundizar su práctica clínica y su comprensión de la subjetividad contemporánea.
            </p>
            <p className="font-neulis-sans text-ocean/80 text-lg leading-relaxed mt-4">
              Nuestros programas no están pensados como capacitaciones rápidas ni recetas técnicas. <strong className="text-ocean">Formamos profesionales que piensan, que leen clínicamente, que escuchan más allá del síntoma.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Ofertas */}
      <section className="py-20 bg-ocean/5">
        <div className="container mx-auto px-6">
          <h2 className="font-neulis-neue text-3xl font-bold text-ocean text-center mb-12">
            En ITAS encontrarás
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ofertas.map((oferta, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <oferta.icon className="size-12 text-gold mb-4" />
                <h3 className="font-neulis-neue text-xl font-semibold text-ocean mb-2">
                  {oferta.title}
                </h3>
                <p className="font-neulis-sans text-ocean/70">
                  {oferta.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gold/10 rounded-3xl p-10">
            <h2 className="font-neulis-neue text-2xl font-bold text-ocean mb-4">
              Nuestro enfoque formativo
            </h2>
            <p className="font-neulis-sans text-ocean/80 mb-6">
              Toda nuestra propuesta formativa está atravesada por la <strong>Teoría de la Mente Triádica-Dialéctica (TMTD)</strong>, que nos permite abordar la subjetividad desde una mirada integradora que articula:
            </p>
            <ul className="font-neulis-sans text-ocean/80 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="size-2 bg-gold rounded-full"></span>
                Lo corporal: la memoria y expresión del cuerpo
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 bg-gold rounded-full"></span>
                Lo emocional: el mapa de los afectos y sentimientos
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 bg-gold rounded-full"></span>
                Lo simbólico: el lenguaje, la cultura y el sentido
              </li>
            </ul>
            <Link
              href="/tmtd"
              className="inline-block bg-ocean hover:bg-ocean/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
            >
              Conocer más sobre la TMTD
            </Link>
          </div>
        </div>
      </section>

      {/* Aviso */}
      <section className="py-12 bg-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <span className="text-2xl">📌</span>
            <p className="font-neulis-sans text-ocean">
              <strong>Importante:</strong> ITAS no ofrece terapia ni atención clínica directa al público. Nuestra labor es exclusivamente formativa, académica y editorial.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-neulis-neue text-3xl font-bold text-white mb-4">
            ¿Interesado en nuestros programas?
          </h2>
          <p className="font-neulis-sans text-white/70 max-w-xl mx-auto mb-8">
            Contáctanos para conocer los programas disponibles, fechas y modalidades de inscripción.
          </p>
          <a
            href="https://wa.me/51939491876"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold/90 text-white font-neulis-neue px-8 py-4 rounded-full transition-colors"
          >
            Solicitar información
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
