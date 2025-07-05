import "./Footer.css";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import AppDownload from "./AppDownload";

const Footer = () => {
  return (

    <>
  <AppDownload/>
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="logo">Swad Sutra</h1>
          <p className="para">
            Choose from a diverse menu featuring a delectable array of dishes crafted with
            the finest ingredients and culinary expertise. Our mission is to satisfy your
            cravings and elevate your dining experience, one delicious meal at a time.
          </p>
          <div className="footer-social-icons">
            <FaInstagram className="icon" />
            <CiFacebook className="icon" />
            <CiLinkedin className="icon" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2 className="head">Restaurant</h2>
          <ul className="ul">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2 className="head">GET IN TOUCH</h2>
          <ul>
            <li>Contact: 7722984771</li>
            <li>Email: khushichouhan1.3@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        © 2026 SwadSutra.com – All Rights Reserved
      </p>
    </div>
    </>
  );
};

export default Footer;
