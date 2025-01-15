import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop/BackToTop";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import Whats from "@/components/whats/Whats";



const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Gobe Constructions",
  description: "construction company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header />
        {children}
        <Whats />
        <div className="App"><Footer /></div>
      </body>
    </html>
  );
}
