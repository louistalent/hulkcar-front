"use client";

import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CustomNext,
    CustomPrevious,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { DetailsDiv, SuccessfullyInvestedDiv } from "@/components/cardetails/InvestmentConfirmation";

const CarCarousel = () => {
    const [openSuccessfullyInvested, setOpenSuccessfullyInvested] = useState(false);
    const [formHeading, setFormHeading] = useState('Investment Confirmation');

    return (
        <div className="relative">
            <Carousel className="w-full relative">
                <CarouselContent className="z-10">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 w-full flex items-center justify-center flex-col">
                                <Dialog>
                                    <DialogTrigger>
                                        <Image
                                            height={800}
                                            width={1000}
                                            src="/assets/car.png"
                                            alt="car"
                                        />
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
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <Image
                    className="absolute top-[10%] z-0 w-full h-[300px]"
                    src="/assets/images/car-ellipse.svg"
                    alt="car"
                    width={100}
                    height={30}
                />
               
                {/* <CarouselPrevious className="bg-[#424242] hover:bg-primary" /> */}
                {/* <CarouselNext className="bg-[#424242]" /> */}
                <div className="w-[100px] m-auto relative top-3">
                    <div className="flex items-center justify-between bg-white dark:bg-[#2a2b2d] px-4 py-2 rounded-full gap-3">
                        <CustomPrevious>
                            <MdKeyboardArrowLeft className="text-2xl text-black dark:text-slate-50" />
                        </CustomPrevious>
                        <CustomNext>
                            <MdKeyboardArrowRight className="text-2xl text-black dark:text-slate-50" />
                        </CustomNext>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default CarCarousel;
