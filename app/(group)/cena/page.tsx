import getUser from "@/app/server actions/getUser";
import PricePage from "@/components/PricePage";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Výpočet ceny hry",
  description:
    "Automatický výpočet ceny podle typu hry, flekování a uhraných bodů.",
};

const Page = async () => {
  const user = await getUser();
  const cookieStore = cookies();
  let history;
  if (cookieStore.get("history") === undefined) {
    history = true;
  } else {
    history = cookieStore.get("history")?.value === "true" ? true : false;
  }

  return <PricePage user={user} history={history} />;
};

export default Page;
