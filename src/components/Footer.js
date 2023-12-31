import React from "react";
import "./Footer.scss";

import whatsapp from "../assets/svg/whatsapp.svg";
import viber from "../assets/svg/viber.svg";
import alfared from "../assets/image/alfalogored.png";
import alfaorange from "../assets/image/alfalogoorange.png";
import alfayellow from "../assets/image/alfalogoyellow.png";
import alfapink from "../assets/image/alfapink.png";
import alfagreen from "../assets/image/alfagreen.png";
import alfablue from "../assets/image/alfablue.png";
import BulletPoint from "./BulletPoint";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // const handleClick = () => {
  //   const coloredLogos = document.querySelectorAll(".colored-logo");
  //   coloredLogos.forEach((logo) => {
  //     logo.animate(
  //       [
  //         { transform: "scale(1) translate(0,0)" },
  //         { transform: "scale(0.8) translate(0,0)" },
  //         { transform: "scale(1) translate(0,0)" },
  //       ],
  //       {
  //         duration: 400,
  //         fill: "forwards",
  //         easing: "ease",
  //       }
  //     );
  //   });
  // };

  return (
    <footer className="footer">
      <div>
        <div className="logo">
          <div className="colored-logo">
            <img src={alfared} alt="alfalogo" />
          </div>
          <div className="colored-logo">
            <img src={alfaorange} alt="alfalogo" />
          </div>
          <div className="colored-logo">
            <img src={alfapink} alt="alfalogo" />
          </div>
          <div className="colored-logo">
            <img src={alfablue} alt="alfalogo" />
          </div>
          <div className="colored-logo">
            <img src={alfagreen} alt="alfalogo" />
          </div>
          <div className="colored-logo">
            <img src={alfayellow} alt="alfalogo" />
          </div>
        </div>
        <div className="footer-company">
          <BulletPoint text="Alfa Globe" />
          <address>alfaglobe.ks@gmail.com</address>
          <div className="socials-holder">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <hr />
      <div className="products">
        <BulletPoint text="Products" />
        <NavLink to="derivate">Derivatives</NavLink>
        <NavLink to="construction">Construction</NavLink>
        <NavLink to="agriculture">Agriculture</NavLink>
        <NavLink to="markets">Markets</NavLink>
      </div>
      <hr />
      <div className="contact">
        <BulletPoint text="Contact" />
        <a href="mailto:alphaglobe.ks@gmail.com">alphaglobe.ks@gmail.com</a>
        <a href="tel:+3834944192422">044 192 422</a>
        <div style={{ display: "flex", gap: "5px" }}>
          <a href="https://api.whatsapp.com/send?phone=0038344192422">
            <img src={whatsapp} alt="whatsapp logo" width={20} />
          </a>
          <a href="viber://chat?number=%0038344192422">
            <img src={viber} alt="viberlogo" width={18} />
          </a>
        </div>
      </div>
      <div>
        <address>Cagllavice, Rr. Rrafshi i Kosovës</address>
        <address>Klinë e Ulët, Rr. Deshmorët e Kombit</address>
        <address>Polac, Rr. Kodra e Polacit</address>
        <address>Kcic, Rr. Mbreti Agron</address>
      </div>
    </footer>
  );
};

export default Footer;
