"use client";

import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul className="text-slate-100 flex flex-row flex-wrap gap-12 justify-center">
        {filteredProducts.map((product) => (
          <ProductItem 
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={cleanUrl(product.thumbnail)}
            fallbackImage={fallbackImage}
          />
        ))}
      </ul>
    </div>
  );
}
