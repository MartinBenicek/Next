import getUser from "@/app/server actions/getUser";
import PricePage from "@/components/PricePage";
import { cookies } from "next/headers";

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
