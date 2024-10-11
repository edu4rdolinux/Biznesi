"use client";
import React from 'react';
import { TotalPriceProvider } from '../components/TotalPriceContext';
import FinishPage from '../components/FinishPage';

const Finish: React.FC = () => {
  return (
    <TotalPriceProvider>
      <FinishPage />
    </TotalPriceProvider>
  );
};

export default Finish;
