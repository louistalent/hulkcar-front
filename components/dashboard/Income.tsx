import React from "react";
import DailySaleSvg from "./DailySaleSvg";

const Income = () => {
  return (
    <div className="items-stretch self-stretch dark:bg-[#1D1F25]  flex w-full flex-col pt-5 pb-12 px-5 rounded-xl h-full dark:border-none border border-[#F1F1F1]">
      <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex flex-col">
          <div className="dark:text-gray-200 text-black text-base font-bold leading-6">
            Income form this car
          </div>
          <div className="text-slate-500 text-sm leading-5 whitespace-nowrap">
            <span className="text-slate-500">(</span>
            <span className="font-bold text-slate-500">+15%</span>
            <span className="text-slate-500">) increase in today sales.</span>
          </div>
        </div>
        <div className="items-stretch border flex gap-2.5 px-3.5 py-2 rounded-lg border-solid border-zinc-900 self-start">
          <div className="items-stretch flex gap-2.5 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb32724b6cb66d53a55556b889c1cffc2d5f103248fa357567a309ce3f54dfa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
              className="aspect-square object-contain object-center w-4 shrink-0 my-auto"
            />
            <div className="text-neutral-500 text-sm font-semibold leading-5 grow">
              20/02/2022
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e01f106b6075394e7365006e8426f8ca28cc3903af54c7016b728e62eaa1409a?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
            className="aspect-square object-contain object-center w-6 shrink-0"
          />
        </div>
      </div>
      <div className="flex items-stretch justify-between gap-1.5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:mt-10">
        {/* <div className="flex basis-0 flex-col items-stretch text-sm text-white whitespace-nowrap text-right">
          <div className="leading-[140%] dark:text-white text-black">600</div>
          <div className="leading-[140%] mt-6 dark:text-white text-black">400</div>
          <div className="leading-[140%] mt-6 dark:text-white text-black">200</div>
          <div className="leading-[140%] mt-6 dark:text-white text-black">0</div>
        </div> */}
        <div className="overflow-auto scrollbar-none">
          {/* <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb392a1ccf73a8a4ca79de435f85178a3c6fb7b088897ee4d4f556518aed7371?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb392a1ccf73a8a4ca79de435f85178a3c6fb7b088897ee4d4f556518aed7371?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb392a1ccf73a8a4ca79de435f85178a3c6fb7b088897ee4d4f556518aed7371?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb392a1ccf73a8a4ca79de435f85178a3c6fb7b088897ee4d4f556518aed7371?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb392a1ccf73a8a4ca79de435f85178a3c6fb7b088897ee4d4f556518aed7371?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb392a1ccf73a8a4ca79de435f85178a3c6fb7b088897ee4d4f556518aed7371?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb392a1ccf73a8a4ca79de435f85178a3c6fb7b088897ee4d4f556518aed7371?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb392a1ccf73a8a4ca79de435f85178a3c6fb7b088897ee4d4f556518aed7371?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
            className="aspect-[8.33] object-cover object-center w-[787px] my-auto max-md:max-w-full"
          /> */}
          <DailySaleSvg />
        </div>
      </div>
      {/* <div className="self-center flex w-full max-w-[735px] items-stretch justify-between gap-5 text-sm text-white whitespace-nowrap text-center mt-4 max-md:max-w-full max-md:flex-wrap">
        <div className="leading-[140%] grow dark:text-white text-black">Apr</div>
        <div className="leading-[140%] dark:text-white text-black">May</div>
        <div className="leading-[140%] dark:text-white text-black">Jun</div>
        <div className="leading-[140%] dark:text-white text-black">Jul</div>
        <div className="leading-[140%] dark:text-white text-black">Aug</div>
        <div className="leading-[140%] dark:text-white text-black">Sep</div>
        <div className="leading-[140%] dark:text-white text-black">Oct</div>
        <div className="leading-[140%] dark:text-white text-black">Nov</div>
        <div className="leading-[140%] grow dark:text-white text-black">Dec</div>
      </div> */}
    </div>
  );
};

export default Income;
