"use client";

import { create } from "zustand";

type CalculatorStore = {
  isDialogVisible: boolean;
  setIsDialogVisible: (isDialogVisible: boolean) => void;
};

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  isDialogVisible: false,
  setIsDialogVisible: (isDialogVisible) => set({ isDialogVisible }),
}));


