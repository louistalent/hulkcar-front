import CalculatorDialog from "@/components/cardetails/CalculatorDialog";
import CarCarousel from "@/components/cardetails/CarCarousel";
import InvestmentConfirmationDialog from "@/components/cardetails/InvestmentConfirmationDialog";
import ListOfNft from "@/components/cardetails/ListOfNft";
import MonthlyRent from "@/components/cardetails/MonthlyRent";
import NameDropDown from "@/components/cardetails/NameDropDown";
import NftCarOwner from "@/components/cardetails/NftCarOwner";

const page = () => {
  return (
    <section className="min-h-screen overflow-x-hidden mf:px-10 mf:pt-10 px-3 pt-4 pb-0 bg-primary dark:bg-dark-primary">
      <div className="sm:px-5 mb-7 mt-20">
        <p className="text-slate-500">Home {">"} Mint NFT</p>
      </div>
      <div className="flex items-center justify-between px-3 mf:p-6 ">
        <NameDropDown />
      </div>
      {/* <div className="md:w-1/2  bg-primary max-h-[400px] overflow-y-auto z-10 absolute rounded-lg"><Dialog/></div> */}
      <div className="relative mt-20 mb-32">
        <CarCarousel />
      </div>

      <InvestmentConfirmationDialog/>

      <div className="mf:hidden flex flex-row justify-between gap-2">
        <h1 className="text-2xl text-[#10141A] dark:text-[#FCFCFC]">$150.000</h1>
        <h3 className="text-[#5B6169] dark:text-[#868686] text-base">+$445.8900 Fees</h3>
      </div>

      <div className="grid  mf:grid-cols-3 grid-cols-1 mt-16 mf:mt-20 gap-5 md:overflow-y-hidden">
        <MonthlyRent/>
        <NftCarOwner />
        <ListOfNft />
      </div>
    </section>
  );
};

export default page;
