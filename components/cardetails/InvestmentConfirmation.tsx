"use client";

export const DetailsDiv = ({ title, value }: { title: string; value: string }) => {
    return (
        <div className="flex justify-between items-center dark:bg-[#3d4252] bg-[#fff] px-2 py-2 rounded-lg mt-2">
            <p className="dark:text-slate-50 text-black font-light">{title}</p>
            <p
                className={`font-medium ${title === "Amount" ? "text-lime-400" : "dark:text-slate-50 text-black"}`}
            >
                {value}
            </p>
        </div>
    );
};

export const SuccessfullyInvestedDiv = () => (
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
