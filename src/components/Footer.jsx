import React from "react";
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-title">To`rtko`l tumani 10-sonli maktab</h1>
      <div className="networks">
        <a href="">
          <i class="fa-brands fa-telegram"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <span>
        Mualliflik huquqi 2023. Barcha huquqlar himoyalangan.
      </span>
    </div>
  );
};

export default Footer;
