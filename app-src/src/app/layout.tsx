import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psicologia Pro | Atendimento Humanizado e Acolhedor",
  description: "Atendimento psicológico humanizado para ansiedade, estresse e desenvolvimento emocional. Agende sua sessão online ou presencial com ética e sigilo.",
  keywords: ["psicologia", "terapia online", "ansiedade", "burnout", "saúde mental", "psicólogo"],
  openGraph: {
    title: "Psicologia Pro | Atendimento Humanizado",
    description: "Cuidar da sua saúde emocional pode transformar sua vida. Agende uma sessão hoje.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
