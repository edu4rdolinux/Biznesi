import React from 'react';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';
import ProductButton from './ProductButton';

interface ProductItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  fallbackImage: string;
  onBuy: (price: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, title, description, price, image, fallbackImage, onBuy }) => {
  return (
    <li>
      <ProductImage src={image} alt={title} fallback={fallbackImage} />
      <ProductTitle title={title} />
      <ProductDescription description={description} />
      <div className='flex flex-row gap-4'>
        <ProductPrice price={price} />
        <ProductButton onBuy={() => onBuy(price)} />
      </div>
    </li>
  );
};

export default ProductItem;
