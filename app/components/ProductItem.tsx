import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';

interface ProductItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  fallbackImage: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, title, description, price, image, fallbackImage }) => {
  return (
    <li key={id}>
      <ProductImage src={image} alt={title} fallback={fallbackImage} />
      <ProductTitle title={title} />
      <ProductDescription description={description} />
      <ProductPrice price={price}/>
    </li>
  );
};

export default ProductItem;
