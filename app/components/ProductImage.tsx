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
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={src}
    alt={alt}
    width="300"
    onError={handleError}
  />
</div>

  );
};

export default ProductImage;
