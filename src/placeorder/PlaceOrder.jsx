
import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../pages/menu/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <form className="place-order" onSubmit={(e) => e.preventDefault()}>

      <div className="place-order-left">
        <p>Delivery Information</p>

        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
      </div>

      <div className="place-order-right">
        <h2>Total</h2>

        <p>Subtotal: ${subtotal}</p>
        <p>Delivery: ${deliveryFee}</p>
        <h3>Total: ${total}</h3>

        <button disabled={subtotal === 0}>
          Proceed to Payment
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;