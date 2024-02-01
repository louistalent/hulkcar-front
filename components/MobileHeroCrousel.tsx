"use client";
import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@/components/Card";

const MobileHeroCrousel = () => {
  const [current, setCurrent] = React.useState(2);
  console.log(current, "current");

  return (
    <div className="mx-1">
      <Slider
        arrows={false}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode={true}
        centerPadding="94px"
        initialSlide={2}
        afterChange={(current) => setCurrent(current)}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="mx-1">
            {/* index: {index} */}
            <Card 
            isHighlighted={current === index}
            soldOut={index === 4}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileHeroCrousel;
