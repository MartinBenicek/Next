import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import Link from "next/link";
import uvod from "@/public/img/uvod.svg";
import pocitadlo from "@/public/img/pocitadlo.svg";
import penize from "@/public/img/penize.svg";
import { auth } from "@/lib/auth";
import Dropdown from "@/components/Dropdown";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <>
      <main className="flex flex-col min-h-screen bg-gradient-to-r from-gradientDark via-gradientLight to-gradientDark">
        <div className="self-end py-[3vh] px-[3vw]">
          <Dropdown user={user} largeIcon />
        </div>
        <div className="flex flex-col flex-grow lg:flex-row justify-evenly items-center pb-[5vh] lg:pb-[10vh]">
          <Link
            href={"/pravidla"}
            className="relative text-2xl lg:text-3xl xl:text-4xl flex flex-col items-center justify-center md:gap-5 hover:underline"
          >
            <Image
              src={uvod}
              alt="peníze"
              className="w-auto h-[20vh] xl:h-[30vh] object-cover"
            />
            Pravidla
          </Link>
          <Link
            href={"/pocitaniKaret"}
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
        </div>
      </main>
      <SpeedInsights />
    </>
  );
}
