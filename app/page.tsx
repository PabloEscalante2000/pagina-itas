import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Users, BookOpen, Brain, Heart, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";

const pilares = [
  {
    icon: GraduationCap,
    title: "Formación profesional",
    description: "Formación especializada para psicólogos, psicoterapeutas y educadores que buscan profundizar su práctica clínica. Programas formativos, diplomados, seminarios clínicos y espacios de reflexión teórica.",
    href: "/formacion",
  },
  {
    icon: Users,
    title: "Seminarios y talleres abiertos",
    description: "Espacios de aprendizaje para padres, docentes y público general sobre infancia, adolescencia, vínculos familiares, emociones y subjetividad en el mundo contemporáneo.",
    href: "/seminarios",
  },
  {
    icon: BookOpen,
    title: "ITAS Editorial",
    description: "Editorial especializada en contenidos terapéuticos, clínicos y psicoeducativos. Libros académicos y cuentos infantiles que respetan la inteligencia emocional del lector.",
    href: "/editorial",
  },
];

const enfoques = [
  {
    icon: Brain,
    title: "Lo corporal",
    description: "La memoria y expresión del cuerpo como territorio de la experiencia.",
  },
  {
    icon: Heart,
    title: "Lo emocional",
    description: "El mapa de los afectos y sentimientos que configuran nuestra subjetividad.",
  },
  {
    icon: Sparkles,
    title: "Lo simbólico",
    description: "El lenguaje, la cultura y el sentido de la existencia.",
  },
];

const especialistas = [
  {
    name: "César Escalante",
    code: 29611,
    description: "Psicólogo clínico, psicoterapeuta y neuropsicólogo. Creador de la TMTD con más de 25 años de experiencia.",
    img: "/assets/cesar.jpg",
  },
  {
    name: "Melissa Huaman",
    code: null,
    description: "Facilitadora psicoterapéutica. Psicoanalítica.",
    img: "/assets/melissa.jpg",
  },
  {
    name: "Catherine Cermeño",
    code: 35863,
    description: "Psicóloga Clínica y psicoterapeuta psicoanalítica.",
    img: "/assets/catherine.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      {/* Hero */}
      <main
        id="banner"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/itas_banner.png')" }}
      >
        <div className="absolute inset-0 bg-ocean/60"></div>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="font-neulis-neue text-5xl font-bold md:text-7xl">
            Bienvenidos a ITAS
          </h1>
          <h3 className="font-neulis-neue font-semibold text-2xl md:text-4xl text-gold mt-4">
            Instituto Triádico de Análisis del Sujeto
          </h3>
          <p className="mt-6 max-w-3xl font-neulis-sans text-center text-lg md:text-xl">
            Un instituto dedicado a la formación, la reflexión clínica y la producción de conocimiento en salud mental. Un espacio donde la clínica, la teoría y la divulgación rigurosa se articulan desde una posición ética y académica clara.
          </p>
          <Link
            href="/nosotros"
            className="mt-8 bg-gold hover:bg-gold/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
          >
            Conoce más sobre nosotros
          </Link>
        </div>
      </main>

      {/* Qué es ITAS */}
      <section id="que-es-itas" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-neulis-neue text-4xl font-bold text-ocean mb-6">
              ¿Qué es ITAS?
            </h2>
            <p className="font-neulis-sans text-ocean/80 text-lg">
              ITAS desarrolla su labor en tres líneas complementarias y articuladas, que comparten una misma concepción de la subjetividad y un mismo compromiso con el rigor conceptual, la ética clínica y la responsabilidad en la transmisión del conocimiento.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pilares.map((pilar, index) => (
              <Link
                key={index}
                href={pilar.href}
                className="group bg-ocean/5 hover:bg-ocean rounded-2xl p-8 transition-all duration-300"
              >
                <pilar.icon className="size-14 text-gold mb-4" />
                <h3 className="font-neulis-neue text-xl font-semibold text-ocean group-hover:text-white mb-3 transition-colors">
                  {pilar.title}
                </h3>
                <p className="font-neulis-sans text-ocean/70 group-hover:text-white/80 transition-colors">
                  {pilar.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Aviso importante */}
      <section className="bg-gold/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <span className="text-gold text-2xl">📌</span>
            <p className="font-neulis-sans text-ocean">
              <strong>Importante:</strong> ITAS no ofrece terapia ni atención clínica directa al público. Nuestra labor es formativa, académica y editorial.
            </p>
          </div>
        </div>
      </section>

      {/* TMTD */}
      <section
        id="tmtd"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/itas_teoria.png')" }}
      >
        <div className="absolute inset-0 bg-ocean/70"></div>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white py-20">
          <h2 className="font-neulis-neue text-3xl md:text-5xl font-semibold mb-4">
            Nuestro enfoque
          </h2>
          <h3 className="font-neulis-neue font-medium text-2xl md:text-4xl text-gold mb-8">
            Teoría de la Mente Triádica-Dialéctica (TMTD)
          </h3>
          <p className="max-w-3xl font-neulis-sans text-lg md:text-xl mb-12">
            Un marco teórico y epistemológico que propone comprender la experiencia humana como una articulación dinámica entre tres registros irreductibles: el cuerpo, las emociones y el simbolismo. Un enfoque que no busca sumar una escuela más, sino ofrecer un marco de lectura integrador.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {enfoques.map((enfoque, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors"
              >
                <enfoque.icon className="size-12 text-gold mx-auto mb-4" />
                <h4 className="font-neulis-neue text-xl font-semibold mb-2">
                  {enfoque.title}
                </h4>
                <p className="font-neulis-sans text-white/80 text-sm">
                  {enfoque.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/tmtd"
            className="mt-12 bg-gold hover:bg-gold/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
          >
            Conoce más sobre la TMTD
          </Link>
        </div>
      </section>

      {/* Filosofía */}
      <section id="filosofia" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-12 md:flex-row flex-col">
            <Image
              src={"/assets/itas_filosofia.png"}
              alt="Filosofía ITAS"
              width={400}
              height={400}
              className="rounded-2xl object-cover md:w-96 w-full"
            />
            <div className="font-neulis-neue text-ocean space-y-6 max-w-xl">
              <h2 className="text-4xl font-bold">Nuestro propósito</h2>
              <p className="font-neulis-sans text-lg text-ocean/80">
                El propósito de ITAS es <strong>formar, pensar y producir conocimiento con sentido</strong>.
              </p>
              <p className="font-neulis-sans text-ocean/70">
                No buscamos simplificar lo complejo, ni vender soluciones mágicas, ni reducir la experiencia humana a fórmulas rápidas.
              </p>
              <p className="font-neulis-sans text-ocean/70">
                Buscamos acompañar procesos de comprensión, formar profesionales con criterio y ofrecer contenidos que dejen huella.
              </p>
              <p className="font-neulis-sans text-ocean/70 italic">
                "No creemos en recetas. Creemos en la formación que transforma, en la reflexión que incomoda para sanar y en la palabra que da sentido al sufrimiento contemporáneo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Especialistas */}
      <section id="especialistas" className="py-20 bg-ocean/5">
        <div className="container mx-auto px-6">
          <h2 className="font-neulis-neue text-4xl font-bold text-ocean text-center mb-4">
            Nuestro equipo
          </h2>
          <p className="font-neulis-sans text-ocean/70 text-center max-w-2xl mx-auto mb-12">
            Profesionales comprometidos con una mirada clínica profunda y humana.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center flex-wrap">
            {especialistas.map((especialista, index) => (
              <div
                key={index}
                className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-lg max-w-md"
              >
                <Image
                  src={especialista.img}
                  alt={especialista.name}
                  width={120}
                  height={120}
                  className="size-24 rounded-full object-cover object-top shrink-0"
                />
                <div className="font-neulis-neue text-ocean">
                  <h3 className="text-lg font-semibold">{especialista.name}</h3>
                  {especialista.code && (
                    <span className="text-sm text-gold font-medium">
                      CPP {especialista.code}
                    </span>
                  )}
                  <p className="mt-2 text-sm text-ocean/70">{especialista.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-ocean">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-neulis-neue text-3xl md:text-4xl font-bold text-white mb-4">
            ITAS es un lugar para quienes quieren pensar en serio la experiencia humana
          </h2>
          <p className="font-neulis-sans text-white/70 max-w-2xl mx-auto mb-8">
            Formación para terapeutas, espacios de aprendizaje para padres y docentes, y una editorial especializada con un enfoque propio y coherente.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/formacion"
              className="bg-gold hover:bg-gold/90 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors"
            >
              Ver programas de formación
            </Link>
            <Link
              href="/editorial"
              className="bg-white/10 hover:bg-white/20 text-white font-neulis-neue px-6 py-3 rounded-full transition-colors border border-white/30"
            >
              Explorar editorial
            </Link>
          </div>
        </div>
      </section>

      <Image
        src={"/assets/ites_socrates.png"}
        height={100}
        width={1920}
        alt="ITAS Socrates"
        className="w-full object-cover"
      />
      <Footer />
    </>
  );
}
