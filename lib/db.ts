// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default prisma;

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { TypHry, dataPrice } = req.body;

      const newGame = await prisma.games.create({
        data: {
          TypHry: TypHry,
          Hlaseno: "",
          UhraneBody: 0,
          Cena: dataPrice,
        },
      });

      res.status(201).json(newGame);
    } catch (error) {
      console.error("Error creating game:", error);
      res.status(500).json({ error: "Failed to create game" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
