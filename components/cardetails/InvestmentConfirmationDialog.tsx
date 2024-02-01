"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";

const InvestmentConfirmationDialog = () => {
  const [openSuccessfullyInvested, setOpenSuccessfullyInvested] =
    useState(false);
  const [formHeading, setFormHeading] = useState("Investment Confirmation");

  return (
    <div className="max-h-screen overflow-x-auto">
      <Dialog
      
      >
        <DialogTrigger className="dark:text-white text-black">
          Open Investment Confimation
        </DialogTrigger>
        <DialogContent className="bg-primary dark:bg-dark-primary border-none max-md:pointer-events-auto max-md:h-screen">
          <DialogHeader>
            <DialogTitle className="dark:text-slate-50 text-[#10141A] text-start">
              {formHeading}
            </DialogTitle>
            <DialogDescription>
              {!openSuccessfullyInvested ? (
                <div className="flex flex-col justify-center mt-3">
                  <DetailsDiv title="Car Name" value="Porsche Tiagra-4" />
                  <DetailsDiv
                    title="NFT Id"
                    value="Zoll Rs Spyder Roder-Gold #11"
                  />
                  <DetailsDiv title="Amount" value="$200 USDT" />
                  <DetailsDiv title="Return" value="Porsche Tiagra-4" />
                  <DetailsDiv title="Blockchain" value="Porsche Tiagra-4" />
                  <DetailsDiv title="Distribution" value="Porsche Tiagra-4" />
                  <DetailsDiv
                    title="Financial Instrument"
                    value="Porsche Tiagra-4"
                  />
                  <DetailsDiv title="Issuer" value="Porsche Tiagra-4" />
                  <DetailsDiv title="Payment Method" value="Porsche Tiagra-4" />
                  <DetailsDiv title="Payment Time" value="Porsche Tiagra-4" />

                  <div className="flex justify-between items-center dark:bg-[#3d4252] bg-[#fff] px-2 py-2 rounded-lg mt-6">
                    <p className="dark:text-slate-50 text-[#10141A] font-light">
                      HULK LTD - Terms & condition
                    </p>
                    <button className="bg-lime-400 sm:text-base text-sm text-black px-2 py-2 rounded-lg font-semibold flex items-center justify-center gap-3">
                      <PiDownloadSimpleBold />
                      <p>Download</p>
                    </button>
                  </div>

                  <div className="flex flex-col mt-8 justify-start">
                    <form>
                      <div className="flex items-center justify-center gap-2">
                        <div className="inline-flex items-center">
                          <label
                            className="relative flex items-center p-3 rounded-full cursor-pointer"
                            htmlFor="checkbox"
                          >
                            <input
                              type="checkbox"
                              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md  border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-none checked:bg-lime-400  border border-black"
                              id="checkbox"
                            />
                            <span className="absolute dark:text-white text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5 fill-bg-[#E7E8E8]"
                                viewBox="0 0 20 20"
                                // fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </label>
                        </div>
                        <label
                          htmlFor="agree"
                          className="dark:text-slate-50 text-black text-xs"
                        >
                          By confirming you agree to the{" "}
                          <span className="dark:text-lime-400 text-black">term</span> if company
                          and accept them hereby
                        </label>
                      </div>
                    </form>
                  </div>

                  <button
                    onClick={() => {
                      setFormHeading("");
                      setOpenSuccessfullyInvested(true);
                    }}
                    className="dark:bg-lime-400 bg-black text-white px-3 py-5 rounded-full dark:text-black font-semibold mt-10"
                  >
                    Mint NFT
                  </button>
                </div>
              ) : (
                <SuccessfullyInvestedDiv />
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InvestmentConfirmationDialog;

const DetailsDiv = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex justify-between items-center dark:bg-[#3d4252] bg-[#fff] px-2 py-2 rounded-lg mt-2">
      <p className="dark:text-slate-50 text-black font-light">{title}</p>
      <p
        className={`font-medium ${
          title === "Amount" ? "text-lime-400" : "dark:text-slate-50 text-black"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

const SuccessfullyInvestedDiv = () => (
  <div className="flex items-center justify-center py-10">
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-center">
        <label
          className="relative flex items-center p-3 rounded-full cursor-pointer"
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            className="before:content[''] peer relative h-20 w-20 cursor-pointer appearance-none rounded-full border-2 border-slate-50 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-slate-50 dark:checked:bg-lime-400 checked:bg-black"
            id="checkbox"
            checked
            disabled
          />
          <span className="absolute text-white dark:text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <h1 className="text-3xl text-center font-semibold text-black dark:text-lime-400 my-4">
        Successfully Invested 
      </h1>
      <p className="text-center text-[#5B6169] dark:text-slate-50">You Have Just Recieved Your NFT In Your Wallet On The Solana Network. You Can Sell Your NFT At Any Time On The Secondary market.</p>
    </div>
  </div>
);
