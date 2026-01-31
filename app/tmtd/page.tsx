import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, Heart, Sparkles } from "lucide-react";

export const metadata = {
  title: "TMTD - Teoría de la Mente Triádica-Dialéctica | ITAS",
  description: "Conoce la Teoría de la Mente Triádica-Dialéctica, el enfoque que fundamenta toda la propuesta de ITAS.",
};

const dimensiones = [
  {
    icon: Brain,
    title: "Lo corporal",
    description: "La memoria y expresión del cuerpo como territorio primordial de la experiencia. El cuerpo no es solo biología, sino historia inscrita, tensiones acumuladas y posibilidades de movimiento.",
    color: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Lo emocional",
    description: "El mapa de los afectos y sentimientos que configuran nuestra subjetividad. Las emociones no son meros estados pasajeros, sino la trama que organiza nuestra relación con el mundo.",
    color: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: Sparkles,
    title: "Lo simbólico",
    description: "El lenguaje, la cultura y el sentido de la existencia. Lo simbólico es aquello que nos permite nombrar, significar y construir narrativas sobre quiénes somos.",
    color: "bg-gold/20",
    iconColor: "text-gold",
  },
];

export default function TMTD() {
  return (
    <>
      <Nav />
      {/* Hero */}
      <section className="bg-ocean pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <p className="font-neulis-sans text-gold mb-4">Nuestro enfoque</p>
          <h1 className="font-neulis-neue text-3xl md:text-5xl font-bold text-white mb-4">
            Teoría de la Mente Triádica-Dialéctica
          </h1>
          <p className="font-neulis-sans text-white/80 text-xl max-w-2xl mx-auto">
            (TMTD)
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-neulis-sans text-ocean/80 text-lg leading-relaxed mb-6">
              Todo lo que hacemos en ITAS está atravesado por la <strong className="text-ocean">Teoría de la Mente Triádica-Dialéctica (TMTD)</strong>, un enfoque desarrollado por César Escalante que comprende la experiencia humana como una articulación dinámica entre tres dimensiones fundamentales.
            </p>
            <p className="font-neulis-sans text-ocean/80 text-lg leading-relaxed">
              Esta mirada nos permite pensar la subjetividad más allá de diagnósticos rígidos, modas terapéuticas o respuestas simplistas, ofreciendo una comprensión más compleja, humana y contemporánea del malestar psíquico.
            </p>
          </div>
        </div>
      </section>

      {/* Tres dimensiones */}
      <section className="py-20 bg-ocean/5">
        <div className="container mx-auto px-6">
          <h2 className="font-neulis-neue text-3xl font-bold text-ocean text-center mb-12">
            Las tres dimensiones de la experiencia
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {dimensiones.map((dim, index) => (
              <div
                key={index}
                className={`${dim.color} rounded-3xl p-8`}
              >
                <dim.icon className={`size-14 ${dim.iconColor} mb-6`} />
                <h3 className="font-neulis-neue text-2xl font-bold text-ocean mb-4">
                  {dim.title}
                </h3>
                <p className="font-neulis-sans text-ocean/70 leading-relaxed">
                  {dim.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dialéctica */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-neulis-neue text-3xl font-bold text-ocean mb-6">
              ¿Por qué "Triádica-Dialéctica"?
            </h2>
            <div className="font-neulis-sans text-ocean/80 space-y-4 text-lg">
              <p>
                <strong className="text-ocean">Triádica</strong> porque reconoce tres registros irreductibles de la experiencia humana: el cuerpo, las emociones y el simbolismo. Ninguno puede reducirse a los otros, y todos están presentes en cada momento de nuestra vida psíquica.
              </p>
              <p>
                <strong className="text-ocean">Dialéctica</strong> porque estas dimensiones no existen aisladas, sino en constante interacción, tensión y transformación mutua. Lo que sentimos modifica cómo habitamos el cuerpo; lo que nombramos transforma lo que sentimos; lo que vivimos corporalmente condiciona lo que podemos simbolizar.
              </p>
              <p>
                Desde esta perspectiva, la subjetividad no puede reducirse a diagnósticos rígidos, a variables aisladas ni a explicaciones unidimensionales. El sufrimiento psíquico se organiza en la tensión y mediación entre estos registros, en contextos históricos, vinculares y culturales concretos.
              </p>
              <p>
                La TMTD no busca sumar una escuela más al campo de la psicoterapia, sino ofrecer un marco de lectura integrador, capaz de dialogar críticamente con distintos enfoques sin diluir sus diferencias ni absolutizarlas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicación */}
      <section className="py-20 bg-ocean">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-neulis-neue text-3xl font-bold text-white mb-8">
              La TMTD atraviesa todo lo que hacemos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="font-neulis-neue text-lg font-semibold text-gold mb-2">
                  Formación
                </h3>
                <p className="font-neulis-sans text-white/70 text-sm">
                  Nuestros programas formativos integran estas tres dimensiones en la comprensión clínica.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="font-neulis-neue text-lg font-semibold text-gold mb-2">
                  Seminarios
                </h3>
                <p className="font-neulis-sans text-white/70 text-sm">
                  Los talleres abiertos abordan los temas desde esta mirada integradora.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="font-neulis-neue text-lg font-semibold text-gold mb-2">
                  Editorial
                </h3>
                <p className="font-neulis-sans text-white/70 text-sm">
                  Nuestras publicaciones reflejan y desarrollan este enfoque teórico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-neulis-neue text-3xl font-bold text-ocean mb-4">
            Profundiza en la TMTD
          </h2>
          <p className="font-neulis-sans text-ocean/70 max-w-xl mx-auto mb-8">
            Conoce nuestros programas de formación y publicaciones para adentrarte en este enfoque.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/formacion"
              className="bg-ocean hover:bg-ocean/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
            >
              Ver formación
            </Link>
            <Link
              href="/editorial"
              className="bg-gold hover:bg-gold/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
            >
              Ver publicaciones
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
