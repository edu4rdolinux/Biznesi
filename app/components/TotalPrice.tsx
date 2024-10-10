import React from 'react';

interface TotalPriceProps {
  totalPrice: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice }) => {
  return <h2 className='text-slate-100'>Total: ${totalPrice.toFixed(2)}</h2>;
};

export default TotalPrice;
