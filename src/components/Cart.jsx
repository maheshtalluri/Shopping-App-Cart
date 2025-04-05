import React from "react";
import CartItem from "./CartItem";
import ProgressBar from "./ProgressBar";
import { THRESHOLD } from "../constants";

const Cart = ({ cart, updateQuantity, removeItem, subtotal }) => {
  return (
    <div>
        <h2>Cart Summary:</h2>
        <div className="cart">
      <div className = "subtotal" >
        <h3>Subtotal:</h3>
        <h3> ₹{subtotal}</h3>
      </div>
      <hr/>
      
      <ProgressBar value={subtotal} threshold={THRESHOLD} />
      <div className="cart-items">
        {cart.length === 0 ? "" :<h3>Cart Items</h3> }
      
        {cart.length === 0 ? (
            <div className = "empty" >
                <h5>Your cart is empty</h5>
                <p>Add some products to see them here!</p>
            </div>
          
        ) : (
          cart.map((item) => (
            <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
          ))
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Cart;
