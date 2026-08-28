import React, { useState } from "react";
import ProductCard, { type Product } from "./ProductCard";

const products: Product[] = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];

const ProductSelector = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>();
  const handleSelect = (p: Product) => {
    setSelectedProduct(p);
  };
  return (
    <>
      <div>ProductSelector</div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>Selected: {selectedProduct?.name ?? "None"}</p>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </>
  );
};

export default ProductSelector;

// # Exercise 6 — Parent / Child State

// ## Goal

// Practice:
// - Props
// - Callback functions
// - Lifting state up
// - Parent → child communication
// - Child → parent communication

// ## Task

// Build a small **Product Selector** using two React components:

// - `ProductSelector` — parent component
// - `ProductCard` — child component

// Use the following data:

// type Product = {
//   id: number;
//   name: string;
// };

// const products: Product[] = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" },
//   { id: 3, name: "Tablet" },
// ];

// ## Requirements

// ### ProductSelector (Parent)

// 1. Store the currently selected product in state.
// 2. Render all products using `.map()`.
// 3. Pass each product to `ProductCard` through props.
// 4. Pass a callback function to `ProductCard`.
// 5. When a product is selected, update the parent's state.
// 6. Display the currently selected product at the top.

// Before selection:

// Selected: None

// After selecting Laptop:

// Selected: Laptop

// ### ProductCard (Child)

// 1. Receive a product through props.
// 2. Receive the parent's callback through props.
// 3. Display the product name.
// 4. Render a `Select` button.
// 5. When the button is clicked, call the callback and tell the parent which product was selected.

// Example UI:

// Selected: None

// Laptop    [Select]
// Phone     [Select]
// Tablet    [Select]

// ## Rules

// - Do not store `selectedProduct` state inside `ProductCard`.
// - The selected product state should live in the parent.
// - Use TypeScript types for the child props.
// - Remember to use `key` when rendering `ProductCard` with `.map()`.
// - You can keep both components in the same `.tsx` file.
