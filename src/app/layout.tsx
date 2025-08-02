import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeaderYugi from "./components/HeaderYugi";


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
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <main className="flex-2">
          <Navbar/>
          <div className="page-container">
            <HeaderYugi/>
            {children}
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
