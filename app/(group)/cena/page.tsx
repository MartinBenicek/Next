import getUser from "@/app/server actions/getUser";
import PricePage from "@/components/PricePage";

const Page = async () => {
  const user = await getUser();

  return <PricePage user={user} />;
};

export default Page;
