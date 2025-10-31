import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Home Bridge",
  description: "Donate to Help the Needy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <SessionWrapper>

        <Navbar />
        <div className="min-h-[87vh] bg-black text-white" >
        {children}
        </div>
        <Footer />
        </SessionWrapper>
      
      </body>
    </html>
  );
}
