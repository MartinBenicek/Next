import NavMenu from "@/components/NavMenu";
import HeaderComponent from "../../components/HeaderComponent";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col min-h-screen">
      <header className="flex items-center h-24 bg-gradient-to-r from-gradientDark via-gradientLight to-gradientDark justify-between">
        <HeaderComponent url="/" image="home" text="Domů"></HeaderComponent>
        <span className="flex justify-between mr-5">
          <span className="hidden md:flex">
            <HeaderComponent
              url="/uvod"
              image="uvod"
              text="Úvod"
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
          </span>
          <NavMenu image="nav-closed" text="menu"></NavMenu>
        </span>
      </header>
      {children}
      <footer className="bg-gradient-to-r from-gradientDark via-gradientLight to-gradientDark p-10">
        <p>lmao</p>
      </footer>
      <SpeedInsights />
    </section>
  );
}
