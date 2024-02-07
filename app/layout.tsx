"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains";

const chains = [
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  optimism,
  gnosis,
  fantom,
];

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadataWallet = {
  name: "Next Starter Template",
  description: "A Next.js starter template with Web3Modal v3 + Wagmi",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: metadataWallet,
});
const featuredWalletIds = [
  'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',//metamask
  'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393' //phantom
]
const themeVariables = {
  // '--w3m-color-mix': '#00BB7F',
  // '--w3m-color-mix-strength': 40
}
createWeb3Modal({ wagmiConfig, projectId, chains, featuredWalletIds, themeVariables });

import { WagmiConfig } from "wagmi";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Hulk Cars</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hulk Cars offers you the opportunity to invest in vehicles through tokenization. Receive a monthly rent directly to your wallet in USDT on the Solana blockchain." />

        <meta name="twitter:image" content="https://nft.hulkcars.com/preview.jpg" />
        <meta property="og:image" content="https://nft.hulkcars.com/preview.jpg" />

        <meta property="og:image:secure_url" content="https://nft.hulkcars.com/preview.jpg" />
        <meta property="og:width" content="450" />
        <meta property="og:height" content="300" />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="300" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:title" content="Hulk Cars NFT" />
        <meta name="twitter:title" content="Hulk Cars NFT" />

        <meta property="og:description" content="Hulk Cars offers you the opportunity to invest in vehicles through tokenization. Receive a monthly rent directly to your wallet in USDT on the Solana blockchain." />
        <meta name="twitter:description" content="Hulk Cars offers you the opportunity to invest in vehicles through tokenization. Receive a monthly rent directly to your wallet in USDT on the Solana blockchain." />

        <meta property="og:url" content="https://nft.hulkcars.com" />
        <meta name="twitter:url" content="https://nft.hulkcars.com" />

      </head>
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            {children}
            <Footer />
          </ThemeProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
