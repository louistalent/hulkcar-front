import AccordionDiv from "@/components/faq/AccordionDiv";
import React from "react";

const page = () => {
  return (
    <section className="min-h-screen overflow-x-hidden mf:px-10 mf:pt-32 px-3 pt-4 pb-0 bg-white dark:bg-[#141518]">
      <h1 className="dark:text-slate-50 text-black text-3xl mb-8 font-bold text-center">FAQ</h1>
      <div className="flex items-center justify-center">
        <AccordionDiv />
      </div>
    </section>
  );
};

export default page;
