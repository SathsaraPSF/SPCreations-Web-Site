import React from "react";
import "./Contact.css";
import whatsapp from "../../assests/WA.png";
import facebook from "../../assests/facebook.png";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <span className="stroke-text">Contact</span>
        <span className="contact__header-2"> us</span>
        <span className="contact__header-3"> to get more details</span>
      </div>

      <div className="contact__container">
        <motion.div
          className="contact__container-1 contact-containers"
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img className="img" src={whatsapp}></img>
          <span>
            <a className="link" href="https://wa.me/message/L56X7SMOIJHUL1">
              0772253533
            </a>
          </span>
        </motion.div>
        <motion.div
          className="contact__container-2 contact-containers"
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img className="img" src={facebook}></img>
          <span>
            <a
              className="link"
              href="https://www.facebook.com/profile.php?id=100093541017677&mibextid=ZbWKwL"
            >
              @S&P Creations
            </a>
          </span>
        </motion.div>
      </div>
    </div>
  );
};
