import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  rate: number;
}

export type Theme = 'light' | 'dark';

interface AppState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  language: string;
  setLanguage: (lang: string) => void;
  country: string;
  setCountry: (country: string) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currency: { code: "COP", name: "Peso Colombiano", symbol: "$", rate: 1 },
      setCurrency: (currency) => set({ currency }),
      language: "Español",
      setLanguage: (language) => set({ language }),
      country: "CO",
      setCountry: (country) => set({ country }),
      theme: 'light',
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      })),
    }),
    {
      name: 'viajemos-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      partialize: (state) => ({ 
        currency: state.currency,
        country: state.country,
        theme: state.theme
      }), // Persist these fields
    }
  )
);
