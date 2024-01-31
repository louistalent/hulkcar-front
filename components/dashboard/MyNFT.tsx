const MyNFT = () => {
  return (
    <div className="flex flex-col py-3 xl:py-6 xl:px-5 rounded-lg dark:border-none border border-[#F1F1F1] dark:bg-[#1D1F25] px-3">
      <div className="dark:text-white text-black font-bold text-base  leading-6 whitespace-nowrap">
        My NFTs
      </div>
      <div className="text-slate-500 text-sm leading-5 whitespace-nowrap mt-1">
        Here is the list of all your Hulk Cars NFTs
      </div>
      <div className="grid grid-cols-3 gap-2.5 mt-2 pr-1.5">
        {myNFTs.map((nft, index) => (
          <div key={index} className="items-stretch flex flex-col px-5 flex-1">
            <img
              loading="lazy"
              srcSet={nft.srcSet}
              className="aspect-[1.01] object-contain object-center w-[84px] self-center"
            />
            <p className="dark:text-[#FCFCFC] text-center text-xs leading-4 mt-4">
              {nft.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNFT;

const myNFTs = [
  {
    srcSet: "/assets/dashboard/carwheel.png",
    name: "Zoll Rs Spyder Roder - 0.10%",
  },
  {
    srcSet: "/assets/dashboard/carwheel.png",
    name: "Zoll Rs Spyder Roder - 0.10%",
  },
  {
    srcSet: "/assets/dashboard/carwheel.png",
    name: "Zoll Rs Spyder Roder - 0.10%",
  },
  {
    srcSet: "/assets/dashboard/carwheel.png",
    name: "Zoll Rs Spyder Roder - 0.10%",
  },
  {
    srcSet: "/assets/dashboard/carwheel.png",
    name: "Zoll Rs Spyder Roder - 0.10%",
  },
  {
    srcSet: "/assets/dashboard/carwheel.png",
    name: "Zoll Rs Spyder Roder - 0.10%",
  },
  {
    srcSet: "/assets/dashboard/carwheel.png",
    name: "Zoll Rs Spyder Roder - 0.10%",
  },
  {
    srcSet: "/assets/dashboard/carwheel.png",
    name: "Zoll Rs Spyder Roder - 0.10%",
  },
  {
    srcSet: "/assets/dashboard/carwheel.png",
    name: "Zoll Rs Spyder Roder - 0.10%",
  },
];
