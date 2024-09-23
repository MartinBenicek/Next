import React from "react";
import ButtonSegment from "../../../components/ButtonSegment";
import CenaText from "@/components/CenaText";

const page = () => {
  return (
    <main className="flex flex-grow items-center justify-center">
      <section className="grid grid-rows-6 grid-cols-7 justify-items-center items-center">
        <CenaText
          divStyles="row-start-2 row-end-7 h-full flex flex-col"
          textStyles="text-xl h-10"
        ></CenaText>
        <ButtonSegment styles="col-start-2" id="Hra"></ButtonSegment>
        <ButtonSegment styles="col-start-3" id="Sedma"></ButtonSegment>
        <ButtonSegment styles="col-start-4" id="Kilo"></ButtonSegment>
        <ButtonSegment styles="col-start-5" id="Betl"></ButtonSegment>
        <ButtonSegment styles="col-start-6" id="Durch"></ButtonSegment>
      </section>
    </main>
  );
};

export default page;
