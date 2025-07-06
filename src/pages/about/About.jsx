
import "./About.css";
import img6 from"/images/img6.avif";
import img5 from"/images/img5.avif";
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
            We are passionate about delivering fresh, delicious food at your doorstep.
            Our mission is to provide top-quality service and taste in every bite.
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
            From local ingredients to expert cooking, we bring the best to your plate.
            Explore our menu and experience something delightful.
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
      <h3>🍽️ Fresh Ingredients</h3>
      <p>We use locally sourced and seasonal produce to serve you the healthiest meals possible.</p>
    </div>
    <div className="reason-card">
      <h3>🚚 Lightning-Fast Delivery</h3>
      <p>Your time is precious — our efficient network ensures your food reaches hot and fast.</p>
    </div>
    <div className="reason-card">
      <h3>📱 Easy to Order</h3>
      <p>Our intuitive app and website make browsing, ordering, and tracking your food super simple.</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
