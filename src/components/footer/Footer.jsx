import React from "react";
import "./Footer.css";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import AppDownload from "./AppDownload";

const Footer = () => {
  return (
    <>
      <AppDownload />

      <footer className="footer" id="footer">
        <div className="footer-content">
          {/* Left Column */}
          <div className="footer-left">
            <h1 className="footer-logo">Swad Sutra</h1>
            <p className="footer-description">
              Choose from a diverse menu featuring a delectable array of dishes
              crafted with the finest ingredients and culinary expertise. Our
              mission is to satisfy your cravings and elevate your dining
              experience, one delicious meal at a time.
            </p>
            <div className="footer-socials">
              <FaInstagram className="icon" />
              <CiFacebook className="icon" />
              <CiLinkedin className="icon" />
            </div>
          </div>

          {/* Center Column */}
          <div className="footer-center">
            <h2>Restaurant</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="footer-right">
            <h2>Get In Touch</h2>
            <ul>
              <li>Contact: 7722984771</li>
              <li>Email: khushichouhan1.3@gmail.com</li>
            </ul>
          </div>
        </div>

        <hr />

        <p className="footer-bottom-text">
          © 2026 SwadSutra.com – All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
