import React, { useEffect } from "react";

export type Product = {
  id: number;
  name: string;
};

type ProductCardProps = {
  selectedProduct: Product;
  buttonText: string;
  onClear: () => void;
};

const ProductCard = ({
  selectedProduct,
  onClear,
  buttonText,
}: ProductCardProps) => {
  console.log(`ProductCard render: ${selectedProduct.name} - ${buttonText}`);
  return (
    <div
      style={{
        width: "220px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <span>{selectedProduct.name}</span>
      <button
        style={{ width: "80px", justifySelf: "right" }}
        type="button"
        onClick={onClear}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default React.memo(ProductCard);
