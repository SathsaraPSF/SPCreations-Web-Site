import React from "react";
import "./Service.css";
import checkbox from "../../assests/checkbox.png";
import { motion, transform } from "framer-motion";

const Service = () => {
  const transition = { type: "spring", duration: 0.5 };
  return (
    <div className="service">
      <motion.div
        className="service__topic"
        initial={{ left: "5vw" }}
        whileInView={{
          left: "50%",
          x: "-50%",
          transition: { ...transition, type: "spring", stiffness: 40 },
        }}
      >
        <span className="service__topic-2 ">Get our</span>
        <span className="stroke-text">&nbsp;Service</span>
      </motion.div>

      <div className="service__container">
        <div className="service__container__left card">
          <motion.div
            className="service__container__left-1"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={checkbox} className="checkbox" />
            <span>Business cards</span>
          </motion.div>
          <motion.div
            className="service__container__left-2"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={checkbox} className="checkbox" />
            <span>Thank you cards</span>
          </motion.div>
          <motion.div
            className="service__container__left-3"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={checkbox} className="checkbox" />
            <span>Display cards</span>
          </motion.div>
        </div>

        <div className="service__container__midle card">
          <motion.div
            className="service__container__midle-1"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={checkbox} className="checkbox" />
            <span>Address stickers</span>
          </motion.div>
          <motion.div
            className="service__container__midle-2"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={checkbox} className="checkbox" />
            <span>Logo stickers</span>
          </motion.div>
          <motion.div
            className="service__container__midle-3"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={checkbox} className="checkbox" />
            <span>Subject name card</span>
          </motion.div>
        </div>

        <div className="service__container__right card">
          <motion.div
            className="service__container__right-1"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={checkbox} className="checkbox" />
            <span>Logo design</span>
          </motion.div>
          <motion.div
            className="service__container__right-2"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={checkbox} className="checkbox" />
            <span>Product lable design</span>
          </motion.div>
          <motion.div
            className="service__container__right-3"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={checkbox} className="checkbox" />
            <span>And all kind of design works & printing</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
