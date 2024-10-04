interface ProductTitleProps {
    title: string;
  }
  
  const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => {
    return <h2>{title}</h2>;
  };
  
  export default ProductTitle;
  