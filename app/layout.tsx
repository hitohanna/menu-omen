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
  metadataBase: new URL("https://menu-omen.vercel.app/"),
  title: {
    template: "%s | Omen Menu",
    default: "Omen Menu",
  },
  description:
    "Menu online untuk kamu biar gak bingung lagi kalo pesen di Rombong Omen, yuk di pesan",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Menu Online Rombong Omen",
    description:
      "Menu online untuk kamu biar gak bingung lagi kalo pesen di Rombong Omen, yuk di pesan",
    url: "https://menu-omen.vercel.app/",
    siteName: "omenmenu.app",
    images: [
      {
        url: "/og.png",
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
    images: [
      {
        url: "/og.png",
        width: 2294,
        height: 1090,
      },
    ],
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
