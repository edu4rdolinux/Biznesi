"use client"

import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import FinishButton from './FinishButton';
import TotalPrice from './TotalPrice';
import { useTotalPrice } from './TotalPriceContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

function cleanUrl(url: string) {
  if (!url.startsWith("http")) {
    return `https://dummyjson.com/${url}`;
  }
  return url;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { totalPrice, addToTotal } = useTotalPrice();
  
  if (totalPrice >= 1) {
    const FinishButton = document.getElementById('Finish-Button');
    if (FinishButton) {
      FinishButton.style.display = "flex";
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: Product[] }>('https://dummyjson.com/products/category/laptops');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const fallbackImage = "https://via.placeholder.com/150";

  const titlesToRemove = [
    ""
  ];

  const filteredProducts = products.filter(product => !titlesToRemove.includes(product.title));

  const handleBuy = (price: number) => {
    addToTotal(price);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="flex gap-4 m-4">
        <TotalPrice totalPrice={totalPrice} />
        <FinishButton /> 
      </div>
      <ul className="text-slate-100 flex flex-row flex-wrap gap-12 justify-center -mt-20">
        {filteredProducts.map((product) => (
          <ProductItem 
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={cleanUrl(product.thumbnail)}
            fallbackImage={fallbackImage}
            onBuy={handleBuy}
          />
        ))}
      </ul>
    </div>
  );
}
