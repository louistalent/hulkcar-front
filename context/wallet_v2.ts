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

const metadata = {
    name: "Next Starter Template",
    description: "A Next.js starter template with Web3Modal v3 + Wagmi",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

