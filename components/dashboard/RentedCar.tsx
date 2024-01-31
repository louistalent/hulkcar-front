import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const RentedCar = () => {
  return (
    <div className="items-stretch self-stretch dark:bg-[#1D1F25] dark:border-[#1D1F25] flex w-auto relative flex-col p-5 rounded-xl bg-[#FFF] border border-[#F1F1F1]">
      <header className="justify-between items-stretch flex w-full gap-5">
        <div className="justify-between items-stretch flex gap-1 my-2">
          <div className="dark:text-white text-[#10141A] text-base font-bold leading-6 grow whitespace-nowrap">
            Rented car
          </div>
          <div className="flex w-3 shrink-0 h-3 bg-green-400 ml-1 my-auto rounded-full" />
        </div>
        <div className="items-stretch flex gap-2">
          <Services href="#" src="/assets/dashboard/gas-station.png" 
          active={true}
          />
          <Services href="#" src="/assets/dashboard/Vector.png" />
          <Services href="#" src="/assets/dashboard/Vector-1.png" 
          
          />
        </div>
      </header>
      <div className="w-full">
        <Image
          loading="lazy"
          src="/assets/dashboard/rentedmap.png"
          alt="Car Image"
          width={380}
          height={457}
          className="max-h-[500px] w-full"
        />
      </div>
    </div>
  );
};

export default RentedCar;

const Services = ({ href, src,active }: { href: string; src: string;active?:boolean }) => (
  <a
    href={href}
    className={cn(
      "justify-center bg-black/40 items-center  flex aspect-square flex-col w-[30px] h-[30px] px-2 rounded-[55px]",
      active && "bg-gray-800"
    )}
    aria-label="Car Image 1"
    role="img"
  >
    <img
      loading="lazy"
      src={src}
      className="aspect-square object-contain object-center w-full justify-center items-center"
      alt="Car 1"
    />
  </a>
);
