
import "./Services.css";
import img4 from"/images/img4.avif"
 // Use different ones if you have

const Services = () => {
  return (
    <div className="services-page">

   
      <div className="services-banner">
        <img src={img4} alt="Services" />
        <div className="head">
          <h1> We Provide Services</h1>
        </div>
        <div className="service-cards">
          
          <div className="service-card">🍽️ Dine-In Service</div>
          <div className="service-card">🚚 Fast Delivery</div>
          <div className="service-card">📦 Takeaway</div>
        </div>
      </div>

    
      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <p className="line"></p>

        <div className="review-cards">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="review-card">
              <img src={img4} alt="User" />
              <h4>User {i + 1}</h4>
              <p>“Amazing food and super fast service. Highly recommend!”</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;
