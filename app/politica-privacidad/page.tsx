import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ocean hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="size-5" />
          <span className="font-neulis-sans">Volver al inicio</span>
        </Link>

        <h1 className="font-neulis-neue text-4xl md:text-5xl font-bold text-ocean mb-8">
          Política de Privacidad
        </h1>

        <div className="font-neulis-sans text-ocean/80 space-y-6">
          <p className="text-sm text-ocean/60">
            Última actualización: 26 de enero de 2026
          </p>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              1. Información General
            </h2>
            <p>
              El Instituto Triádico de Análisis del Sujeto (ITAS), con domicilio
              en El Pacayar 149, Miraflores 15048, Lima, Perú, es responsable
              del tratamiento de los datos personales que nos proporcione.
            </p>
            <p>
              Esta Política de Privacidad describe cómo recopilamos, usamos y
              protegemos su información personal cuando utiliza nuestro sitio
              web y servicios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              2. Datos que Recopilamos
            </h2>
            <p>Podemos recopilar los siguientes tipos de información:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Datos de identificación:</strong> nombre, apellidos,
                documento de identidad.
              </li>
              <li>
                <strong>Datos de contacto:</strong> correo electrónico, número
                de teléfono, dirección.
              </li>
              <li>
                <strong>Datos profesionales:</strong> profesión, número de
                colegiatura (en caso de profesionales de salud).
              </li>
              <li>
                <strong>Datos de navegación:</strong> dirección IP, tipo de
                navegador, páginas visitadas.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              3. Finalidad del Tratamiento
            </h2>
            <p>Utilizamos sus datos personales para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar su inscripción en seminarios, talleres y cursos.</li>
              <li>Enviar información sobre nuestros servicios y actividades.</li>
              <li>Responder a sus consultas y solicitudes.</li>
              <li>Mejorar nuestros servicios y experiencia de usuario.</li>
              <li>Cumplir con obligaciones legales aplicables.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              4. Base Legal
            </h2>
            <p>
              El tratamiento de sus datos se realiza con base en su
              consentimiento expreso, la ejecución de un contrato de servicios,
              o el cumplimiento de obligaciones legales, según corresponda.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              5. Compartir Información
            </h2>
            <p>
              No vendemos, alquilamos ni compartimos su información personal con
              terceros, excepto en los siguientes casos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cuando sea necesario para prestar nuestros servicios.</li>
              <li>Cuando lo exija la ley o una autoridad competente.</li>
              <li>Con su consentimiento expreso.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              6. Seguridad de los Datos
            </h2>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para
              proteger sus datos personales contra acceso no autorizado,
              alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              7. Sus Derechos
            </h2>
            <p>
              De acuerdo con la Ley N° 29733, Ley de Protección de Datos
              Personales del Perú, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales.</li>
              <li>Rectificar datos inexactos o incompletos.</li>
              <li>Cancelar o solicitar la supresión de sus datos.</li>
              <li>Oponerse al tratamiento de sus datos.</li>
              <li>Revocar el consentimiento otorgado.</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede contactarnos a través de{" "}
              <a
                href="mailto:contacto@institutoitas.com"
                className="text-gold hover:underline"
              >
                contacto@institutoitas.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              8. Cookies
            </h2>
            <p>
              Nuestro sitio web puede utilizar cookies para mejorar su
              experiencia de navegación. Las cookies son pequeños archivos de
              texto que se almacenan en su dispositivo. Puede configurar su
              navegador para rechazar cookies, aunque esto puede afectar la
              funcionalidad del sitio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              9. Cambios en esta Política
            </h2>
            <p>
              Nos reservamos el derecho de modificar esta Política de Privacidad
              en cualquier momento. Los cambios serán publicados en esta página
              con la fecha de actualización correspondiente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-neulis-neue text-2xl font-semibold text-ocean">
              10. Contacto
            </h2>
            <p>
              Si tiene preguntas sobre esta Política de Privacidad o sobre el
              tratamiento de sus datos personales, puede contactarnos:
            </p>
            <ul className="list-none space-y-2">
              <li>
                <strong>Dirección:</strong> El Pacayar 149, Miraflores 15048,
                Lima, Perú
              </li>
              <li>
                <strong>Teléfono:</strong>{" "}
                <a href="tel:+51939491876" className="text-gold hover:underline">
                  +51 939 491 876
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contacto@institutoitas.com"
                  className="text-gold hover:underline"
                >
                  contacto@institutoitas.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
