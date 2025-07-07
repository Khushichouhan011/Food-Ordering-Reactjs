import { CiDeliveryTruck } from "react-icons/ci";
import "./About.css";
import img6 from"/images/img6.avif";
import img5 from"/images/img5.avif";
import { FaMobileScreen } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
const About = () => {
  return (
    <div className="about-page">

      {/* Section 1 */}
      <div className="about-section">
        <div className="about-image">
          <img src={img6} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
          At Swad Sutra, we believe that food is not just about taste — it's about emotion, culture, and connection. Our mission is to deliver delicious, freshly prepared meals that bring comfort, satisfaction, and a smile to your face.

          We combine authentic flavors with modern culinary techniques to offer a menu that caters to every craving. Whether it's a spicy street snack or a hearty home-style dish, every item is crafted with love, care, and premium ingredients.
          </p>
          <button>Learn More</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="about-section reverse">
         <div className="about-image">
          <img src={img5} alt="Our Service" />
        </div>
        <div className="about-content">
          <h2>What We Do</h2>
          <p>
            Swad Sutra is more than just a food platform — it’s a celebration of taste, freshness, and innovation. We’re here to transform the way you experience everyday meals by blending traditional recipes with modern flair.

           Our dedicated chefs and team ensure that every dish on our menu reflects quality, hygiene, and a commitment to flavor. Whether you’re craving comfort food or exploring something new, Swad Sutra is your trusted destination for satisfying every bite.
          </p>
          <button>Explore Menu</button>
        </div>
       
      </div>
      {/* Section 3 - Why Choose Us */}
<div className="about-growth-section">
  <h1>Why Choose Us?</h1>
  <p>
    We're more than just a food delivery service. We focus on quality, speed, and simplicity — all tailored for your comfort.
  </p>
  
  <div className="growth-reasons">
    <div className="reason-card">
      <h3>
<IoFastFoodOutline /> Fresh Ingredients</h3>
      <p>We use locally sourced and seasonal produce to serve you the healthiest meals possible.</p>
    </div>
    <div className="reason-card">
      <h3><CiDeliveryTruck /> Lightning-Fast Delivery</h3>
      <p>Your time is precious — our efficient network ensures your food reaches hot and fast.</p>
    </div>
    <div className="reason-card">
      <h3>
<FaMobileScreen />Easy to Order</h3>
      <p>Our intuitive app and website make browsing, ordering, and tracking your food super simple.</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
