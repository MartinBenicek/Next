import NavMenu from "@/components/NavMenu";
import HeaderComponent from "../../components/HeaderComponent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { auth } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import userIcon from "@/public/img/userIcon.svg";
import Dropdown from "@/components/Dropdown";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;
  return (
    <section className="flex flex-col relative min-h-screen">
      <div className="fixed w-full z-20">
        <header className="flex items-center h-[10vh] px-[3vw] bg-gradient-to-r from-gradientDark via-gradientLight to-gradientDark justify-between">
          <HeaderComponent url="/" image="home" text="Domů"></HeaderComponent>
          <div className="flex justify-between mr-5">
            <div className="hidden lg:flex">
              <HeaderComponent
                url="/pravidla"
                image="uvod"
                text="Pravidla"
              ></HeaderComponent>
              <HeaderComponent
                url="/pocitaniKaret"
                image="pocitadlo"
                text="Počítání Karet"
              ></HeaderComponent>
              <HeaderComponent
                url="/cena"
                image="penize"
                text="Cena"
              ></HeaderComponent>
              <Dropdown user={user}></Dropdown>
            </div>
            <NavMenu user={user}></NavMenu>
          </div>
        </header>
      </div>
      <div className="mt-[10vh] min-h-[80vh]">{children}</div>
      <footer className="bg-gradient-to-r from-gradientDark via-gradientLight to-gradientDark h-[10vh]">
        <p></p>
      </footer>
      <SpeedInsights />
    </section>
  );
}
