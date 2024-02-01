import { IoIosArrowRoundForward } from "react-icons/io";
import { Urbanist } from "next/font/google";
import { cn } from "@/lib/utils";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const urbanist = Urbanist({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div>
      <div
        className={cn(
          "bg-primary dark:bg-[#191A1D] flex flex-col items-stretch pt-12 pb-6 px-14 border-t-2 border-t-[#10141a26]  dark:border-t-zinc-800 border-solid max-md:px-5 overflow-hidden",
          urbanist.className
        )}
      >
        {/*  <div className="h-[2px] dark:bg-[#2F2F2F] bg-[#10141A1A] absolute bottom-0 w-full" /> */}
        <div className="items-center flex flex-col mt-1 pb-11 px-3.5 max-md:max-w-full relative">
          {/* <div className="h-[2px] dark:bg-[#2F2F2F] bg-[#10141A1A] absolute bottom-0 w-full" /> */}
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-1/2 md:w-full max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col mf:items-start items-center mf:text-start text-center max-md:mt-8">
                  <div className="flex items-stretch justify-between gap-3">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d9ffbf683991c2c7d2eaeb490ed94cbb7887e8459823cc0a490e08c5c7ca855a?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9ffbf683991c2c7d2eaeb490ed94cbb7887e8459823cc0a490e08c5c7ca855a?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9ffbf683991c2c7d2eaeb490ed94cbb7887e8459823cc0a490e08c5c7ca855a?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9ffbf683991c2c7d2eaeb490ed94cbb7887e8459823cc0a490e08c5c7ca855a?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9ffbf683991c2c7d2eaeb490ed94cbb7887e8459823cc0a490e08c5c7ca855a?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9ffbf683991c2c7d2eaeb490ed94cbb7887e8459823cc0a490e08c5c7ca855a?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9ffbf683991c2c7d2eaeb490ed94cbb7887e8459823cc0a490e08c5c7ca855a?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9ffbf683991c2c7d2eaeb490ed94cbb7887e8459823cc0a490e08c5c7ca855a?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                      className="aspect-[1.04] object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="dark:text-gray-200 text-black text-xl font-extrabold leading-7 grow shrink basis-auto">
                      Hulk Cars
                    </div>
                  </div>
                  <div className="justify-center text-[#5B6169] dark:text-neutral-400 text-sm leading-7 mt-5">
                    Hulk Cars is a UK company which owns a car sharing platform
                    and has its own fleet of drivers.
                  </div>
                  <div className="flex items-stretch justify-between gap-5 mt-8">
                    <SocialLinks link="#" icon={<FaFacebookF />} />
                    <SocialLinks link="#" icon={<FaTwitter />} />
                    <SocialLinks link="#" icon={<SlSocialYoutube />} />
                    <SocialLinks link="#" icon={<FaLinkedinIn />} />
                    <SocialLinks link="#" icon={<FaInstagram />} />
                    <SocialLinks link="#" icon={<FaGithub />} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center  w-1/2 md:w-full ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-center text-center text-sm text-[#5B6169] dark:text-neutral-400 pb-3 mf:items-start max-md:mt-7">
                  <div className="text-black dark:text-white text-xl font-semibold leading-7 self-stretch">
                    Additional Links
                  </div>
                  <div className="justify-center leading-[143%] mt-5">Home</div>
                  <div className="justify-center leading-[143%] mt-3">
                    Tokenomics
                  </div>
                  <div className="justify-center leading-[143%] mt-2.5">
                    Opensea
                  </div>
                  <Link
                    href="/faq"
                    className="justify-center leading-[143%] mt-5"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-1/2 md:w-full ml-5 max-md:w-full max-md:ml-0">
                <div className="mf:items-start flex flex-col items-center text-center text-sm text-[#5B6169] dark:text-neutral-400 whitespace-nowrap pr-4 py-px max-md:mt-7">
                  <div className="text-black dark:text-white text-xl font-semibold leading-7">
                    Documents
                  </div>
                  <div className="leading-7 mt-3">Whitepaper</div>
                  <div className="leading-7 mt-3">Privacy Policy</div>
                  <div className="leading-7 mt-3">Terms and Conditions</div>
                  <div className="leading-7 mt-3 flex flex-col">
                    <div className="text-black dark:text-white text-xl text-center mf:text-start font-semibold leading-7  mt-2.5">
                      Contact us
                    </div>
                    <div className="text-[#5B6169] dark:text-lime-400 text-sm leading-7 whitespace-nowrap  mt-3">
                      <span className="text-[#5B6169] dark:text-neutral-400 ">
                        You can contact us at:{" "}
                      </span>
                      <span className="text-black dark:text-lime-500">
                        mint@hulkcars.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-1/2 md:w-full  ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-center mf:items-start max-md:mt-7">
                  <div className="text-black dark:text-white text-xl font-semibold leading-7">
                    Subscribe
                  </div>
                  <div className="text-[#5B6169] dark:text-neutral-400 text-sm leading-7 whitespace-nowrap mt-3">
                    Will send you monthly updates.
                  </div>
                  <div className="dark:bg-transparent max-md:justify-evenly mt-3 bg-white  w-full border rounded-lg flex items-center flex-row relative">
                    <div className="px-2 py-3 w-4/5">
                      <input
                        type="text"
                        placeholder="Your e-mail..."
                        className="dark:bg-transparent bg-white outline-none text-black dark:text-white "
                        spellCheck="false"
                      />
                    </div>
                    <button className="h-full 2xl:w-20 w-fit text-black dark:text-white relative border-l">
                      <IoIosArrowRoundForward className="w-full text-3xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[2px] dark:bg-[#0c0c0c] bg-[#10141A1A]  bottom-0 w-full" /> */}
      <div
        className={cn(
          "bg-primary dark:bg-[#191A1D] flex flex-col items-stretch  px-14 border-t-2 border-t-[#10141a26]  dark:border-t-zinc-800 border-solid max-md:px-5 overflow-hidden",
          urbanist.className
        )}
      >
      <div className=" text-center text-gray-500 dark:text-[#9C9C9C] text-sm leading-7 self-center whitespace-nowrap mt-6">
        <span className="">© 2024 </span>
        <span className="text-[#10141A] dark:text-lime-500">Hulk Cars</span>
        <span className="">, All Rights Reserved</span>
      </div>
      </div>
    </div>
  );
};

export default Footer;

const SocialLinks = ({ link, icon }: { link: string; icon: any }) => (
  <Link href={link} className="text-zinc-500 text-sm text-center leading-7">
    {icon}
  </Link>
);
