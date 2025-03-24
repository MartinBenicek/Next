import UvodCard from "@/components/uvodCard";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import Link from "next/link";
import uvod from "@/public/img/uvod.svg";
import pocitadlo from "@/public/img/pocitadlo.svg";
import penize from "@/public/img/penize.svg";

export default function Home() {
  return (
    <>
      <main className="flex flex-col lg:flex-row min-h-screen justify-evenly items-center md:flex-row bg-gradient-to-r from-gradientDark via-gradientLight to-gradientDark">
        <Link
          href={"/cena"}
          className="relative text-2xl lg:text-3xl xl:text-4xl flex flex-col items-center justify-center md:gap-5 hover:underline"
        >
          <Image
            src={uvod}
            alt="peníze"
            className="w-auto h-[20vh] xl:h-[30vh] object-cover"
          />
          Cena
        </Link>
        <Link
          href={"/cena"}
          className="relative text-2xl lg:text-3xl xl:text-4xl flex flex-col items-center justify-center md:gap-5 hover:underline"
        >
          <Image
            src={pocitadlo}
            alt="peníze"
            className="w-auto h-[20vh] xl:h-[30vh] object-cover"
          />
          Počítání karet
        </Link>
        <Link
          href={"/cena"}
          className="relative text-2xl lg:text-3xl xl:text-4xl flex flex-col items-center justify-center md:gap-5 hover:underline"
        >
          <Image
            src={penize}
            alt="peníze"
            className="w-auto h-[20vh] xl:h-[30vh] object-cover"
          />
          Vypočítání ceny
        </Link>
      </main>
      <SpeedInsights />
    </>
  );
}
