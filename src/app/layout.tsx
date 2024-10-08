import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import { Lexend } from "next/font/google";
import { Lexend_Exa } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "./recoilContextProvider";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "./queryProvider";

const lexenda = Lexend({ subsets: ["latin"], variable: "--font-lexenda" });

const lexenda_exa = Lexend_Exa({
  subsets: ["latin"],
  variable: "--font-lexenda-exa",
});

const lexenda_deca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexenda-deca",
});

export const metadata: Metadata = {
  title: "GoScout.me",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecoilContextProvider>
        <body
          className={`${lexenda.className} ${lexenda_exa.className} ${lexenda_deca.className} `}
          suppressHydrationWarning
        >
          <QueryProvider>{children}</QueryProvider>
          <Toaster />
        </body>
      </RecoilContextProvider>
    </html>
  );
}
