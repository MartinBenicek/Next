"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import userIcon from "@/public/img/userIcon.svg";
import HeaderComponent from "@/components/HeaderComponent";
import { User } from "next-auth";
import { useState } from "react";

const Dropdown = ({
  user,
  largeIcon = false,
}: {
  user: User | undefined;
  largeIcon?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu
      aria-label="Static Actions"
      modal={false}
      open={open}
      onOpenChange={() => setOpen(!open)}
    >
      <DropdownMenuTrigger asChild className="cursor-pointer ml-2">
        <Image
          src={userIcon}
          alt="user"
          className={`w-10 h-10 ${largeIcon && "lg:w-14 lg:h-14"}`}
        ></Image>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-30 bg-orange-200 shadow-lg rounded-2xl p-2">
        <DropdownMenuItem onClick={() => setOpen(!open)}>
          {user && (
            <HeaderComponent
              url={`/${user.id}`}
              image="games"
              text="Vaše hry"
            ></HeaderComponent>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpen(!open)}>
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
  );
};

export default Dropdown;
