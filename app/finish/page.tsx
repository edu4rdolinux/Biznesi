"use client";
import React from 'react';
import { TotalPriceProvider } from '../components/TotalPriceContext';
import FinishPage from '../components/FinishPage';

export default function Home() {
  return (
      <TotalPriceProvider>
        <FinishPage />
      </TotalPriceProvider>
  );
};