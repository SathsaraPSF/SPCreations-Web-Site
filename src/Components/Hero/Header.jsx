import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assests/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Bar from "../../assests/bar.png";

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 480);
  const [menuOpend, setMenuOpend] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sendMessage = () => {
    let package_name = document.getElementById("package-name").innerText;
    console.log(package_name);
    window.open(`https://wa.me/message/L56X7SMOIJHUL1`, "_blank");
  };
  return (
    <div className="header">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <img className="header__img" src={logo} alt="logo" />
      </motion.div>

      {menuOpend === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--seccondPrimaryColor)",
            width: "5vw",
            display: "flex",
            justifyContent: "center",
            padding: "2vw",
            borderRadius: "1vw",
            position: "fixed",
            left: "80vw",
            top: "4.5vw",
            zIndex: "99",
          }}
        >
          <img
            src={Bar}
            onClick={() => setMenuOpend(true)}
            style={{
              width: "6vw",
              height: "8vw",
            }}
          />
        </div>
      ) : (
        <ul className="header__menu-items">
          <li className="header__menu-items__item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
              onClick={() => setMenuOpend(false)}
            >
              Home
            </Link>
          </li>
          <li className="header__menu-items__item">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpend(false)}
            >
              Services
            </Link>
          </li>

          <li className="header__menu-items__item">
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpend(false)}
            >
              Gallery
            </Link>
          </li>
          <li className="header__menu-items__item">
            <Link
              to="packages"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpend(false)}
            >
              Packages
            </Link>
          </li>
          <li className="header__menu-items__item">
            <Link
              to="contactus"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpend(false)}
            >
              Contact us
            </Link>
          </li>
        </ul>
      )}

      <motion.button
        className="header__button"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgba(255,255,255)",
          boxShadow: "0px 0px 3px rgba(255,255,255)",
        }}
        onClick={() => {
          sendMessage();
        }}
      >
        Join us
      </motion.button>
    </div>
  );
};

export default Header;
