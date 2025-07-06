import React from "react";
import "./Recepie.css";
import img4 from"/images/img4.avif";

const Recepie = () => {
  return (
    <div className="recepie-page">

      {/* 🔶 Banner Section */}
      <div className="recipe-banner">
        <img src={img4} alt="Recipe Banner" />
        <div className="recipe-banner-text">
          <h1>Spicy Paneer Butter Masala</h1>
          <p>A rich, creamy and flavorful Indian dish perfect for any occasion.</p>
        </div>
      </div>

      {/* 🔷 Info Tags */}
      <div className="recipe-info">
        <span>🕒 45 mins</span>
        <span>🍽️ 4 Servings</span>
        <span>🌶️ Medium</span>
      </div>

      {/* 🛒 Ingredients */}
      <div className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>200g Paneer (cottage cheese)</li>
          <li>2 Tomatoes (pureed)</li>
          <li>1 Onion (finely chopped)</li>
          <li>2 tbsp Cream</li>
          <li>1 tsp Ginger Garlic Paste</li>
          <li>Spices: Turmeric, Chili, Garam Masala, Salt</li>
        </ul>
      </div>

      {/* 🧑‍🍳 Instructions */}
      <div className="recipe-section">
        <h2>Instructions</h2>
        <ol>
          <li>Heat oil and sauté onions until golden brown.</li>
          <li>Add ginger garlic paste and cook until raw smell disappears.</li>
          <li>Pour in tomato puree and let it simmer for 10 mins.</li>
          <li>Add spices and cream, mix well.</li>
          <li>Add paneer cubes, simmer for 5–7 mins. Serve hot!</li>
        </ol>
      </div>

      {/* 💡 Tips */}
      <div className="recipe-section tips">
        <h2>Chef’s Tips</h2>
        <p>Use fresh cream for a rich taste. Garnish with coriander and serve with naan or rice!</p>
      </div>
    </div>
  );
};

export default Recepie;
