import CarDetail from "@/components/dashboard/CarDetail";
import Income from "@/components/dashboard/Income";
import IncomesView from "@/components/dashboard/IncomesView";
import Incomestatistics from "@/components/dashboard/Incomestatistics";
import MyNFT from "@/components/dashboard/MyNFT";
import NameOfNft from "@/components/dashboard/NameOfNft";
import RentedCar from "@/components/dashboard/RentedCar";
import Services from "@/components/dashboard/Services";
import StatisticalTotalPerformance from "@/components/dashboard/StatisticalTotalPerformance";
import Weather from "@/components/dashboard/Weather";
import HistoryTable from "@/components/dashboard/table/HistoryTable";
import React from "react";
// import Image from "next/image";

const page = () => {
  return (
    <section className="min-h-screen overflow-x-hidden mf:p-10 px-3 py-10 bg-[#FFFFFF] dark:bg-[#141518]">
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-6 mt-16">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <RentedCar />
            </div>
            <div className="flex flex-col h-full justify-between gap-6">
              <div>
                <NameOfNft />
              </div>
              <div>
                <Weather />
              </div>
              <div>
                <Services />
              </div>
            </div>
          </div>
          <div className="h-full">
            <Income />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <CarDetail />
          </div>
          <div>
            <MyNFT />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <HistoryTable />
      </div>
      <div className="mt-8 ">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
          <div>
            <StatisticalTotalPerformance />
          </div>
          <div>
            <Incomestatistics />
          </div>
          <div className="flex flex-col gap-6 justify-between">
            <IncomesView name="Monthly Income" />
            <IncomesView name="Quarterly Income" />
            <IncomesView name="Annual Income" />
          </div>
        </div>
      </div>
      <div className="mt-8 mb-10">
        <div className="px-3">
          {/* <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e55999636249efc8b7a1fc31c345c54aa76108363b3558f1fa6311e0e9cf7a44?apiKey=851b3b1857484826921ac8967993ad9f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e55999636249efc8b7a1fc31c345c54aa76108363b3558f1fa6311e0e9cf7a44?apiKey=851b3b1857484826921ac8967993ad9f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e55999636249efc8b7a1fc31c345c54aa76108363b3558f1fa6311e0e9cf7a44?apiKey=851b3b1857484826921ac8967993ad9f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e55999636249efc8b7a1fc31c345c54aa76108363b3558f1fa6311e0e9cf7a44?apiKey=851b3b1857484826921ac8967993ad9f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e55999636249efc8b7a1fc31c345c54aa76108363b3558f1fa6311e0e9cf7a44?apiKey=851b3b1857484826921ac8967993ad9f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e55999636249efc8b7a1fc31c345c54aa76108363b3558f1fa6311e0e9cf7a44?apiKey=851b3b1857484826921ac8967993ad9f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e55999636249efc8b7a1fc31c345c54aa76108363b3558f1fa6311e0e9cf7a44?apiKey=851b3b1857484826921ac8967993ad9f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e55999636249efc8b7a1fc31c345c54aa76108363b3558f1fa6311e0e9cf7a44?apiKey=851b3b1857484826921ac8967993ad9f&"
            className="object-contain object-center w-full aspect-[2.33]"
          /> */}
          <iframe src="https://www.google.com/maps/d/embed?mid=18LZ4L4OGy3yxoDS5qnBcF-LFA7iYBgg&ehbc=2E312F"  
           frameBorder="0"
           allowFullScreen
            className="w-full h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
