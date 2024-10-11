"use client";
import React from 'react';
import { useTotalPrice } from '../components/TotalPriceContext';
import Link from 'next/link';

const FinishPage: React.FC = () => {
  const { totalPrice, resetTotal } = useTotalPrice();

  const handleFinish = () => {
    resetTotal();


  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Purchase Summary</h1>
      <p className="text-lg mb-8">Total payable: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>
      
      <Link href="/">
      <button
        onClick={handleFinish}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
        Finalize Purchase
      </button>
      </Link>
    </div>
  );
};

export default FinishPage;
