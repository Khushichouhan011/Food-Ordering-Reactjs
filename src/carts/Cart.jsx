
import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../pages/menu/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="cart-container">
      <div className="cart-wrapper">

        <div className="cart-header">
          <p>Image</p>
          <p>Name</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {food_list.map((item) => {
          const quantity = cartItems[item.id] || 0;

          if (quantity > 0) {
            return (
              <div className="cart-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{quantity}</p>
                <p>${item.price * quantity}</p>
                <p
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </p>
              </div>
            );
          }

          return null;
        })}

        <div className="cart-summary">
          <h3>Cart Summary</h3>

          <p>Subtotal: ${subtotal}</p>
          <p>Delivery: ${deliveryFee}</p>
          <h3>Total: ${grandTotal}</h3>

          <button
            disabled={subtotal === 0}
            onClick={() => navigate("/placeorder")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;