import React, { useState, useCallback } from "react";
import ProductCard, { type Product } from "./ProductCard";

const products: Product[] = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];

const ProductSelector = () => {
  const [count, setCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClear = useCallback(() => setSelectedProduct(null), []);
  // const handleClear = () => setSelectedProduct(null);
  return (
    <div>
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <p>{count}</p>
        <button
          style={{ width: "80px" }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          increment
        </button>
      </div>
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.name}
            style={{
              width: "220px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <span>{product.name}</span>
            <button
              style={{ width: "80px", justifySelf: "right" }}
              type="button"
              onClick={() => setSelectedProduct(product)}
            >
              select
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {selectedProduct ? (
          <ProductCard
            selectedProduct={selectedProduct}
            onClear={handleClear}
            buttonText="clear"
          />
        ) : (
          <p>No product selected</p>
        )}
      </div>
    </div>
  );
};

export default ProductSelector;

// Exercise 12 — Parent / Child Rendering Optimization

// Build a small product selector using React + TypeScript.

// Create:

// * a parent component called `ProductSelector`
// * a child component called `ProductCard`

// Use this product data:

// ```tsx
// type Product = {
//   id: number;
//   name: string;
// };

// const products: Product[] = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" },
//   { id: 3, name: "Tablet" },
// ];
// ```

// Requirements:

// 1. `ProductSelector` should manage:

//    * a `count` state
//    * a `selectedProduct` state

// 2. Display the current count and an Increment button.

// 3. Clicking Increment should increase the count.

// 4. Display the available products:

//    * Laptop
//    * Phone
//    * Tablet

//    Each product should have a Select button.

// 5. Clicking Select should make that product the current `selectedProduct`.

// 6. Render `ProductCard` inside `ProductSelector`.

// 7. Pass the selected product from the parent to `ProductCard`.

// 8. `ProductCard` should:

//    * display the selected product name
//    * display `"No product selected"` if there is no selection
//    * have a Clear Selection button

// 9. The Clear Selection button should trigger a callback provided by the parent and clear the selected product.

// 10. Add a `console.log` inside `ProductCard` so you can observe when the child component renders.

// 11. Test what happens when:

//     * you select a product
//     * you repeatedly click Increment without changing the selected product

// 12. Optimize the component so that `ProductCard` does not unnecessarily re-render when the parent's `count` changes but the props relevant to `ProductCard` have not meaningfully changed.

// 13. Practice using:

//     * `React.memo`
//     * `useCallback`

// 14. Be prepared to explain why a callback function passed as a prop can affect whether a memoized child re-renders.

// Use React + TypeScript.
// Do not use external libraries.

// Goal:

// Practice parent/child rendering behavior, props, callback props, `React.memo`, `useCallback`, referential equality, and avoiding unnecessary child re-renders.
