import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../pages/menu/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const total = getTotalCartAmount?.() || 0;

  return (
    <form className="place-order" onSubmit={(e) => e.preventDefault()}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-field">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Street" required />

        <div className="multi-field">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>

        <div className="multi-field">
          <input type="text" placeholder="Pin Code" required />
          <input type="text" placeholder="Country" required />
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>SubTotal</p>
            <p>${total}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>$2</p>
          </div>

          <div className="cart-total-details">
            <b>Total</b>
            <b>${total + 2}</b>
          </div>

          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
