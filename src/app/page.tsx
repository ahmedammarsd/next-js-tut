"use client";
import Header from "@/components/Header/index";
import Image from "next/image";
import logo from "../../public/logoBestSelect.png";

export default function Home() {
  return (
    <main>
      <Header />
      Dashboard
      <Image
        src={logo}
        quality={100}
        alt="logo"
        placeholder="blur"
        width={200}
        className="drop-shadow-md"
      />
    </main>
  );
}
