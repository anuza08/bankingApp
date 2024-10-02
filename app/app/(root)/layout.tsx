import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Serif, Inter } from "next/font/google";
// import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      sidebar
      {children}
    </main>
  );
}
