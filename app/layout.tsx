import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ITAS | Instituto Triádico de Análisis del Sujeto",
  description:
    "Instituto dedicado a la formación, reflexión clínica y producción de contenidos terapéuticos. Formación para profesionales, seminarios para padres y docentes, y editorial especializada basada en la TMTD.",
  keywords: [
    "ITAS",
    "Instituto Triádico de Análisis del Sujeto",
    "psicología clínica",
    "TMTD",
    "Teoría de la Mente Triádica Dialéctica",
    "formación terapeutas",
    "seminarios psicología",
    "talleres psicología",
    "formación psicoterapéutica",
    "editorial terapéutica",
    "cuentos infantiles terapéuticos",
    "César Escalante",
    "Miraflores",
    "Lima",
    "Perú",
  ],
  authors: [{ name: "ITAS - Instituto Triádico de Análisis del Sujeto" }],
  creator: "ITAS",
  publisher: "ITAS",
  metadataBase: new URL("https://institutoitas.com"),
  openGraph: {
    title: "ITAS | Instituto Triádico de Análisis del Sujeto",
    description:
      "Una marca que forma, piensa y crea en salud mental. Formación, seminarios y editorial especializada basada en la TMTD.",
    url: "https://institutoitas.com",
    siteName: "ITAS",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/assets/itas_banner.png",
        width: 1200,
        height: 630,
        alt: "ITAS - Instituto Triádico de Análisis del Sujeto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITAS | Instituto Triádico de Análisis del Sujeto",
    description:
      "Una marca que forma, piensa y crea en salud mental. Formación, seminarios y editorial especializada.",
    images: ["/assets/itas_banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
