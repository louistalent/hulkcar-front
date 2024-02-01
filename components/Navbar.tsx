"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import CalculatorDialog from "./cardetails/CalculatorDialog";

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <div
      className={cn(
        "w-full pe-2  mf:px-4 py-4 fixed top-0 z-50",
        pathname === "/dashboard" || pathname === "/faq"
          ? "dark:bg-[#141518] bg-[#FFFFFF]"
          : "bg-primary dark:bg-dark-primary"
      )}
    >
      <div className="flex items-stretch justify-between gap-5 max-md:flex-wrap">
        <div className="flex items-center sm:items-stretch justify-between gap-3 sm:gap-5 px-5 max-xsm:pr-0">
          {!openMenu ? (
            <button
              onClick={() => setOpenMenu(true)}
              className="text-slate-300 mf:hidden transition-transform duration-300 transform hover:scale-105 focus:outline-none"
            >
              <GiHamburgerMenu className="h-[25px] max-xsm:w-4 max-xsm:h-4 w-[25px] text-black dark:text-white" />
            </button>
          ) : (
            <button
              onClick={() => setOpenMenu(false)}
              className="text-slate-300 mf:hidden transition-transform duration-300 transform hover:scale-105 focus:outline-none"
            >
              <MdOutlineClose className="h-[30px] w-[30px] text-black dark:text-white" />
            </button>
          )}

          <Link
            href="/"
            className="items-center justify-center flex gap-4 max-xsm:gap-0.5"
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
              className="aspect-[1.04] object-contain object-center sm:w-[55px] w-[30px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="dark:text-gray-100 text-black  sm:text-3xl text-lg max-xsm:font-semibold font-bold leading-10 grow shrink basis-auto my-auto">
              Hulk Cars
            </div>
          </Link>
        </div>
        <div className="xl:block hidden">
          <div className="items-stretch flex justify-between gap-5 px-5 me-10">
            <Link
              href="/"
              className={cn(
                pathname === "/cardetail" || pathname === "/"
                  ? "text-zinc-50 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch bg-black dark:bg-transparent border border-[#424242] px-6 py-3 rounded-[51px] border-solid max-md:px-5"
                  : "text-zinc-500 px-6 py-3 cursor-pointer text-base font-semibold leading-6 my-auto"
              )}
            >
              Mint NFT
            </Link>
            <Link
              href="/dashboard"
              className={cn(
                pathname === "/dashboard"
                  ? "text-zinc-50 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch bg-black dark:bg-transparent border border-[#424242] px-6 py-3 rounded-[51px] border-solid max-md:px-5"
                  : "text-zinc-500 px-6 py-3 cursor-pointer text-base font-semibold leading-6 my-auto"
              )}
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="mf:flex  hidden justify-between gap-5 self-start items-start max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch xl:hidden flex justify-between gap-5 px-5 me-10">
            <Link
              href="/"
              className={cn(
                pathname === "/cardetail" || pathname === "/"
                  ? "text-zinc-50 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch bg-black dark:bg-transparent border border-[#424242] px-6 py-3 rounded-[51px] border-solid max-md:px-5"
                  : "text-zinc-500 px-6 py-3 cursor-pointer text-base font-semibold leading-6 my-auto"
              )}
            >
              Mint NFT
            </Link>
            <Link
              href="/dashboard"
              className={cn(
                pathname === "/dashboard"
                  ? "text-zinc-50 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch bg-black dark:bg-transparent border border-[#424242] px-6 py-3 rounded-[51px] border-solid max-md:px-5"
                  : "text-zinc-500 px-6 py-3 cursor-pointer text-base font-semibold leading-6 my-auto"
              )}
            >
              Dashboard
            </Link>
          </div>
          <div className="justify-end items-stretch flex gap-3 max-md:max-w-full max-md:flex-wrap">
            <div className="flex bg-[#F6F6F6] dark:bg-[#2A2B2D] gap-2 px-2  rounded-full">
              {/* Light Mode */}
              <button
                onClick={() => setTheme("light")}
                className={cn(
                  "dark:text-white text-black  p-2 cursor-pointer text-base font-semibold leading-6 my-auto",
                  theme !== "light" && "opacity-50"
                )}
              >
                <div className="bg-[#E5E5E5] dark:bg-[#2A2B2D] rounded-full px-1 py-1 cursor-pointer">
                  <Sun className="h-[24px] w-[24px] text-black dark:text-[#868686]" />
                </div>
              </button>
              {/* Dark Mode */}
              <button
                onClick={() => setTheme("dark")}
                className={cn(
                  "dark:text-white text-black  p-2  cursor-pointer text-base font-semibold leading-6 my-auto",
                  theme !== "dark" && "opacity-50"
                )}
              >
                <div className="px-1 py-1 dark:bg-[#868686] rounded-full cursor-pointer">
                  <Moon className="h-[24px] w-[24px] " />
                </div>
              </button>
            </div>
            <div className="justify-end items-center flex gap-1.5 pe-5">
              <div className="dark:bg-[#2A2B2D] bg-[#F7F7F7] px-3 py-3 rounded-full cursor-pointer">
                <FaWhatsapp className="h-[24px] w-[24px] dark:text-[#868686] text-black" />
              </div>
              <div className="dark:bg-[#2A2B2D] bg-[#F7F7F7] flex items-center justify-center px-3 py-3 rounded-full cursor-pointer">
                <CalculatorDialog />
              </div>
              <w3m-button />
              <div className="dark:bg-[#2A2B2D] bg-[#F7F7F7] px-3 py-3 rounded-full relative cursor-pointer">
                <span className="bg-green-600 text-slate-50 px-1 text-xs rounded-full absolute top-0 right-0">
                  2
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_66_7473)">
                    <path
                      d="M0.388672 0.624837V1.24984H1.67773H2.9668L3.02148 1.46077C3.04492 1.58577 3.62305 3.99984 4.29492 6.83577L5.52148 11.992L5.31836 12.117C4.74023 12.4842 4.45117 13.0311 4.45117 13.7655C4.45117 14.3436 4.63086 14.7733 5.00586 15.1326C5.55273 15.6483 5.20117 15.6248 12.1855 15.6248H18.5137V14.9998V14.3748H12.459C5.85742 14.3748 5.91992 14.3748 5.81055 13.953C5.78711 13.8436 5.78711 13.6561 5.81055 13.5467C5.91992 13.117 5.84961 13.1248 12.5918 13.1248H18.7949L19.498 7.82796L20.2012 2.5389L12.4199 2.51546L4.63867 2.49984L4.34961 1.24984L4.05273 -0.000163078H2.2168H0.388672V0.624837ZM8.82617 5.46859V7.18734L7.28711 7.17171L5.74023 7.14827L5.60742 6.56234C5.53711 6.24202 5.34961 5.4764 5.20898 4.85921L4.94336 3.74984H6.88086H8.82617V5.46859ZM14.1387 5.46859V7.18734H12.1074H10.0762V5.46859V3.74984H12.1074H14.1387V5.46859ZM18.6699 3.80452C18.6699 3.84359 18.5762 4.61702 18.459 5.52327L18.2402 7.18734H16.8184H15.3887V5.46859V3.74984H17.0293C17.9355 3.74984 18.6699 3.77327 18.6699 3.80452ZM8.82617 10.1561V11.8748H7.84961H6.88086L6.80273 11.578C6.63867 10.9608 6.0918 8.60921 6.0918 8.52327C6.0918 8.46077 6.48242 8.43734 7.45898 8.43734H8.82617V10.1561ZM14.1387 10.1561V11.8748H12.1074H10.0762V10.1561V8.43734H12.1074H14.1387V10.1561ZM18.0449 8.49202C18.0449 8.53109 17.9512 9.30452 17.834 10.2108L17.6152 11.8748H16.5059H15.3887V10.1561V8.43734H16.7168C17.4512 8.43734 18.0449 8.46077 18.0449 8.49202Z"
                      // fill="#868686"
                      className="dark:fill-[#C7C8CA] fill-black"
                    />
                    <path
                      d="M7.06836 16.3984C6.38867 16.7109 6.01367 17.3359 6.01367 18.1406C6.02148 19.25 6.77148 20 7.88867 20C9.01367 20 9.76367 19.25 9.76367 18.125C9.76367 17.3125 9.34961 16.6641 8.6543 16.375C8.24805 16.2031 7.45898 16.2188 7.06836 16.3984ZM8.2793 17.7344C8.61523 18.0703 8.36523 18.6719 7.88867 18.6719C7.5918 18.6719 7.3418 18.4219 7.3418 18.125C7.3418 17.8281 7.5918 17.5781 7.88867 17.5781C8.02148 17.5781 8.19336 17.6484 8.2793 17.7344Z"
                      // fill="#868686"
                      className="dark:fill-[#C7C8CA] fill-black"
                    />
                    <path
                      d="M15.5059 16.3984C14.8262 16.7109 14.4512 17.3359 14.4512 18.1406C14.459 19.25 15.209 20 16.3262 20C17.4512 20 18.2012 19.25 18.2012 18.125C18.2012 17.3125 17.7871 16.6641 17.0918 16.375C16.6855 16.2031 15.8965 16.2188 15.5059 16.3984ZM16.7168 17.7344C17.0527 18.0703 16.8027 18.6719 16.3262 18.6719C16.0293 18.6719 15.7793 18.4219 15.7793 18.125C15.7793 17.8281 16.0293 17.5781 16.3262 17.5781C16.459 17.5781 16.6309 17.6484 16.7168 17.7344Z"
                      // fill="#868686"
                      className="dark:fill-[#C7C8CA] fill-black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_66_7473">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.388672)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}

        <div className="mf:hidden">
          <w3m-button />
        </div>
      </div>
      <div
        className={cn(
          "mf:hidden transition-all duration-300 ease-in-out transform fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#141518] z-50 rounded-lg",
          openMenu ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div
          className="absolute -top-2 right-0 mt-5 mr-5 cursor-pointer z-50"
          onClick={() => setOpenMenu(false)}
        >
          <X className="h-[30px] w-[30px] text-black dark:text-white" />
        </div>
        <div className="mf:hidden flex flex-col justify-start text-white mb-3 py-3  absolute left-0 z-10 right-0 bg-primary dark:bg-dark-primary h-screen">
          <div className="flex items-center flex-row justify-between mt-8">
            <div className="flex items-center px-3 ">
              <Link
                href="/"
                className="items-center justify-center flex gap-4 max-xsm:gap-0.5"
              >
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                  className="aspect-[1.04] object-contain object-center sm:w-[55px] w-[30px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="dark:text-gray-100 text-black  sm:text-3xl text-lg max-xsm:font-semibold font-bold leading-10 grow shrink basis-auto my-auto">
                  Hulk Cars
                </div>
              </Link>
            </div>
            <div className="justify-end items-center flex gap-1.5 pe-5">
              <div className="dark:bg-[#2A2B2D] bg-[#F7F7F7] px-3 py-3 rounded-full cursor-pointer">
                <FaWhatsapp className="h-[24px] w-[24px] dark:text-[#868686] text-black" />
              </div>
              <div className="dark:bg-[#2A2B2D] bg-[#F7F7F7] px-3 py-3 flex items-center justify-center rounded-full cursor-pointer">
                <CalculatorDialog />
              </div>
              <div className="dark:bg-[#2A2B2D] bg-[#F7F7F7] px-3 py-3 rounded-full relative cursor-pointer">
                <span className="bg-green-600 text-slate-50 px-1 text-xs rounded-full absolute top-0 right-0">
                  2
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_66_7473)">
                    <path
                      d="M0.388672 0.624837V1.24984H1.67773H2.9668L3.02148 1.46077C3.04492 1.58577 3.62305 3.99984 4.29492 6.83577L5.52148 11.992L5.31836 12.117C4.74023 12.4842 4.45117 13.0311 4.45117 13.7655C4.45117 14.3436 4.63086 14.7733 5.00586 15.1326C5.55273 15.6483 5.20117 15.6248 12.1855 15.6248H18.5137V14.9998V14.3748H12.459C5.85742 14.3748 5.91992 14.3748 5.81055 13.953C5.78711 13.8436 5.78711 13.6561 5.81055 13.5467C5.91992 13.117 5.84961 13.1248 12.5918 13.1248H18.7949L19.498 7.82796L20.2012 2.5389L12.4199 2.51546L4.63867 2.49984L4.34961 1.24984L4.05273 -0.000163078H2.2168H0.388672V0.624837ZM8.82617 5.46859V7.18734L7.28711 7.17171L5.74023 7.14827L5.60742 6.56234C5.53711 6.24202 5.34961 5.4764 5.20898 4.85921L4.94336 3.74984H6.88086H8.82617V5.46859ZM14.1387 5.46859V7.18734H12.1074H10.0762V5.46859V3.74984H12.1074H14.1387V5.46859ZM18.6699 3.80452C18.6699 3.84359 18.5762 4.61702 18.459 5.52327L18.2402 7.18734H16.8184H15.3887V5.46859V3.74984H17.0293C17.9355 3.74984 18.6699 3.77327 18.6699 3.80452ZM8.82617 10.1561V11.8748H7.84961H6.88086L6.80273 11.578C6.63867 10.9608 6.0918 8.60921 6.0918 8.52327C6.0918 8.46077 6.48242 8.43734 7.45898 8.43734H8.82617V10.1561ZM14.1387 10.1561V11.8748H12.1074H10.0762V10.1561V8.43734H12.1074H14.1387V10.1561ZM18.0449 8.49202C18.0449 8.53109 17.9512 9.30452 17.834 10.2108L17.6152 11.8748H16.5059H15.3887V10.1561V8.43734H16.7168C17.4512 8.43734 18.0449 8.46077 18.0449 8.49202Z"
                      className="dark:fill-[#C7C8CA] fill-black"
                    />
                    <path
                      d="M7.06836 16.3984C6.38867 16.7109 6.01367 17.3359 6.01367 18.1406C6.02148 19.25 6.77148 20 7.88867 20C9.01367 20 9.76367 19.25 9.76367 18.125C9.76367 17.3125 9.34961 16.6641 8.6543 16.375C8.24805 16.2031 7.45898 16.2188 7.06836 16.3984ZM8.2793 17.7344C8.61523 18.0703 8.36523 18.6719 7.88867 18.6719C7.5918 18.6719 7.3418 18.4219 7.3418 18.125C7.3418 17.8281 7.5918 17.5781 7.88867 17.5781C8.02148 17.5781 8.19336 17.6484 8.2793 17.7344Z"
                      className="dark:fill-[#C7C8CA] fill-black"
                    />
                    <path
                      d="M15.5059 16.3984C14.8262 16.7109 14.4512 17.3359 14.4512 18.1406C14.459 19.25 15.209 20 16.3262 20C17.4512 20 18.2012 19.25 18.2012 18.125C18.2012 17.3125 17.7871 16.6641 17.0918 16.375C16.6855 16.2031 15.8965 16.2188 15.5059 16.3984ZM16.7168 17.7344C17.0527 18.0703 16.8027 18.6719 16.3262 18.6719C16.0293 18.6719 15.7793 18.4219 15.7793 18.125C15.7793 17.8281 16.0293 17.5781 16.3262 17.5781C16.459 17.5781 16.6309 17.6484 16.7168 17.7344Z"
                      className="dark:fill-[#C7C8CA] fill-black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_66_7473">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.388672)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="dark:bg-[#2A2B2D] bg-[#F7F7F7] rounded-full px-1 py-1 cursor-pointer">
                <Sun className="h-[24px] w-[24px] text-black dark:text-[#868686]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-evenly h-full">
            <div className="flex flex-col justify-evenly">
              <MobileLinks
                src="/assets/images/NFT.svg"
                link="/"
                link2="/dashboard"
                title="Mint NFT"
                alt="Mint NFT"
              />
              <MobileLinks
                src="/assets/images/Category.svg"
                link="/dashboard"
                link2="/"
                title="Dashboard"
                alt="Dashboard"
              />
              <MobileLinks
                src="/assets/images/analy.svg"
                link="#"
                link2="#"
                title="My NFT"
                alt="My NFT"
              />
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl text-[#525252] font-semibold px-3 my-3">
                Legal
              </h3>
              <div>
                <MobileLinks
                  src="/assets/images/contract.svg"
                  link="#"
                  link2="#"
                  title="Contract"
                  alt="Contract"
                />
                <MobileLinks
                  src="/assets/images/Category.svg"
                  link="#"
                  link2="#"
                  title="FAQ"
                  alt="Faq"
                />
              </div>
            </div>

            {/* support */}
            <div>
              <h3 className="text-xl text-[#525252] font-semibold px-3 my-3">
                Support
              </h3>
              <div>
                <MobileLinks
                  src="/assets/images/Support.svg"
                  link="#"
                  link2="#"
                  title="Support@hulkcars.com"
                  alt="Support"
                />
                <MobileLinks
                  src="/assets/images/Facebook.svg"
                  link="#"
                  link2="#"
                  title="Facebook"
                  alt="facebook"
                />
                <MobileLinks
                  src="/assets/images/Twitter.svg"
                  link="#"
                  link2="#"
                  title="Twitter"
                  alt="Twitter"
                />
                <MobileLinks
                  src="/assets/images/Medium.svg"
                  link="#"
                  link2="#"
                  title="Medium"
                  alt="Medium"
                />
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="bg-[#ECECEC] dark:bg-[#282C38] relative top-3 rounded-br-3xl rounded-bl-3xl">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-start py-5 relative">
                <Image
                  src="/assets/images/logo.png"
                  height={80}
                  width={80}
                  alt="user Image"
                  className="rounded-full object-contain"
                />
                <div className="relative">
                  <Image
                    src="/assets/images/Morecircle.svg"
                    alt="options"
                    height={6}
                    width={20}
                    className="absolute bottom-1/2 right-0"
                  />

                  <h3 className="capitalize text-gray-500">Numanzafar</h3>
                  <p className="text-gray-500">numanzafar996@gamil.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileLinks = ({
  link,
  title,
  src,
  alt,
  link2,
}: {
  link: string;
  title: string;
  src: string;
  alt: string;
  link2: string;
}) => {
  const pathname = usePathname();
  return (
    <div
      className={` flex items-center justify-start py-1 px-6 cursor-pointer ${
        pathname === link ? "bg-[#7c8292]" : " bg-transparent"
      }`}
    >
      <Image src={src} alt={alt} height={24} width={24} />

      <Link
        href={link}
        className={cn(
          pathname === link
            ? "text-white text-lg font-semibold leading-6 whitespace-nowrap  px-6 py-3  border-solid max-md:px-5 items-center justify-start"
            : "text-zinc-500 px-6 py-1 cursor-pointer text-base font-semibold leading-6 my-auto items-center justify-start"
        )}
      >
        {title}
      </Link>
    </div>
  );
};
