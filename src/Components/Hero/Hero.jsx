import React from "react";
import "./Hero.css";
import image from "../../assests/image.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 0.5 };
  return (
    <motion.div className="hero" id="hero">
      <motion.div className="hero__left-hero">
        <span className="hero__left-hero__stroke-text-1 stroke-text">SP</span>
        <span className="hero__left-hero__stroke-text-2">creations</span>

        <div className="hero__left-hero__slogen">
          <motion.div
            className="hero__left-hero__slogen__heighlight"
            initial={{ left: "10vw" }}
            whileInView={{ left: "33.5vw" }}
            transition={{ ...transition, type: "tween", stiffness: 40 }}
          ></motion.div>
          <span className="hero__left-hero__slogen__text">
            {" "}
            Design Dreams,Spreading Smiles{" "}
          </span>
        </div>

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
