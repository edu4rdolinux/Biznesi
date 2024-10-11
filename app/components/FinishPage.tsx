"use client";
import React from 'react';
import { useTotalPrice } from '../components/TotalPriceContext';
import Link from 'next/link';
import '../styles/global.scss'
import Header from './Header';

const FinishPage: React.FC = () => {
  const { totalPrice, resetTotal } = useTotalPrice();

  const handleFinish = () => {
    resetTotal();


  };

  return (
    <div>
      <Header/>
     <div className="flex flex-col items-center justify-center h-screen text-slate-100">
        <h1 className="text-2xl font-bold mb-2">Purchase Summary</h1>
        <p className="text-lg mb-4">Total payable: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>

        <Link href="/">
       <button
          onClick={handleFinish}
          className="px-6 py-3 text-zinc-950 font-medium bg-slate-100 rounded-md hover:bg-slate-200 transition duration-300">
          Finalize Purchase
       </button>
        </Link>
      </div>
    </div>
  );
};

export default FinishPage;
