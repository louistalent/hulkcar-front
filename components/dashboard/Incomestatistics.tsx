import React from "react";

const Incomestatistics = () => {
  return (
    <div>
      <div className="dark:bg-[#1D1E21] bg-white p-5 rounded-2xl flex flex-col gap-y-8">
        <h2
          className="text-2xl max-md:text-lg font-bold dark:text-gray-200 text-black whitespace-nowrap"
          aria-label="Statistical Total Performance"
        >
          Income statistics
        </h2>
        <div className="flex gap-6 flex-col justify-between items-stretch h-full ">
          <div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/510c4e3c2ed5c0b84544a053d34cac6766370981eb38635f84673bc8b277b369?apiKey=851b3b1857484826921ac8967993ad9f&"
              className="object-contain object-center mt-16 w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
              alt="Income statistics"
            />
          </div>
          <div>
            <div className="justify-center items-stretch self-center py-2 pr-9 pl-4 mt-16 text-sm font-bold leading-6 text-center whitespace-nowrap dark:bg-lime-400 bg-black rounded-[55px] dark:text-neutral-900 text-white max-md:pr-5 max-md:mt-10">
              Select the NFT
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <div className="flex flex-col flex-1 items-stretch p-2.5 border border-solid border-[color:var(--dark-gray-b4,#282C38)]">
                <div className="flex gap-5 justify-between items-stretch whitespace-nowrap">
                  <div className="text-xs dark:text-gray-500 text-black">Location</div>
                  <div className="text-sm dark:text-lime-400 text-black">France</div>
                </div>
                <div className="shrink-0 mt-1.5 h-px bg-gray-800" />
                <div className="flex gap-5 justify-between items-stretch mt-2">
                  <div className="text-xs dark:text-gray-500 text-black">Month Received</div>
                  <div className="text-sm dark:text-lime-400 text-black">
                    <span className="text-white">$</span>115
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col flex-1 items-stretch p-2.5 border border-solid border-[color:var(--dark-gray-b4,#282C38)]">
                <div className="flex gap-5 justify-between items-stretch">
                  <div className="text-xs dark:text-gray-500 text-black">Interest rate</div>
                  <div className="text-sm dark:text-white text-black">
                    5<span className="dark:text-white text-black">%</span>
                  </div>
                </div>
                <div className="shrink-0 mt-1.5 h-px bg-gray-800" />
                <div className="flex gap-5 justify-between items-stretch mt-2">
                  <div className="text-xs dark:text-gray-500 text-black">Total Received</div>
                  <div className="text-sm dark:text-lime-400 text-black">
                    <span className="text-white">$</span>750
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-semibold">
              Find all the statistics of your activity. You can choose an NFT
              individually.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incomestatistics;
