import NavMenu from "@/components/NavMenu";
import HeaderComponent from "../../components/HeaderComponent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { auth } from "@/lib/auth";
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;
  return (
    <section className="flex flex-col min-h-screen">
      <header className="flex items-center h-[10vh] bg-gradient-to-r from-gradientDark via-gradientLight to-gradientDark justify-between">
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
            {user ? (
              <HeaderComponent
                url="/signout"
                image="signOut"
                text="Odhlásit se"
              ></HeaderComponent>
            ) : (
              <HeaderComponent
                url="/signin"
                image="signIn"
                text="Přihlásit se"
              ></HeaderComponent>
            )}
          </span>
          <NavMenu image="nav-closed" text="menu"></NavMenu>
        </span>
      </header>
      {children}
      <footer className="bg-gradient-to-r from-gradientDark via-gradientLight to-gradientDark h-[10vh]">
        <p></p>
      </footer>
      <SpeedInsights />
    </section>
  );
}
