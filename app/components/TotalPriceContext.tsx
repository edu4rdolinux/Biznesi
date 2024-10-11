"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TotalPriceContextType {
  totalPrice: number;
  addToTotal: (amount: number) => void;
  resetTotal: () => void;
}

const TotalPriceContext = createContext<TotalPriceContextType | undefined>(undefined);

export const TotalPriceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState<number>(() => {
    const savedTotal = localStorage.getItem('totalPrice');
    return savedTotal ? parseFloat(savedTotal) : 0;
  });

  const addToTotal = (amount: number) => {
    setTotalPrice((prevTotal) => {
      const newTotal = prevTotal + amount;
      localStorage.setItem('totalPrice', newTotal.toString());
      return newTotal;
    });
  };

  const resetTotal = () => {
    setTotalPrice(0);
    localStorage.removeItem('totalPrice');
  };

  useEffect(() => {
    localStorage.setItem('totalPrice', totalPrice.toString());
  }, [totalPrice]);

  return (
    <TotalPriceContext.Provider value={{ totalPrice, addToTotal, resetTotal }}>
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
