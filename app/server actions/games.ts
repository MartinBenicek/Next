"use server";

import { prisma } from "@/lib/db";

export async function createGame(
  dataPrice: number,
  TypHry: string,
  body: number,
  hlaseno: string
) {
  const newGame = await prisma.games.create({
    data: {
      TypHry: TypHry,
      Hlaseno: hlaseno,
      UhraneBody: body,
      Cena: dataPrice,
    },
  });
  return newGame;
}

export async function getGames() {
  const games = await prisma.games.findMany();
  return games;
}
