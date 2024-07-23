import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logomain1-removebg-preview.png";
import facebookIcon from "../assets/facebook_icon.png";
import twitterIcon from "../assets/twitter_icon.png";
import linkedinIcon from "../assets/linkedin_icon.png";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logoimage" src={logo} alt="Not Avail" />
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <div className="footer-social-icons">
            <img src={facebookIcon} alt="Not Avail" />
            <img src={twitterIcon} alt="Not Avail" />
            <img src={linkedinIcon} alt="Not Avail" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Rentals</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+1-221-456-7869</li>
            <li>contact@easydrive.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 &copy; EasyDrive.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
