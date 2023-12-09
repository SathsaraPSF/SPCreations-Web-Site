import React from "react";
import "./Hero.css";
import image from "../../assests/image.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div className="hero">
      <motion.div
        className="hero__left-hero"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <span className="hero__left-hero__stroke-text-1 stroke-text">SP</span>
        <span className="hero__left-hero__stroke-text-2">creations</span>
        <span className="hero__left-hero__slogen">
          Design Dreams,Spreading Smiles
        </span>
        <div className="hero__left-hero__buttons">
          <motion.button
            className="hero__left-hero__buttons-1"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgba(255,255,255)",
              boxShadow: "0px 0px 3px rgba(255,255,255)",
            }}
          >
            Get started
          </motion.button>
          <motion.button
            className="hero__left-hero__buttons-2"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgba(255,255,255)",
              boxShadow: "0px 0px 3px rgba(255,255,255)",
            }}
          >
            Learn more
          </motion.button>
        </div>
      </motion.div>

      <div className="hero__right-hero">
        <motion.div>
          <img className="hero__right-hero__img" src={image} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
