import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ITAS | Instituto Triádico de Análisis del Sujeto",
  description:
    "Espacio de reflexión clínica abierta para docentes, padres y profesionales. Formación basada en la Teoría de la Mente Triádica Dialéctica (TMTD). Seminarios, talleres y grupos de reflexión en Miraflores, Lima.",
  keywords: [
    "ITAS",
    "Instituto Triádico de Análisis del Sujeto",
    "psicología clínica",
    "TMTD",
    "Teoría de la Mente Triádica Dialéctica",
    "seminarios psicología",
    "talleres psicología",
    "formación psicoterapéutica",
    "psicoanálisis",
    "neuropsicología",
    "Miraflores",
    "Lima",
    "Perú",
  ],
  authors: [{ name: "Instituto Triádico de Análisis del Sujeto" }],
  creator: "ITAS",
  publisher: "ITAS",
  metadataBase: new URL("https://institutoitas.com"),
  openGraph: {
    title: "ITAS | Instituto Triádico de Análisis del Sujeto",
    description:
      "Espacio de reflexión clínica abierta para docentes, padres y profesionales. Formación que transforma basada en la TMTD.",
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
      "Espacio de reflexión clínica abierta para docentes, padres y profesionales.",
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
