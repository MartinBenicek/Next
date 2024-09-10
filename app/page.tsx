import UvodCard from "../components/uvodCard";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800">
      <div className='flex flex-col min-h-screen justify-evenly items-center md:flex-row'>
        <UvodCard text="Úvod" image="uvod" href="cena"></UvodCard>
        <UvodCard text="Počítání karet" image="pocitadlo" href="cena"></UvodCard>
        <UvodCard text="Vypočítání ceny" image="penize" href="cena"></UvodCard>
      </div>
    </main>
  );
}