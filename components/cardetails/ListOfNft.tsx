import React from "react";
import { FaSailboat } from "react-icons/fa6";

import CarOwnerCarousel from "./CarOwnerCarousel";

const ListOfNft = () => {
  return (
    <div className="dark:bg-[#262729] bg-[#EDEDED] flex-col rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl mf:rounded-bl-none  rounded-br-2xl mf:rounded-br-none w-full px-10 pb-10 pt-6 mf:relative mf:top-24">
      <div className="flex items-center justify-between w-full">
        <h1 className="dark:text-[#FCFCFC] text-[#10141A] font-bold md:text-lg text-xs">
          List of your NFT
        </h1>
        <div className="flex cursor-pointer items-center justify-center gap-2 border rounded-full  border-[#10141a1a]  dark:border-[#424242]  px-2 py-2 sm:px-3 sm:py-3">
          <div className="dark:bg-[#1D1E21]  bg-[#000000] px-1 py-1 rounded-full text-white dark:text-[#424242]">
            <FaSailboat />
          </div>
          <h3 className="dark:text-[#FCFCFC] text-[#10141A] sm:text-base text-xs font-medium">
            Sell your NFT
          </h3>
        </div>
      </div>
      <div className="mt-2">
        <CarOwnerCarousel callFrom="List Of NFT" />
      </div>
    </div>
  );
};

export default ListOfNft;
