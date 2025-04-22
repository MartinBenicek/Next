"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import uvod from "@/public/img/uvod.svg";
import pocitadlo from "@/public/img/pocitadlo.svg";
import penize from "@/public/img/penize.svg";
import userIcon from "@/public/img/userIcon.svg";
import { User } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import HeaderComponent from "./HeaderComponent";

const NavMenu = ({ user }: { user: User | undefined }) => {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
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
    <div className="flex items-center justify-between gap-4 lg:w-0 lg:h-0">
      <DropdownMenu
        aria-label="Static Actions"
        modal={false}
        open={open}
        onOpenChange={() => setOpen(!open)}
      >
        <DropdownMenuTrigger
          asChild
          className={`cursor-pointer ml-2 z-30 transition-all duration-300 ease-in-out ${menu ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <Image src={userIcon} alt="user" className="w-10 h-10"></Image>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-30 bg-orange-200 shadow-lg rounded-2xl p-2">
          <DropdownMenuItem
            onClick={() => {
              setOpen(!open);
              setMenu(false);
            }}
          >
            {user && (
              <HeaderComponent
                url={`/${user.id}`}
                image="games"
                text="Vaše hry"
              ></HeaderComponent>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setOpen(!open);
              setMenu(false);
            }}
          >
            {user ? (
              <HeaderComponent
                url="/api/auth/signout"
                image="signOut"
                text="Odhlásit se"
              ></HeaderComponent>
            ) : (
              <HeaderComponent
                url="/api/auth/signin"
                image="signIn"
                text="Přihlásit se"
              ></HeaderComponent>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
             ${menu ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-300 ease-in-out`}
      >
        <div className="min-h-screen flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center gap-10">
            <Link
              href={`/pravidla`}
              className="relative text-center text-2xl"
              onClick={() => setMenu(!menu)}
            >
              <Image
                src={uvod}
                alt="úvod"
                className="w-auto h-[20vh] object-cover"
              />
              Pravidla
            </Link>
            <Link
              href={"/pocitaniKaret"}
              className="relative text-center text-2xl"
              onClick={() => setMenu(!menu)}
            >
              <Image
                src={pocitadlo}
                alt="počítání karet"
                className="w-auto h-[20vh] object-cover"
              />
              Počítání karet
            </Link>
            <Link
              href={"/cena"}
              className="relative text-center text-2xl"
              onClick={() => setMenu(!menu)}
            >
              <Image
                src={penize}
                alt="peníze"
                className="w-auto h-[20vh] object-cover"
              />
              Vypočítání ceny
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
