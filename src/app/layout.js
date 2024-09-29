import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

import HamburgerProvider from "@/providers/HamburgerProvider";

const mono = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark:bg-black dark:text-white ${mono.className}`}>
        <HamburgerProvider>
          <Navbar />
          {children}
        </HamburgerProvider>
      </body>
    </html>
  );
}
