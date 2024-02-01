import React from "react";
import Image from "next/image";
import Link from "next/link";

const CarouselCard = ({
  isHighlighted,
  callFrom,
}: {
  isHighlighted: boolean;
  callFrom: string;
}) => {
  return (
    <div
      className={`rounded-2xl my-10 ${
        isHighlighted
          ? " drop-shadow-2xl scale-[1.18] relative -top-5  z-10"
          : ""
      }`}
    >
      <div className="flex flex-col justify-center py-2">
        {isHighlighted && callFrom === "NFT Car Owner" && (
          <div className="flex items-center justify-center -mb-3 z-10">
            <div className="flex items-center justify-center bg-slate-300 text-white h-[20px] w-[20px] rounded-full">
              {/* <Image
                src="/assets/images/tick.png"
                alt="selected"
                height={10}
                width={10}
              /> */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="13.25"
                  className="dark:fill-[#FCFCFC] fill-black"
                  // fill="#"
                  stroke="#424242"
                  strokeWidth="1.5"
                />
                <path
                  d="M18 11L12.5 16.5L10 14"
                  // stroke="#10141A"
                  className="dark:stroke-[#10141A] stroke-white"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
        <Link href="#" className="flex items-center justify-center">
          <Image
            src="/assets/images/wheel.svg"
            alt="car"
            height={200}
            width={200}
            className={`${isHighlighted ? "opacity-100" : "opacity-20"}`}
          />
        </Link>
        <p
          className={`${
            isHighlighted
              ? "text-[#10141A] dark:text-[#fcfcfc]"
              : "text-[#10141A] dark:text-[#868686]"
          } font-bold text-xs text-center mt-4`}
        >
          Zolls spyder Roder - 1%
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
