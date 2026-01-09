import { serif, roboto } from "../src/utils/font";
import { cn } from "@/src/utils/cn";
import "./globals.css";
import Navbar from "@/src/component/Element/Navbar";
import Footer from "@/src/component/Element/Footer";
import "aos/dist/aos.css";
import AOSProvider from "@/src/component/AOSProvider";

export const metadata = {
  title: "Aether Tea & Herbs",
  description: "Warung Teh dan Herbal Terbaik di Kota Anda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(serif.variable, roboto.variable, "antialiased")}>
        <Navbar />
        <AOSProvider>{children}</AOSProvider>
        <Footer />
      </body>
    </html>
  );
}
