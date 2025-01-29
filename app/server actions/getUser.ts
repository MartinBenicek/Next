"use server";

import { auth } from "@/lib/auth";

export default async function getUser() {
  const session = await auth();
  const user = session?.user;
  return user;
}
