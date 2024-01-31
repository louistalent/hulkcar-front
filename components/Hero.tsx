import Image from "next/image";
import SoldOutIcon from "./cardetails/SoldOutIcon";

const Hero = () => {
  return (
    <div className="flex flex-col items-stretch sm:px-5 mb-20 mt-24">
      <div className="dark:text-[#FCFCFC] text-[#10141A] mf:text-5xl font-medium leading-[63.7px] w-full max-md:max-w-full max-md:text-3xl">
        Choose Mint Car{" "}
      </div>
      <div className="shadow-2xl backdrop-blur-[8.75px] w-full mt-12 mf:pl-9 px-2 mf:pr-14 mf:pt-12 mf:pb-5 py-2 rounded-3xl border-4 border-solid dark:border-[#2D2E31] border-[#C7C8C9] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col-reverse max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col mt-1 max-md:mt-10">
              <div className="items-stretch flex justify-between gap-4 max-md:hidden">
                <Image
                  src="/assets/logo-porsche.png"
                  width={40}
                  height={62}
                  alt="Car"
                  className="aspect-[0.65] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-[#10141A] dark:text-[#FCFCFC] text-3xl font-medium leading-10 grow whitespace-nowrap my-auto">
                  Porsche Tagra-4
                </div>
              </div>
              <CarDetail title="Manufacturer" value="Porsche" />
              <CarDetail title="Model" value="Tagra-4" />
              <CarDetail title="Kilometers" value="10.000" />
              <CarDetail title="Year" value="2023" />
              <CarDetail title="Country" value="USA" />

              <div className="dark:bg-[#424242] bg-[#10141A]/10 shrink-0 h-px mt-4" />
              <div className="justify-between items-stretch flex gap-5 text-base font-medium whitespace-nowrap mt-4">
                <div className="text-[#5B6169] dark:text-[#868686] leading-[140%]">Price</div>
                <div className="text-[#10141A)] dark:text-[#FCFCFC] text-right">$150.000</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch max-md:flex justify-between gap-4 hidden">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6979a8bf40783e383ca4b57ce6230658a0396998465ebd0c5f161f91e8a66af5?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6979a8bf40783e383ca4b57ce6230658a0396998465ebd0c5f161f91e8a66af5?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6979a8bf40783e383ca4b57ce6230658a0396998465ebd0c5f161f91e8a66af5?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6979a8bf40783e383ca4b57ce6230658a0396998465ebd0c5f161f91e8a66af5?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6979a8bf40783e383ca4b57ce6230658a0396998465ebd0c5f161f91e8a66af5?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6979a8bf40783e383ca4b57ce6230658a0396998465ebd0c5f161f91e8a66af5?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6979a8bf40783e383ca4b57ce6230658a0396998465ebd0c5f161f91e8a66af5?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6979a8bf40783e383ca4b57ce6230658a0396998465ebd0c5f161f91e8a66af5?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                className="aspect-[0.65] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-50 text-xl font-medium leading-10 grow whitespace-nowrap my-auto">
                Porsche Tagra-4
              </div>
            </div>

            <div
            className="relative"
            >
              <Image
              src="/assets/car.png"
              width={884}
              height={240}
              alt="Car"
              className="aspect-[3.7] object-contain object-center w-full overflow-hidden self-stretch my-auto max-md:max-w-full max-md:mt-10"
            />

            <div
            className="absolute top-0 z-10 left-[15%] max-md:left-[80%]"
            >
              <SoldOutIcon />

            </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const CarDetail = ({ title, value }: { title: string; value: string }) => (
  <div className="justify-between items-stretch flex gap-5 text-base font-medium whitespace-nowrap mt-3">
    <div className="text-[#10141A] dark:text-[#868686] leading-[140%]">
      {title}
    </div>
    <div className="text-[#5B6169] dark:text-[#fff] text-right leading-[140%]">
      {value}
    </div>
  </div>
);
