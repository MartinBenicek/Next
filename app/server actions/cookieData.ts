"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function setCookieHistory(value: boolean) {
  const cookieStore = cookies();
  cookieStore.set("history", value.toString(), { maxAge: 60 * 24 * 60 * 60 });
  revalidatePath("/cena");
}
