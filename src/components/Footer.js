import React from "react";
import "./Footer.scss";

import whatsapp from "../assets/svg/whatsapp.svg";
import viber from "../assets/svg/viber.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <h3>Socials</h3>
        <div>
          <p>Facebook</p>
        </div>
        <div>
          <p>Instagram</p>
        </div>
        <div>
          <p>Twitter</p>
        </div>
      </div>
      <hr />
      <div className="products">
        <h3>Products</h3>
        <p>Derivate</p>
        <p>Vajra</p>
        <p>Agrokulture</p>
      </div>
      <hr />
      <div className="contact">
        <h3>Contact</h3>
        <a href="mailto:alphaglobe.ks@gmail.com">alphaglobe.ks@gmail.com</a>
        <a href="tel:+3834944192422">044 192 422</a>
        <a href="https://api.whatsapp.com/send?phone=0038349487989">
          <img src={whatsapp} width={20} />
        </a>
        <a href="viber://chat?number=%0038349487989">
          <img src={viber} width={18} />
        </a>
      </div>
      <address>Vetenik, rruga e re me tulla, 5200</address>
    </footer>
  );
};

export default Footer;
