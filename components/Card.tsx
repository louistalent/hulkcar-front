import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Urbanist } from "next/font/google";
import { cn } from "@/lib/utils";
const urbanist = Urbanist({
  subsets: ["latin"],
});

const Card = ({
  isHighlighted,
  soldOut,
}: {
  isHighlighted?: boolean;
  soldOut?: boolean;
}) => {
  return (
    <div
      className={cn("max-w-[220px] max-sm:w-[160px]  relative border-4 border-solid rounded-2xl dark:border-[#2D2E31] border-[#CFCFCF]  my-10 sm:px-5 px-2  backdrop-filter backdrop-blur-md",
      isHighlighted
      ? "shadow-2xl drop-shadow-2xl max-sm:h-[210px] scale-[1.18] relative max-sm:-top-3 -top-5  z-10"
      : "max-sm:h-[180px]",
      urbanist.className)}
    >
      {soldOut && (
        <div className="absolute z-10 -top-4 left-[70px] max-sm:left-[40px] max-sm:-top-3.5 ">
          <span className="text-white bg-red-500 px-3 py-1.5 rounded-full text-xs max-sm:text-[10px] max-sm:font-light font-medium">
            Sold out
          </span>
        </div>
      )}
      <div className="flex items-center justify-center py-3 border-b-2 dark:border-[#424242] border-[#10141a1a]">
        <a href="#">
          <Image
            className="rounded-t-lg max-sm:w-24"
            src="/assets/images/lambo.png"
            alt="car"
            height={30}
            width={100}
            
          />
        </a>
      </div>
      <div className="sm:p-5 max-sm:py-4 flex flex-col">
        <div className="flex flex-col justify-center">
          <p className="text-center max-sm:text-xs  text-sm dark:text-[#fff] text-[#10141A] font-semibold">
            Porsche Tagra
          </p>
          <p className="text-center max-sm:text-[10px] text-sm dark:text-[#868686] text-[#5B6169]">
            $150.00
          </p>
        </div>
        {isHighlighted && (
          <Link
            href="/cardetail"
            className=" flex items-center max-sm:text-xs  justify-center border font-semibold border-[#10141a1a] dark:border-[#424242] rounded-md py-2 my-2 dark:text-[#E7E8E8] text-[#10141A] "
          >
            View Car
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
