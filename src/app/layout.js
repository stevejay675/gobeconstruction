import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop/BackToTop";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import Whats from "@/components/whats/Whats";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gobe Constructions",
  description: "construction company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className='App'><Header /></div>
        {children}
        {/* <BackToTop/> */}
        <Whats />
        <div className="App"><Footer /></div>
      </body>
    </html>
  );
}
