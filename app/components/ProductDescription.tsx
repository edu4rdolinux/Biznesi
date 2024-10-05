interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return <p className="text-slate-100 max-w-lg">{description}</p>;
};

export default ProductDescription;
