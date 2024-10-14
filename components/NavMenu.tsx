"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UvodCard from "@/components/UvodCard";

const NavMenu = ({ image, text }: { image: string; text: string }) => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  // Use useEffect to handle side-effects when menu state changes
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup: Reset overflow when component unmounts or menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);
  const handleNavigation = (href: string) => {
    setMenu(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling when navigating
    router.push(href);
  };
  return (
    <>
      <span
        className="relative w-10 h-10 md:hidden"
        onClick={() => setMenu(!menu)}
      >
        <Image src={`/img/${image}.svg`} alt={text} fill={true} />
      </span>
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full z-10 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 text-white shadow-lg transform
             ${menu ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-500 ease-in-out`}
      >
        <div className="min-h-screen flex flex-col justify-center">
          <button
            className="absolute top-7 right-5"
            onClick={() => setMenu(false)}
          >
            <div className="relative w-9 h-9">
              <Image
                src="/img/nav-opened.svg"
                alt="zavřít"
                fill={true}
                sizes="100vw"
              />
            </div>
          </button>
          <div className="flex flex-col space-y-6">
            <span onClick={() => handleNavigation("/uvod")}>
              <UvodCard text="Úvod" image="uvod" href="uvod" />
            </span>
            <span onClick={() => handleNavigation("/pocitaniKaret")}>
              <UvodCard
                text="Počítání karet"
                image="pocitadlo"
                href="pocitaniKaret"
              />
            </span>
            <span onClick={() => handleNavigation("/cena")}>
              <UvodCard text="Vypočítání ceny" image="penize" href="cena" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
