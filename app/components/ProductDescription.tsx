interface ProductDescriptionProps {
    description: string;
  }
  
  const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
    return <p>{description}</p>;
  };
  
  export default ProductDescription;
  