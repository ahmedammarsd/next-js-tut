import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
const rubik = Rubik({ subsets: ["latin"] });
import { AppWrapper } from "@/context";

export const metadata: Metadata = {
  title: "Home",
  description:
    "First Project In Next Js , It just Tut basics for learn in it...",
  // SEO FOR STATIC GENERATION - CONTENT
  // openGraph: {
  //   title: "page Title",
  //   description: "description website",
  //   url: "mywebsite.com",
  //   siteName: "Snhoory",
  //   images: [
  //     // CAN ADD MORE THAN IMAGE
  //     {
  //       url: "....",
  //       width: 1260,
  //       height: 800,

  //     }
  //   ],
  //     locale: "en-EN"
  // }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
