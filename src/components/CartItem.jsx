import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="cart-item">
      <p>
        {item.name} ₹{item.price} × {item.quantity} = ₹
        {item.price * item.quantity}
      </p>
      {item.id !== 99 && (
        <div className="empty-cart">
          <div>
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="minus"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)} className="plus">
              +
            </button>
          </div>

          <button onClick={() => removeItem(item.id)} className="remove">
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
