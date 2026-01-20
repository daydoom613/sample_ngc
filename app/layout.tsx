import type { Metadata } from "next";
import "./globals.css";
import { GlassPrismNavbar } from "@/components/GlassPrismNavbar";
import { ParticlePreloader } from "@/components/ParticlePreloader";

export const metadata: Metadata = {
  title: "Nature Guru Creations | VFX Portfolio",
  description:
    "Award-winning VFX studio creating cinematic experiences. Scientists of Emotion.",
  keywords: "VFX, Visual Effects, Animation, 3D, Cinema",
  authors: [{ name: "Nature Guru Creations" }],
  creator: "Nature Guru Creations",
  publisher: "Nature Guru Creations",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://natureguru.com",
    siteName: "Nature Guru Creations",
    title: "Nature Guru Creations | VFX Portfolio",
    description: "Award-winning VFX studio",
    images: [
      {
        url: "https://natureguru.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Guru Creations",
    description: "Scientists of Emotion | VFX Studio",
    creator: "@natureguru",
  },
  other: {
    preconnect: "https://fonts.googleapis.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ParticlePreloader />
        <GlassPrismNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
