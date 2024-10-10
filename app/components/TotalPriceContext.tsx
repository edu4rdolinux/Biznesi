// app/components/TotalPriceContext.tsx

"use client"; // Marcar como Client Component

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TotalPriceContextType {
  totalPrice: number;
  addToTotal: (amount: number) => void;
}

const TotalPriceContext = createContext<TotalPriceContextType | undefined>(undefined);

export const TotalPriceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToTotal = (amount: number) => {
    setTotalPrice(prevTotal => prevTotal + amount);
  };

  return (
    <TotalPriceContext.Provider value={{ totalPrice, addToTotal }}>
      {children}
    </TotalPriceContext.Provider>
  );
};

export const useTotalPrice = () => {
  const context = useContext(TotalPriceContext);
  if (context === undefined) {
    throw new Error('useTotalPrice must be used within a TotalPriceProvider');
  }
  return context;
};
