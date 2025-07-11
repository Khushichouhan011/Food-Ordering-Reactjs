import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../pages/menu/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const grandTotal = getTotalCartAmount() + deliveryFee;

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
        

        {food_list.map((item) =>
          cartItems[item._id] > 0 ? (
            <div className="cart-item" key={item._id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <p
                className="remove-btn"
                onClick={() => removeFromCart(item._id)}
              >
                ✕
              </p>
            </div>
          ) : null
        )}

        <div className="cart-summary">
          <div className="cart-total-box">
            <h3>Cart Summary</h3>
            <div className="summary-line">
              <span>Subtotal:</span>
              <span>${getTotalCartAmount()}</span>
            </div>
            <div className="summary-line">
              <span>Delivery Fee:</span>
              <span>${deliveryFee}</span>
            </div>
            <div className="summary-line total">
              <strong>Total:</strong>
              <strong>${grandTotal}</strong>
            </div>
            <button onClick={() => navigate("/placeorder")}>
              Proceed to Checkout
            </button>
          </div>

          <div className="promo-code-box">
            <p>If you have a promo code, enter it here:</p>
            <div className="promo-input-group">
              <input type="text" placeholder="Promo Code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
