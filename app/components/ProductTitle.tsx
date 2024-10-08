interface ProductTitleProps {
  title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => {
  return <h2 className="text-slate-100 text-lg">{title}</h2>;
};

export default ProductTitle;
