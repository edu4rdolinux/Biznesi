"use client";

import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function cleanUrl(url: string) {
  return url.replace(/[\[\]%22]/g, '');
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
        setProducts(response.data);
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
    "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  ];

  const filteredProducts = products.filter(product => !titlesToRemove.includes(product.title));

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {filteredProducts.map((product) => (
          <ProductItem 
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={cleanUrl(product.image)}
            fallbackImage={fallbackImage}
          />
        ))}
      </ul>
    </div>
  );
}
