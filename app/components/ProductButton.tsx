import React from 'react';

interface ProductButtonProps {
  onBuy: () => void;
}

const ProductButton: React.FC<ProductButtonProps> = ({ onBuy }) => {
  return <button className='bg-green-400 w-24 rounded-sm ProductButton' onClick={onBuy}>Buy</button>;
};

export default ProductButton;
