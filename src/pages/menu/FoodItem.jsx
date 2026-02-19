import "./FoodItem.css";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";
import { StoreContext } from "./StoreContext";

const FoodItem = ({ id, name, price, category, rating, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="image" />

        {!cartItems[id] ? (
          <MdAdd
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <IoIosRemove
              className="remove"
              onClick={() => removeFromCart(id)}
            />

            <p>{cartItems[id]}</p>

            <MdAdd
              className="add"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <p>{category}</p>
          <p>{rating}</p>
        </div>

        <p className="food-item-price">
          <MdOutlineAttachMoney className="icon" />
          {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;

// import "./FoodItem.css";
// import { MdOutlineAttachMoney } from "react-icons/md";
// import { useContext } from "react";
// import { MdAdd } from "react-icons/md";
// import { IoIosRemove } from "react-icons/io";

// import { StoreContext } from "./StoreContext";
            

// const FoodItem = ({ id, name, price, category ,rating, image }) => {
//   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//        <img src={image} className="image" />
// {

//             <MdAdd className="add" onClick={() => addToCart(id)} />
//           ) : (
//             <div className="food-item-counter">
//               <IoIosRemove className="adding" onClick={() => removeFromCart(id)} />
//               <p>{cartItems[id]}</p>
//               <MdAdd className="remove" onClick={() => addToCart(id)} />
//             </div>
//           )
//         }
//       </div>

//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <p>{category}</p>
//           <p>{rating}</p>
//            </div>

//          <p className="food-item-price">
//           <MdOutlineAttachMoney className="icon" />{price}
//         </p>

//       </div>
//     </div>
//   );
// };

// export default FoodItem;
