import { create } from 'zustand';

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  rate: number;
}

interface AppState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currency: { code: "COP", name: "Peso Colombiano", symbol: "$", rate: 1 },
  setCurrency: (currency) => set({ currency }),
  language: "Español",
  setLanguage: (language) => set({ language }),
}));
