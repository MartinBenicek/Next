"use server";

import { prisma } from "@/lib/db";
import getUser, { getUserGames } from "./getUser";
import { revalidatePath } from "next/cache";

export async function createGame(
  dataPrice: number,
  TypHry: string,
  body: number,
  hlaseno: string
) {
  const user = await getUser();
  if (!user?.id) {
    return;
  }
  const newGame = await prisma.games.create({
    data: {
      TypHry: TypHry,
      Hlaseno: hlaseno,
      UhraneBody: body,
      Cena: dataPrice,
      playerID: user?.id,
    },
  });
  revalidatePath("/" + user?.id);
  return newGame;
}

export async function getGames() {
  const user = await getUser();
  const dbUser = await prisma.user.findFirst({
    where: { id: user?.id },
    include: { games: { orderBy: { id: "desc" } } },
  });
  return dbUser?.games;
}

export async function updateGame(formData: FormData, gameId: number) {
  const TypHry = formData.get("TypHry") as string;
  const hlaseno = formData.get("Hlaseno") as string;
  const body = parseInt(formData.get("UhraneBody") as string);
  const dataPrice = parseInt(formData.get("Cena") as string);
  const user = await getUserGames();
  if (!user?.games.some((game) => game.id === gameId)) {
    return;
  }
  const updatedGame = await prisma.games.update({
    where: { id: gameId },
    data: {
      TypHry: TypHry,
      Hlaseno: hlaseno,
      UhraneBody: body,
      Cena: dataPrice,
    },
  });
  revalidatePath("/" + user?.id);
  return updatedGame;
}

export async function deleteGame(id: number) {
  const user = await getUserGames();
  if (!user?.games.some((game) => game.id === id)) {
    return;
  }
  const deletedGame = await prisma.games.delete({
    where: { id: id },
  });
  revalidatePath("/" + user?.id);
  return deletedGame;
}
