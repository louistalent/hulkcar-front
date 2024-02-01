"use client";
import * as React from "react";
import Card from "@/components/Card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);



  React.useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() );

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() );
    });
  }, [api]);

  return (
    <div
    className="mx-14 "
    >

    <Carousel
      // opts={{
      //   align: "start",
      // }}
      setApi={setApi}
      
      className="w-full"
      >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3  xl:basis-1/5 py-10"
      
          >
            <Card isHighlighted={current+2 === index} 
            soldOut={  index === 3}
            
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious 
      className="bg-[#F6F6F6] dark:bg-[#2A2B2D] hover:bg-primary dark:hover:bg-dark-primary"
      />
      <CarouselNext className="bg-[#F6F6F6] dark:bg-[#2A2B2D]"/>
    </Carousel>
        </div>
  );
}

