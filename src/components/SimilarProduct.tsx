"use client"
import React from "react";

// Define the product type based on your JSON structure
interface Product {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  image: string;
  description: string;
  available: boolean;
}

// Props for the SimilarProducts component
interface SimilarProductsProps {
  currentProduct: Product; // The product added to the cart
  allProducts: Product[]; // List of all products
  onAddToCart: (product: Product) => void; // Function to handle "Add to Cart"
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({
  currentProduct,
  allProducts,
  onAddToCart,
}) => {
  // Filter similar products based on the category of the current product
  const similarProducts = allProducts.filter(
    (product) =>
      product.category === currentProduct.category &&
      product.name !== currentProduct.name // Exclude the current product
  );

  return (
    <div className="similar-products">
      <h2>Similar Products</h2>
      <div className="product-grid">
        {similarProducts.map((product) => (
          <div key={product.name} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Rs. {product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;