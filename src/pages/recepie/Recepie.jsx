
import "./Recepie.css";
import { useState } from "react";



const recipes = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    description: "Rich and creamy paneer dish.",
    ingredients: ["Paneer", "Butter", "Tomato", "Cream", "Spices"],
    steps: ["Heat butter", "Add tomato puree", "Add paneer", "Cook & serve"]
  },
  {
    id: 2,
    title: "Chole Bhature",
    description: "Spicy chole with fluffy bhature.",
    ingredients: ["Chickpeas", "Spices", "Maida", "Curd"],
    steps: ["Boil chole", "Prepare masala", "Knead dough", "Fry bhature"]
  },
  {
    id: 3,
    title: "Masala Dosa",
    description: "South Indian crispy dosa with aloo masala.",
    ingredients: ["Dosa batter", "Potatoes", "Spices"],
    steps: ["Make dosa", "Prepare aloo", "Stuff and serve"]
  }
];

const Recepie = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="recipe-container">
      {selectedRecipe ? (
        <div className="recipe-detail">
          <h2>{selectedRecipe.title}</h2>
          <p>{selectedRecipe.description}</p>
          <h4>Ingredients:</h4>
          <ul>
            {selectedRecipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4>Steps:</h4>
          <ol>
            {selectedRecipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <button onClick={handleBack}>🔙 Back to all recipes</button>
        </div>
      ) : (
        <div className="recipe-list">
          <h2>🍽️ All Recipes</h2>
          {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => handleSelect(recipe)}>View Recipe</button>
            </div>
          ))}
        </div>
      )}
    </div>

 
  )}

export default Recepie;



