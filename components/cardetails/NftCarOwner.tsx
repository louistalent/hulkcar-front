"use client";
import React from "react";
import CarOwnerCarousel from "./CarOwnerCarousel";
import { TiShoppingCart } from "react-icons/ti";

const NftCarOwner = () => {
  return (
    <div className="dark:bg-[#2e2f32] bg-[#F6F6F6] flex-col rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl mf:rounded-bl-none  rounded-br-2xl mf:rounded-br-none w-full px-5 pb-10 pt-6 mb-6 mf:mb-0">
      <div className="flex items-center justify-between w-full">
        <h1 className="dark:text-[#FCFCFC] font-bold md:text-lg text-xs text-[#10141A]">
          NFT Car Owner
        </h1>
        <div className="flex items-center justify-center gap-2">
          <h3 className="dark:text-[#FCFCFC] text-[#10141A] border rounded-full sm:text-base text-xs font-medium border-[#10141a1a] dark:border-[#424242] px-2 py-2 sm:px-3 sm:py-3">
            $1500 USDT
          </h3>
          <div className="relative bg-white rounded-full">
            <span className="bg-green-600 text-slate-50 px-1 text-xs rounded-full absolute top-0 right-0">
              2
            </span>
            <div className="dark:bg-[#1D1E21] rounded-full h-[40px] w-[40px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <g clip-path="url(#clip0_66_7473)">
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
      <div className="mt-8">
        <CarOwnerCarousel callFrom="NFT Car Owner" />
      </div>
    </div>
  );
};

export default NftCarOwner;
