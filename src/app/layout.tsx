import "~/styles/globals.css";

import { type Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { site } from "~/data/portfolio";

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.tagline,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
