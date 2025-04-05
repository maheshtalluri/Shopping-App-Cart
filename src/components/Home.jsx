import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import { PRODUCTS, FREE_GIFT, THRESHOLD } from "../constants";
import { HiShoppingBag } from "react-icons/hi2";

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item
      );

      return updatedCart.filter((item) => item.quantity > 0);
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    if (subtotal >= THRESHOLD) {
      setCart((prevCart) => {
        if (!prevCart.find((item) => item.id === FREE_GIFT.id)) {
          return [...prevCart, { ...FREE_GIFT, quantity: 1 }];
        }
        return prevCart;
      });
    } else {
      setCart((prevCart) => prevCart.filter((item) => item.id !== FREE_GIFT.id));
    }
  }, [subtotal]);

  return (
    <div className="home">
        <div className = "shopping-cart" >
        <h1>Shopping Cart</h1>
        {/* <img src = "WhatsApp Image 2025-04-04 at 17.45.24_93572624.jpg" alt = "" /> */}
        <HiShoppingBag className = "icon" />
        </div>
        <h2>Products</h2>
      <div className="products">
        
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} subtotal={subtotal} />
    </div>
  );
};

export default Home;
