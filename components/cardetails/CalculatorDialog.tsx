"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { IoCalculatorOutline } from "react-icons/io5";

const CalculatorDialog = () => {
  const [estimateAmountOpen, setEstimateAmountOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
      <IoCalculatorOutline className="h-[24px] cursor-pointer w-[24px] text-black dark:text-[#868686]"/>
      </DialogTrigger>
      <DialogContent className="bg-primary dark:bg-dark-primary border-none">
        <DialogHeader>
          <DialogTitle className="dark:text-slate-50 text-black text-start">
            Calculator
          </DialogTitle>
          <DialogDescription>
            {!estimateAmountOpen && (
              <div className="flex flex-col justify-center mt-3">
                <div>
                  <label className="dark:text-zinc-500 text-[#5B6169] text-sm font-medium leading-5 mt-5 max-md:max-w-full flex justify-start">
                    Amount Invested
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm flex items-center justify-center gap-2 dark:bg-[#2e2f32] bg-[#F6F6F6] px-3 py-2">
                    <span className="dark:text-slate-50 text-[#10141A]">$</span>
                    <input
                      type="number"
                      className="dark:bg-transparent bg-[#F6F6F6] outline-none dark:text-slate-50 text-[#10141A]  block w-full sm:text-sm  rounded-md"
                      placeholder="250.00"
                    />
                  </div>
                </div>

                <div className="flex sm:items-center sm:flex-row sm:justify-between flex-col gap-4">
                  <div className="flex-1">
                    <label className="dark:text-zinc-500 text-[#5B6169] text-sm font-medium leading-5 mt-5 max-md:max-w-full flex justify-start">
                      Rent
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm flex items-center justify-center gap-2 dark:bg-[#2e2f32] bg-[#F6F6F6] px-3 py-2">
                      <span className="dark:text-slate-50 text-[#10141A]">$</span>
                      <input
                        type="number"
                        className="dark:bg-transparent bg-[#F6F6F6] outline-none dark:text-slate-50 text-[#10141A] block w-full sm:text-sm  rounded-md"
                        placeholder="250.00"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="dark:text-zinc-500 text-[#5B6169]  text-sm font-medium leading-5 mt-5 max-md:max-w-full flex justify-start">
                      Terms
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <select
                        name="durations"
                        id="durations"
                        className="dark:bg-[#2e2f32] bg-[#F6F6F6] outline-none dark:text-slate-50 text-[#10141A] px-3 py-2 block w-full sm:text-sm rounded-md"
                      >
                        <option value="1 Month">1 Month</option>
                        <option value="2 Month">2 Month</option>
                        <option value="3 Month">3 Month</option>
                        <option value="4 Month">4 Month</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  className="dark:text-stone-900 text-sm font-medium leading-5 justify-center items-stretch shadow-sm dark:bg-lime-400 bg-black text-white mt-5 px-4 py-2.5 rounded-full self-start"
                  type="submit"
                  onClick={()=>setEstimateAmountOpen(true)}
                >
                  Estimate
                </button>
              </div>
            )}

            {estimateAmountOpen && (
              <div className="flex flex-col justify-center mt-3">
                <div>
                  <label className="dark:text-zinc-500 text-[#5B6169] text-sm font-medium leading-5 mt-5 max-md:max-w-full flex justify-start">
                    Estimate Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm flex items-center justify-center gap-2 dark:bg-[#2e2f32] bg-[#F6F6F6] px-3 py-2">
                    <span className="dark:text-slate-50 text-[#10141A]">$</span>
                    <input
                      type="number"
                      className="dark:bg-transparent bg-[#F6F6F6] outline-none dark:text-slate-50 text-[#10141A] block w-full sm:text-sm  rounded-md"
                      placeholder="250.00"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="dark:text-stone-900 text-sm font-medium leading-5 justify-center items-stretch shadow-sm dark:bg-lime-400 bg-black text-white mt-5 px-4 py-2.5 rounded-md self-start"
                      type="submit"
                      onClick={() => setEstimateAmountOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="dark:text-stone-900 text-sm font-medium leading-5 justify-center items-stretch shadow-sm dark:bg-lime-400 bg-black text-white mt-5 px-4 py-2.5 rounded-md self-start"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CalculatorDialog;
