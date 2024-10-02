import React from "react";
import ButtonSegment from "../../../components/ButtonSegment";
import CenaText from "@/components/CenaText";

const page = () => {
  const styles =
    "row-start-1 row-end-7 grid grid-rows-5 h-full justify-items-center items-center";
  return (
    <main className="flex flex-grow items-center justify-center">
      <section className="h-[40vh]">
        <div className="grid grid-rows-5 grid-cols-7 justify-items-center items-center h-full">
          <CenaText
            divStyles="row-start-1 row-end-6 h-full grid grid-rows-5 items-center"
            textStyles="text-base lg:text-xl h-fit"
          ></CenaText>
          <ButtonSegment
            styles={`col-start-2 ${styles}`}
            id="Hra"
          ></ButtonSegment>
          <ButtonSegment
            styles={`col-start-3 ${styles}`}
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
        </div>
      </section>
    </main>
  );
};

export default page;
