interface ProductPriceProps {
    price: number;
  }
  
  const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
    return <p className="text-slate-100"><strong>${price}</strong></p>
  }
  
  export default ProductPrice;