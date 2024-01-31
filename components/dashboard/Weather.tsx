import { cn } from "@/lib/utils";
import React from "react";
import { Locate, MapPin, Moon, Sun } from "lucide-react";

const Weather = () => {
  return (
    <div className="items-stretch dark:bg-[#1D1E21] border border-[#F1F1F1] dark:border-none flex w-full flex-col p-5 rounded-xl">
      <div className="justify-between items-stretch flex gap-0">
        <div className="dark:text-white text-[#000] text-base font-bold leading-6 grow">
          Weather
        </div>
        <div className="items-stretch flex gap-1 self-start">
         <MapPin size={16} className="self-center" />
          <div className="dark:text-slate-500 text-xs leading-4 grow whitespace-nowrap text-black">
            Paris, France
          </div>
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-4 text-xs text-white whitespace-nowrap tracking-normal mt-3 overflow-x-auto scrollbar-none">
        <WeatherCondition
          time="11 AM"
          temp="37"
          // src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="12 AM"
          temp="37"
          // src="\assets\dashboard\sunmoon.png"
          active={true}
        />
        <WeatherCondition
          time="1 AM"
          temp="37"
          // src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="12 AM"
          temp="37"
          // src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="13 AM"
          temp="37"
          // src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="14 AM"
          temp="37"
          // src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="1 AM"
          temp="37"
          // src="\assets\dashboard\sunmoon.png"
        />
      </div>
    </div>
  );
};

export default Weather;

const WeatherCondition = ({
  time,
  // src,
  temp,
  active,
}: {
  time: string;
  temp: string;
  active?: boolean;
}) => (
  <div
    className={cn(
      "items-center max-w-fit px-1 border flex flex-col py-2 rounded-full border-solid border-black border-opacity-10 flex-1",
      active ? "dark:bg-white bg-black dark:text-black text-white" : " dark:text-white text-black"
    )}
  >
    <div className={
      cn(" text-center   ",)
    }>{time}</div>
    <div className="w-fit flex justify-center">
      <Sun size={24} className="self-center mt-1" />
    </div>
    <div className="font-bold  mt-1 ">
      <p className="text-center md:text-base text-xs ">{temp}</p>
    </div>
  </div>
);
