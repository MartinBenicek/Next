"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export default async function getUser() {
  const session = await auth();
  const user = session?.user;
  return user;
}
