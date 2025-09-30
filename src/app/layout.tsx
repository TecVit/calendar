import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans({
  variable: "--font-custom",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calendário IFSP",
  description: "Criado por Vitor Silva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${DMSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
