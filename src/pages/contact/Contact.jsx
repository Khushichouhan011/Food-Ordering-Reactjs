import "./Contact.css";
import { BiDetail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import img6 from "/images/img6.avif";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
      </div>

      {/* Inquiry Section */}
      <div className="inquiry-section">
        <h2>Have any questions?</h2>
        <p>We’re here to help! Ask us anything or leave your feedback below.</p>

        <form className="contact-form">
          <textarea placeholder="Write your question or review..." required />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Open Hours Section */}
      <div className="open-info-section">
        <h2>
          <IoCall /> We Are Open
        </h2>
        <div className="open-info">
          <p><strong>Time:</strong> Mon-Sun, 9 AM - 11 PM</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> B-12, Foodie Street, Indore, MP</p>
          <p><strong>Owner:</strong> Khushi Chouhan</p>
        </div>
      </div>

      {/* Customer Contact Info */}
      <div className="customer-info-section">
        <div className="customer-image">
          <img src={img6} alt="Customer" />
        </div>

        <form className="customer-form">
          <h2>
            <BiDetail /> Customer Contact Details
          </h2>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Delivery Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Postal Code" required />
          <button type="submit">Send Info</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
