"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import uvod from "@/public/img/uvod.svg";
import pocitadlo from "@/public/img/pocitadlo.svg";
import penize from "@/public/img/penize.svg";
import prihlaseni from "@/public/img/signIn.svg";
import odhlaseni from "@/public/img/signOut.svg";
import { User } from "next-auth";

const NavMenu = ({ user }: { user: User | undefined }) => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);
  return (
    <>
      <div
        className="relative z-30 h-6 w-7 cursor-pointer lg:hidden"
        onClick={() => setMenu(!menu)}
      >
        <span
          className={`absolute left-0 top-0 h-1 w-full transition-transform bg-black duration-300 ${
            menu && "translate-y-2.5 rotate-45"
          } bg-black`}
        ></span>
        <span
          className={`absolute left-0 top-[10px] h-1 w-full bg-black transition-opacity duration-300 ${
            menu && "opacity-0"
          } bg-black`}
        ></span>
        <span
          className={`absolute bottom-0 left-0 h-1 w-full bg-black transition-transform duration-300 ${
            menu && "-translate-y-2.5 -rotate-45"
          } bg-black`}
        ></span>
      </div>
      <div
        className={`lg:hidden fixed top-0 right-0 z-20 h-full w-full bg-gradient-to-r from-gradientDark via-gradientLight to-gradientDark shadow-lg transform
             ${menu ? "opacity-100 !visible" : "opacity-0 invisible"} transition-opacity duration-300 ease-in-out`}
      >
        <div className="min-h-screen flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center gap-10">
            <Link
              href={`/uvod`}
              className="relative text-center"
              onClick={() => setMenu(!menu)}
            >
              <Image
                src={uvod}
                alt="úvod"
                className="w-auto h-[15vh] object-cover"
              />
              Úvod
            </Link>
            <Link
              href={"/pocitaniKaret"}
              className="relative text-center"
              onClick={() => setMenu(!menu)}
            >
              <Image
                src={pocitadlo}
                alt="počítání karet"
                className="w-auto h-[15vh] object-cover"
              />
              Počítání karet
            </Link>
            <Link
              href={"/cena"}
              className="relative text-center"
              onClick={() => setMenu(!menu)}
            >
              <Image
                src={penize}
                alt="peníze"
                className="w-auto h-[15vh] object-cover"
              />
              Vypočítání ceny
            </Link>
            {user ? (
              <Link
                href={"/api/auth/signout"}
                className="relative text-center"
                onClick={() => setMenu(!menu)}
              >
                <Image
                  src={odhlaseni}
                  alt="odhlásit se"
                  className="w-auto h-[15vh] object-cover"
                />
                Odhlásit se
              </Link>
            ) : (
              <Link
                href={"/api/auth/signin"}
                className="relative text-center"
                onClick={() => setMenu(!menu)}
              >
                <Image
                  src={prihlaseni}
                  alt="přihlásit se"
                  className="w-auto h-[15vh] object-cover"
                />
                Přihlásit se
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
