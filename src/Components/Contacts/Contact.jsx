import React from "react";
import "./Contact.css";
import whatsapp from "../../assests/WA.png";
import facebook from "../../assests/facebook.png";
import insta from "../../assests/insta.png";
import { motion } from "framer-motion";

export const Contact = () => {
  const transition = { type: "spring", duration: 5 };
  return (
    <div className="contact" id="contactus">
      <motion.div className="contact__header">
        <span className="main-headers">Contact</span>
        <span className="contact__header-2"> us</span>
        <span className="contact__header-3"> to get more details</span>
      </motion.div>

      <div className="contact__container">
        <motion.div
          className="contact__container-1 contact-containers"
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span>
            <a className="link" href="https://wa.me/message/L56X7SMOIJHUL1">
              <img className="img" src={whatsapp}></img>
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
          <span>
            <a className="link" href="https://wa.me/message/L56X7SMOIJHUL1">
              <img className="img" src={insta}></img>
            </a>
          </span>
        </motion.div>

        <motion.div
          className="contact__container-3 contact-containers"
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span>
            <a
              className="link"
              href="https://www.facebook.com/profile.php?id=100093541017677&mibextid=ZbWKwL"
            >
              <img className="img" src={facebook}></img>
            </a>
          </span>
        </motion.div>
      </div>
    </div>
  );
};
