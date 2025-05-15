import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import weblogo from "../public/weblogo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ORAGAN",
  icons: {
    icon: weblogo.src,  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}