import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <div className="product-details">
        <div>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
        <img src={product.image} alt="" />
      </div>

      <div className="quantity-selector">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="minus"
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((q) => q + 1)} className="plus">
          +
        </button>
      </div>
      <button
        onClick={() => addToCart(product, quantity)}
        className="add-to-cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
