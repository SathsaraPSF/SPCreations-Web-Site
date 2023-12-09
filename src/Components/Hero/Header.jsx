import React from "react";
import "./Header.css";
import logo from "../../assests/logo.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <img className="header__img" src={logo} alt="logo" />
      </motion.div>
      <ul className="header__menu-items">
        <li className="header__menu-items__item">Home</li>
        <li className="header__menu-items__item">Services</li>
        <li className="header__menu-items__item">Packages</li>
        <li className="header__menu-items__item">Contact us</li>
      </ul>
      <motion.button
        className="header__button"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgba(255,255,255)",
          boxShadow: "0px 0px 3px rgba(255,255,255)",
        }}
      >
        Join us
      </motion.button>
    </div>
  );
};

export default Header;
