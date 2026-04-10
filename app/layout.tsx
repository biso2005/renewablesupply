import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RenewableSupply.com | BESS & Solar Compliance Infrastructure",
  description: "The compliance operating system for sub-20MW solar and BESS developers across UK and Europe. G99, Battery Passport, CBAM — one platform.",
  keywords: "BESS compliance, Battery Passport 2027, G99 application, solar developer compliance UK, CBAM reporting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
