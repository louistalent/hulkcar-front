import React from "react";

const CarDetail = () => {
  return (
    <>
      <div className="items-stretch dark:bg-[#1D1E21] dark:border-none border border-[#F1F1F1] flex w-full flex-col py-px xl:pl-0 xl:pt-6 xl:pb-0 rounded-xl relative my-10 lg:mt-0 md:pr-0 md:pl-0">
        <div className="flex flex-col px-3 py-2 -mb-16">
          <p className="font-bold dark:text-slate-50 text-black ">Car Detail</p>
          <p className="text-gray-400">View More Detail</p>
        </div>
        <img
          loading="lazy"
          srcSet="\assets\dashboard\whitecar.png"
          className="aspect-[1.75] object-contain object-center w-full"
        />
        <div className="dark:bg-black flex w-full flex-col whitespace-nowrap mt-2.5 pl-5 pr-20 py-3 rounded-xl items-start">
          <div className="dark:text-white text-black text-base font-bold leading-6">
            Mark of car
          </div>
          <div className="text-slate-500 text-sm leading-5 mt-1">
            Name of car model
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
