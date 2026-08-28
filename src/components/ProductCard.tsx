import React from "react";

export type Product = {
  id: number;
  name: string;
};

type ProductCardProps = {
  product: Product;
  onSelect: (p: Product) => void;
};

const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  return (
    <div>
      <span>{product.name}</span>
      <button onClick={() => onSelect(product)}>Select</button>
    </div>
  );
};

export default ProductCard;
