import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Changa_One } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
  style: "normal",
});

const changa = Changa_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-changa",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Omen Menu Online",
    default: "Omen Menu Online",
  },
  description: "Menu online Rombong Omen",
  icons: {
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Menu Online Rombong Omen",
    description:
      "Menu online untuk kamu biar gak bingung lagi kalo pesen di Rombong Omen, yuk di pesan",
    url: "https://menu-omen.vercel.app/",
    siteName: "omenmenu.app",
    images: [
      {
        url: "https://menu-omen.vercel.app/og.png",
        width: 2294,
        height: 1090,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Menu online Rombong Omen",
    description:
      "Menu online untuk kamu biar gak bingung lagi kalo pesen di Rombong Omen, yuk di pesan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${changa.variable} font-sans`}
    >
      <body className="w-full min-h-screen px-16 bg-pastel sm:px-4 md:px-8">
        {children}
      </body>
    </html>
  );
}
