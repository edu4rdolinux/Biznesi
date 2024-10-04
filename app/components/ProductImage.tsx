interface ProductImageProps {
    src: string;
    alt: string;
    fallback: string;
  }
  
  const ProductImage: React.FC<ProductImageProps> = ({ src, alt, fallback }) => {
    return (
      <img
        src={src}
        alt={alt}
        width="100"
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallback;
        }}
      />
    );
  };
  
  export default ProductImage;
  