import React from "react";
import ButtonSegment from "../../../components/ButtonSegment";
import CenaText from "@/components/CenaText";

const page = () => {
  const styles =
    "row-start-1 row-end-7 grid grid-rows-6 h-full justify-items-center items-center";
  return (
    <main className="flex flex-grow items-center justify-center">
      <section className="grid grid-rows-6 grid-cols-7 justify-items-center items-center">
        <CenaText
          divStyles="row-start-2 row-end-7 h-full flex flex-col mr-2 justify-items-center"
          textStyles="text-base lg:text-xl h-10 my-2"
        ></CenaText>
        <ButtonSegment
          styles="col-start-2 row-start-1 row-end-7 grid grid-rows-6 h-full justify-items-center items-center"
          id="Hra"
        ></ButtonSegment>
        <ButtonSegment
          styles="col-start-3 row-start-1 row-end-7 grid grid-rows-6 h-full justify-items-center items-center"
          id="Sedma"
        ></ButtonSegment>
        <ButtonSegment
          styles={`col-start-4 ${styles}`}
          id="Kilo"
        ></ButtonSegment>
        <ButtonSegment
          styles={`col-start-5 ${styles}`}
          id="Betl"
        ></ButtonSegment>
        <ButtonSegment
          styles={`col-start-6 ${styles}`}
          id="Durch"
        ></ButtonSegment>
      </section>
    </main>
  );
};

export default page;
