import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuPackage } from "react-icons/lu";

import fbanner from "/images/fbanner.jpg";
import people1 from "/images/people1.jpg";
import people2 from "/images/people2.jpg";
import people3 from "/images/people3.jpg";
import people4 from "/images/people4.webp";
import people5 from "/images/people5.jpg";

import dineservice from "/images/dineservice.jpg";
import take from "/images/take.jpg";
import delivary from "/images/delivary.jpg";

import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* Banner Section */}
      <div className="services-banner">
        <img src={fbanner} alt="Services" />
        <div className="head">
          <h1>We Provide Services</h1>
        </div>

        <div className="service-cards">
          <div className="service-card">
            <img src={dineservice} alt="Dine In" />
            <h1><IoFastFoodOutline /> Dine-In Service</h1>
          </div>
          <div className="service-card">
            <img src={delivary} alt="Delivery" />
            <h1><CiDeliveryTruck /> Fast Delivery</h1>
          </div>
          <div className="service-card">
            <img src={take} alt="Takeaway" />
            <h1><LuPackage /> Takeaway</h1>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <p className="line"></p>
        <div className="review-cards">
          {[people1, people2, people3, people4, people5].map((img, index) => (
            <div className="review-card" key={index}>
              <img src={img} alt={`User ${index + 1}`} />
              <h4>Aman Sighania</h4>
              <p>“Amazing food and super fast service. Highly recommend!”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <h2 className="stat-number">3 Billion+</h2>
          <p className="stat-label">orders delivered</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-number">220k+</h2>
          <p className="stat-label">restaurant partners</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-number">520k+</h2>
          <p className="stat-label">delivery partners</p>
        </div>
        <div className="stat-card1">
          <h2 className="stat-number">680+</h2>
          <p className="stat-label">cities in India</p>
        </div>
      </section>
    </div>
  );
};

export default Services;