import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  isHighlighted,
  soldOut,
}: {
  isHighlighted: boolean;
  soldOut?: boolean;
}) => {
  return (
    <div
      className={`max-w-[220px] relative border-4 border-solid rounded-2xl dark:border-[#2D2E31] border-[#CFCFCF]  my-10 sm:px-5 px-2 ${
        isHighlighted
          ? "shadow-2xl drop-shadow-2xl scale-[1.18] relative -top-5  z-10"
          : ""
      } backdrop-filter backdrop-blur-md`}
    >
      {soldOut && (
        <div className="absolute z-10 -top-4 left-[70px]">
          <span className="text-white bg-red-500 px-3 py-1.5 rounded-full text-xs font-medium">
            Sold out
          </span>
        </div>
      )}
      <div className="flex items-center justify-center py-3 border-b-2 dark:border-[#424242] border-[#10141a1a]">
        <a href="#">
          <Image
            className="rounded-t-lg"
            src="/assets/images/lambo.png"
            alt="car"
            height={30}
            width={100}
          />
        </a>
      </div>
      <div className="p-5 flex flex-col">
        <div className="flex flex-col justify-center">
          <p className="text-center  text-sm dark:text-[#fff] text-[#10141A] font-semibold">
            Porsche Tagra-4
          </p>
          <p className="text-center text-sm dark:text-[#868686] text-[#5B6169]">
            $150.00
          </p>
        </div>
        {isHighlighted && (
          <Link
            href="/cardetail"
            className=" flex items-center justify-center border font-semibold border-[#10141a1a] rounded-md py-2 my-2 dark:text-[#E7E8E8] text-[#10141A] "
          >
            View Car
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
