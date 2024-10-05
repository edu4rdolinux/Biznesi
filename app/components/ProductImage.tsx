interface ProductImageProps {
  src: string;
  alt: string;
  fallback: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt, fallback }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallback;
  };

  return (
    <img
      src={src}
      alt={alt}
      width="350"
      onError={handleError}
    />
  );
};

export default ProductImage;
