
import "./ExploreMenu.css";
import fbanner from "/images/fbanner.jpg";
import { menu_list } from "./MenuList";

const ExploreMenu = ({ categories, setCategories }) => {
  return (
    <div className="explore-menu" id="menu">
      {/* ✅ Banner Section */}
      <div className="menu-banner">
        <img src={fbanner} alt="Food Banner" />
        <div className="menu-banner-text">
          <h1>Delicious Meals Await</h1>
          <p>Experience culinary delights crafted with love.</p>
        </div>
      </div>

      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() =>
              setCategories((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={categories === item.menu_name ? "active" : ""}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
