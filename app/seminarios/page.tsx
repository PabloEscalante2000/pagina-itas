import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Baby, Heart, Brain, Globe, ExternalLink, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Seminarios y Talleres | ITAS",
  description: "Espacios de aprendizaje para padres, docentes y público general.",
};

const temas = [
  {
    icon: Baby,
    title: "Infancia y adolescencia",
    description: "Comprensión profunda de las etapas del desarrollo y sus desafíos contemporáneos.",
  },
  {
    icon: Heart,
    title: "Vínculos familiares y educativos",
    description: "Herramientas para fortalecer las relaciones y acompañar procesos de crecimiento.",
  },
  {
    icon: Brain,
    title: "Emociones, conducta y desarrollo",
    description: "Entendimiento de los procesos emocionales y su impacto en el comportamiento.",
  },
  {
    icon: Globe,
    title: "Subjetividad contemporánea",
    description: "Reflexión sobre los modos actuales de vincularse, sufrir y construir sentido.",
  },
];

export default function Seminarios() {
  return (
    <>
      <Nav />

      {/* Hero del seminario destacado */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/itas_libro_fondo.png')" }}
      >
        <div className="absolute inset-0 bg-ocean/85"></div>
        <div className="relative z-10 container mx-auto px-6 py-32 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido */}
            <div className="text-white order-2 md:order-1">
              <span className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-neulis-sans mb-6">
                Seminario-Taller
              </span>
              <h1 className="font-neulis-neue text-4xl md:text-6xl font-bold mb-4">
                El amor es un delirio
              </h1>
              <p className="font-neulis-sans text-xl md:text-2xl text-gold mb-6">
                Cuando amar ya no se trata de lo que se siente, sino de lo que interpretamos.
              </p>
              <p className="font-neulis-sans text-white/80 text-lg mb-6 leading-relaxed">
                Un espacio de reflexión sobre cómo la mente, en nombre del amor, fabrica certezas para no tolerar la duda. Exploraremos juntos el momento en que la experiencia amorosa se convierte en operación mental.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <User className="size-4 text-gold" />
                  <span className="text-sm font-neulis-sans">Con César Escalante</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Calendar className="size-4 text-gold" />
                  <span className="text-sm font-neulis-sans">21, 28 de marzo y 4 de abril</span>
                </div>
              </div>

              <blockquote className="border-l-4 border-gold pl-4 my-8">
                <p className="font-neulis-sans text-white/90 italic text-lg">
                  "No siempre sufrimos por lo que pasó, sino por lo que nuestra mente concluyó con muy pocas pruebas."
                </p>
              </blockquote>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://seminario-el-amor-es-un-delirio.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
                >
                  Ver más información
                  <ExternalLink className="size-4" />
                </a>
                <a
                  href="https://wa.me/51939491876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors border border-white/30"
                >
                  Inscribirme
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/20 rounded-3xl blur-2xl"></div>
                <Image
                  src="/assets/itas_libro.png"
                  alt="Seminario El amor es un delirio - César Escalante"
                  width={400}
                  height={600}
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-neulis-neue text-4xl font-bold text-ocean mb-6">
              Seminarios y Talleres
            </h2>
            <p className="font-neulis-sans text-gold text-xl mb-4">
              Espacios de aprendizaje para padres, docentes y público general
            </p>
            <p className="font-neulis-sans text-ocean/80 text-lg leading-relaxed">
              Además de la formación profesional, ITAS desarrolla espacios de aprendizaje dirigidos a padres, docentes y público en general, que buscan comprender mejor temas relacionados con la experiencia humana, los vínculos y el desarrollo.
            </p>
            <p className="font-neulis-sans text-ocean/80 text-lg leading-relaxed mt-4">
              Estos espacios están diseñados con un <strong className="text-ocean">lenguaje claro, accesible y profundo</strong>, sin perder el rigor conceptual, pero evitando el tecnicismo innecesario.
            </p>
          </div>
        </div>
      </section>

      {/* Temas */}
      <section className="py-20 bg-ocean/5">
        <div className="container mx-auto px-6">
          <h2 className="font-neulis-neue text-3xl font-bold text-ocean text-center mb-12">
            Temas que abordamos
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {temas.map((tema, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <tema.icon className="size-12 text-gold mb-4" />
                <h3 className="font-neulis-neue text-xl font-semibold text-ocean mb-2">
                  {tema.title}
                </h3>
                <p className="font-neulis-sans text-ocean/70">
                  {tema.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gold/10 rounded-3xl p-10">
              <h2 className="font-neulis-neue text-2xl font-bold text-ocean mb-6">
                No son charlas motivacionales ni recetas rápidas
              </h2>
              <p className="font-neulis-sans text-ocean/80 text-lg mb-4">
                Son espacios para <strong>pensar, comprender y acompañar mejor</strong>. Creemos que el conocimiento que transforma no viene de fórmulas simplistas, sino de la reflexión honesta sobre la experiencia humana.
              </p>
              <p className="font-neulis-sans text-ocean/70">
                Nuestros talleres y seminarios abiertos buscan generar pensamiento crítico, abrir preguntas —no cerrar respuestas— y vincular teoría con experiencia cotidiana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Público */}
      <section className="py-20 bg-ocean">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-neulis-neue text-3xl font-bold text-white mb-8">
            ¿Para quién son estos espacios?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <span className="bg-white/10 text-white px-6 py-3 rounded-full font-neulis-sans">
              Padres y madres
            </span>
            <span className="bg-white/10 text-white px-6 py-3 rounded-full font-neulis-sans">
              Docentes y educadores
            </span>
            <span className="bg-white/10 text-white px-6 py-3 rounded-full font-neulis-sans">
              Cuidadores
            </span>
            <span className="bg-white/10 text-white px-6 py-3 rounded-full font-neulis-sans">
              Público interesado
            </span>
            <span className="bg-white/10 text-white px-6 py-3 rounded-full font-neulis-sans">
              Estudiantes
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-neulis-neue text-3xl font-bold text-ocean mb-4">
            ¿Quieres participar en nuestros próximos eventos?
          </h2>
          <p className="font-neulis-sans text-ocean/70 max-w-xl mx-auto mb-8">
            Contáctanos para conocer los seminarios y talleres disponibles, fechas y modalidades.
          </p>
          <a
            href="https://wa.me/51939491876"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold/90 text-white font-neulis-neue px-8 py-4 rounded-full transition-colors"
          >
            Consultar próximos eventos
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
