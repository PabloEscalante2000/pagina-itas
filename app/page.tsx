import Nav from "@/components/Nav";
import Image from "next/image";
import { BookOpen, Brain, Heart, Users } from "lucide-react";
import Footer from "@/components/Footer";

const valores = [
  {
    icon: BookOpen,
    title: "Profesional",
    description: "Postgrados, seminarios clínicos y grupos de reflexión para psicólogos.",
  },
  {
    icon: Brain,
    title: "Educación",
    description: "Talleres para docentes y conferencias sobre el contexto cultural.",
  },
  {
    icon: Heart,
    title: "Familias",
    description: "Contenido específico para padres y sobre la crianza y el vínculo desde la TMTD.",
  },
  {
    icon: Users,
    title: "Social",
    description: "Charlas y actividades abiertas a la comunidad en general.",
  },
]

const especialistas = [
  {
    name:"Cesar Escalante",
    code: 29611,
    description: "Psicólogo Clínico con Maestría en Neuropsicología.",
    img:"/assets/cesar.jpg"
  },
  {
    name:"Melissa Huaman",
    code:null,
    description:"Facilitadora psicoterapéutica. Piscoanalítica.",
    img:"/assets/melissa.jpg"
  },
  {
    name:"Catherine Cermeño",
    code:35863,
    description:"Psicóloga Clínica y psicoterapeuta psicoanalítica.",
    img:"/assets/catherine.jpg"
  }
]

const seminarios = [
  {

  }
]

export default function Home() {
  return (
    <>
      <Nav/>
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
          <h3 className="font-neulis-neue font-semibold text-3xl md:text-5xl text-gold mt-4">
            Instituto Triádico de Análisis del Sujeto
          </h3>
          <p className="mt-6 max-w-2xl font-neulis-sans text-start text-lg md:text-xl">
            Espacio de reflexión clínica abierta para docentes, padres y profesionales en la tarea de ampliar su capacidad de compresión, conocimientos que conserve su rigor ético y profundidad humana.
          </p>
        </div>
      </main>
      <section id="filosofia" className="my-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-8 sm:flex-row flex-col">
            <Image
              src={"/assets/itas_filosofia.png"}
              alt="Filosofía ITAS"
              width={300}
              height={100}
              className="rounded-xl object-top sm:w-75 w-full"
            />
            <div className="font-neulis-neue text-ocean space-y-4">
              <h4 className="text-3xl font-medium">Nuestra Filosofía</h4>
              <p>
                No creemos en recetas.
                <br/>
                Creemos en la formación que transforma, en la reflexión que incomoda para sanar y en la palabra que da sentido al sufrimiento contemporáneo.
              </p>
              <button className="text-white bg-gold rounded-full px-4 py-2">Conoce más</button>
            </div>
          </div>
          <div className="mt-12 w-full bg-gold/50 p-5 rounded-4xl text-ocean items-center justify-around flex md:flex-row flex-col gap-8 shadow-gold/50 shadow-2xl">
            <Image
              src={"/assets/itas_icono.png"}
              alt="ITAS"
              width={350}
              height={100}
              className={"object-cover rounded-lg"}
            />
            <div className="font-neulis-neue grid sm:grid-cols-2 gap-6" id="valores">
              {valores.map((valor, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 max-w-56 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <valor.icon className="size-11 text-white bg-ocean p-2.5 rounded-xl group-hover:bg-gold transition-colors duration-300" />
                  <div className="mt-3 space-y-2">
                    <h5 className="font-semibold text-lg">{valor.title}</h5>
                    <p className="text-sm text-ocean/70 leading-relaxed">{valor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="teoria"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/itas_teoria.png')" }}
      >
        <div className="absolute inset-0 bg-ocean/60"></div>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
          <h2 className="font-neulis-neue text-5xl font-bold md:text-7xl">
            Nuestra propuesta <br/> se fundamenta en la 
          </h2>
          <h3 className="font-neulis-neue font-semibold text-3xl md:text-5xl text-gold mt-4">
          Teoría de la Mente <br/> Triádica Daléctica (TMTD)
          </h3>
          <p className="mt-6 max-w-2xl font-neulis-sans text-start text-lg md:text-xl">
            Abordar los modos contemporáneos de vincularse y sufrir. Integrando: En lo corporal (la memoria y expresión), lo emocional (el mapa de los afectos y sentimientos) y los simbólico (el lenguaje, la cultura y el sentido de la existencia).
          </p>  
          <button className="text-white bg-gold rounded-full px-4 py-2 font-neulis-neue mt-4">Conoce más</button>
        </div>
      </section>
      <section id="especialistas" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-neulis-neue text-4xl font-bold text-ocean text-start mb-12">
            Especialistas
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
            {especialistas.map((especialista, index) => (
              <div key={index} className="flex items-center gap-4 bg-ocean/5 rounded-2xl p-6 shadow-lg max-w-96">
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
                   <span className="text-sm text-gold font-medium">CPP {especialista.code}</span>
                  )}
                  <p className="mt-2 text-sm">{especialista.description}</p>
                </div>
              </div>
            ))}
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
      <Footer/>
    </>
  );
}
