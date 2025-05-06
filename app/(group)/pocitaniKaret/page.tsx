import CardCounterPage from "@/components/CardCounterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Počítání karet v Mariáši",
  description: "Nástroj pro sledování odehraných karet během hry.",
};

const Page = () => {
  return <CardCounterPage />;
};

export default Page;
