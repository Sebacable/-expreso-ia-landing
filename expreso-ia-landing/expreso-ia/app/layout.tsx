// app/layout.tsx
import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Expreso IA · Automatizaciones con IA para PyMEs argentinas",
  description:
    "Asistentes con inteligencia artificial que responden tu WhatsApp, clasifican tus mails y unifican tus leads. Implementación en 7 días. Buenos Aires.",
  openGraph: {
    title: "Expreso IA · Automatizaciones con IA para PyMEs",
    description:
      "Tu negocio no necesita más gente. Necesita menos tareas repetidas.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}
