import "./Contact.css";
import { BiDetail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import img6 from "/images/img6.avif";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: ""
  });
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log("Message:", message);
    alert("Your message has been submitted!");
    setMessage(""); // reset
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,[name]: value
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Data:", formData);
    alert("Details submitted successfully!");
    setFormData({
      name: "",email: "",phone: "", address: "",city: "",postal: ""
    });
  };
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="inquiry-section">
        <h2>Have any questions?</h2>
        <p>We’re here to help! Ask us anything or leave your feedback below</p>
        <form className="contact-form" onSubmit={handleMessageSubmit}>
          <textarea placeholder="Write your question or review" required value={message} onChange={(e) => setMessage(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="open-info-section">
        <h2><IoCall /> We Are Open</h2>
        <div className="open-info">
          <p><strong>Time:</strong> Mon-Sun, 9 AM - 11 PM</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> B-12, Foodie Street, Indore, MP</p>
          <p><strong>Owner:</strong> Khushi Chouhan</p>
        </div>
      </div>
      <div className="customer-info-section">
        <div className="customer-image">
          <img src={img6} alt="Customer" />
        </div>
        <form className="customer-form" onSubmit={handleFormSubmit}>
          <h2>
            <BiDetail /> Customer Contact Details
          </h2>
          <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange}/>
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange}/>
          <input type="tel" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange}/>
          <input type="text" name="address" placeholder="Delivery address" required value={formData.address} onChange={handleChange}/>
          <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleChange}/>
          <input type="text" name="postal" placeholder="Postal code" required value={formData.postal} onChange={handleChange}/>
          <button type="submit">Send Info</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;