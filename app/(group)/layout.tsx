import HeaderComponent from "../../components/HeaderComponent";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <header className="flex items-center h-24 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 justify-between">
              <HeaderComponent url="/" image="home" text="Domů"></HeaderComponent>
              <span className="flex justify-between mr-5">
                <HeaderComponent url="/uvod" image="uvod" text="Úvod"></HeaderComponent>
                <HeaderComponent url="/pocitaniKaret" image="pocitadlo" text="Počítání Karet"></HeaderComponent>
                <HeaderComponent url="/cena" image="penize" text="Cena"></HeaderComponent>
              </span>
          </header>
          <main className="flex-grow">
          {children}
          </main>
          <footer className="bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 p-10">
            <p>lmao</p>
          </footer>
        </body>
      </html>
    );
  }