import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeaderYugi from "./components/HeaderYugi";
import { JetBrains_Mono } from "next/font/google"; // ✅ Import font

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jm Azura",
  description: "Developer Yugiboyy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetBrainsMono.className}>
      <body className="min-h-screen flex flex-col">
        <main className="flex-2">
          <Navbar />
          <div className="page-container">
            <HeaderYugi />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
