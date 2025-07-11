import "./Home.css";

import {Link }from"react-router-dom";

const Home = () => {
  return (
    <>
      <div className="header">

        <div className="header-contents">
          <h2>Order Your<br/> Favorite Food Here</h2>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <Link to="/menu"><button>View Menu</button></Link>
        </div>
      </div>


     
    </>
  );
};

export default Home;

