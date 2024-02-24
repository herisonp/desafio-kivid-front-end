import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Desafio Kivid - Front-end",
  description: "Desafio proposto por Kivid. Formulário de endereço",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={redHatDisplay.className}>
        <StyledComponentsRegistry>
          <div className="min-h-screen felx flex-col bg-[#F2F4F5]">
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
