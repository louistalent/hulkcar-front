import React from "react";

const MonthlyRent = () => {
  return (
    <div className="dark:bg-[#262729] bg-[#EDEDED] flex-col rounded-tr-2xl rounded-tl-2xl w-full px-10 pb-10 pt-6 mf:relative mf:top-24">
      <header className="flex items-center justify-between w-full">
        <h1 className="dark:text-[#FCFCFC] font-bold md:text-lg text-xs">
          NFT Monthly Rent
        </h1>
        <h3 className="dark:text-[#FCFCFC] font-medium border rounded-full sm:text-base text-xs dark:border-[#424242] border-[#10141a1a] px-2 py-2 sm:px-3 sm:py-3"> ~$250 USDT = 1 %</h3>
      </header>
      <div className="mt-8">
        <p className="dark:text-[#868686] text-[#10141A text-sm text-start">
          By purchasing this NFT you become the lifetime owner of this car up to
          1%. You receive each month 1% of the profits of this rental paid
          directly in USDT on the Solana directly in your wallet. You will
          receive 1% of the price of this car at the time of the sale.
        </p>
      </div>
    </div>
  );
};

export default MonthlyRent;
