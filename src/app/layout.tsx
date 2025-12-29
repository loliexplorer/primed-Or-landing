import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const darkerGrotesque = localFont({
  src: "./../../public/font/DarkerGrotesque-Regular.ttf",
  variable: "--font-darker-local",
  display: "swap",
});

const forestFont = localFont({
  src: "./../../public/font/forest-regular.ttf",
  variable: "--font-forest-local",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const daytoniaFont = localFont({
  src: "./../../public/font/MTD Daytonia.otf",
  variable: "--font-daytonia-local",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priméd'Or | Quà Tặng Từ Thiên Nhiên",
  description: "Trải nghiệm hành trình mùi hương và quà tặng tinh tế từ thiên nhiên.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${playfair.variable} ${inter.variable} ${darkerGrotesque.variable} ${forestFont.variable} ${daytoniaFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
