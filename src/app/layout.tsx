import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neueMontreal = localFont({ 
  src: [
    {
    path: '../../public/fonts/PPNeueMontreal-Medium.otf',
    weight: '400'
  }, 
],
  variable: '--font-neue-montreal'
})

export const metadata: Metadata = {
  title: "Slider",
  description: "Slider app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neueMontreal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
