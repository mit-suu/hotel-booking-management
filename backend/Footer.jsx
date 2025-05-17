import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Join our KicksPlus Club & Get 15% Off</h2>
          <p>Sign up for free! Join the community.</p>
          <div className="input-group">
            <input type="email" placeholder="Email address" />
            <button>Submit</button>
          </div>
        </div>
        <div className="logo-area">
          <span className="logo-text">KICKS<span className="plus-icon">+</span></span>
        </div>
      </div>

      <div className="footer-links">
        <div className="about">
          <h3>About us</h3>
          <p>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
        </div>
        <div className="column">
          <h3>Categories</h3>
          <ul>
            <li>Runners</li>
            <li>Sneakers</li>
            <li>Basketball</li>
            <li>Outdoor</li>
            <li>Golf</li>
            <li>Hiking</li>
          </ul>
        </div>
        <div className="column">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="column">
          <h3>Follow us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaTiktok />
          </div>
        </div>
      </div>

      <div className="footer-kicks">KICKS</div>

      <div className="footer-bottom">
        © All rights reserved | Made with <span>❤️</span> by <a href="#">Visiata Systems International</a>
      </div>
    </footer>
  );
};

export default Footer;
