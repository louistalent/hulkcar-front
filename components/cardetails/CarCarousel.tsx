import * as React from "react";
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
import Image from "next/image";

const CarCarousel = () => {
  return (
    <div className="relative">
      <Carousel className="w-full relative">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 w-full flex items-center justify-center">
                <Image
                  height={800}
                  width={1000}
                  src="/assets/car.png"
                  alt="car"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="bg-[#424242] hover:bg-primary" /> */}
        {/* <CarouselNext className="bg-[#424242]" /> */}
        <div className="absolute left-[45%] -bottom-16">
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
