import React from "react";
import "./OurPackage.css";
import checkbox from "../../assests/checkbox.png";
import { motion } from "framer-motion";

export const OurPackage = () => {
  const transition = { type: "spring", duration: 5 };

  const sendMessage = () => {
    let package_name = document.getElementById("package-name").innerText;
    console.log(package_name);
    window.open(
      `https://wa.me/message/L56X7SMOIJHUL1?text=${encodeURIComponent(
        package_name
      )}`,
      "_blank"
    );
  };

  return (
    <div className="package" id="packages">
      <motion.div
        className="package__name"
        // initial={{ left: "1vw" }}
        // whileInView={{
        //   left: "15vw",
        //   transition: { ...transition, type: "spring" },
        // }}
      >
        <span className="package__name-1">Take a</span>
        <span className="main-headers"> Package</span>
        <span className="package__name-3"> & be happy</span>
      </motion.div>

      <div className="package__item">
        {/* Package reflection left */}
        <div className="package__item-1 card pacakge-card  ">
          <div className="package__item-2__price">
            <span className="package__item-2__price-1"> RS.1250/= </span>
            <span className="package__item-2__price-2">Special package</span>
          </div>

          <div className="package__item-2__items">
            <div className="package__item-2__items-1">
              <img src={checkbox} className="checkbox" />
              <span>
                Thank you cards{" "}
                <strong style={{ color: "var(--seccondPrimaryColor)" }}>
                  50
                </strong>
              </span>
            </div>

            <div className="package__item-2__items-2">
              <img src={checkbox} className="checkbox" />
              <span>
                Logo stickers{" "}
                <strong style={{ color: "var(--seccondPrimaryColor)" }}>
                  60
                </strong>
              </span>
            </div>

            <div className="package__item-2__items-3">
              <img src={checkbox} className="checkbox" />
              <span>
                Address stickers{" "}
                <strong style={{ color: "var(--seccondPrimaryColor)" }}>
                  30
                </strong>
              </span>
            </div>
          </div>

          <button className="package__item-2__button pack-button">
            Get now
          </button>
        </div>

        {/* Package */}
        <div className="package__item-2 card ">
          <div id="package-name" className="package__item-2__price">
            <span className="package__item-2__price-1"> RS.1250/= </span>
            <span className="package__item-2__price-2">Special package</span>
          </div>

          <div className="package__item-2__items">
            <motion.div
              className="package__item-2__items-1"
              whileHover={{
                scale: 1.1,
                originX: 0,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={checkbox} className="checkbox" />
              <span>
                Thank you cards{" "}
                <strong style={{ color: "var(--seccondPrimaryColor)" }}>
                  50
                </strong>
              </span>
            </motion.div>
            <motion.div
              className="package__item-2__items-2"
              whileHover={{
                scale: 1.1,
                originX: 0,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={checkbox} className="checkbox" />
              <span>
                Logo stickers{" "}
                <strong style={{ color: "var(--seccondPrimaryColor)" }}>
                  60
                </strong>
              </span>
            </motion.div>
            <motion.div
              className="package__item-2__items-3"
              whileHover={{
                scale: 1.1,
                originX: 0,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={checkbox} className="checkbox" />
              <span>
                Address stickers{" "}
                <strong style={{ color: "var(--seccondPrimaryColor)" }}>
                  30
                </strong>
              </span>
            </motion.div>
          </div>

          <motion.button
            className="package__item-2__button pack-button"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgba(255,255,255)",
              boxShadow: "0px 0px 3px rgba(255,255,255)",
            }}
            onClick={() => {
              sendMessage();
            }}
          >
            Get now
          </motion.button>
        </div>

        {/* Package reflection right */}
        <div className="package__item-3 card pacakge-card">
          <div className="package__item-2__price">
            <span className="package__item-2__price-1"> RS.1250/= </span>
            <span className="package__item-2__price-2">Special package</span>
          </div>

          <div className="package__item-2__items">
            <div className="package__item-2__items-1">
              <img src={checkbox} className="checkbox" />
              <span>
                Thank you cards{" "}
                <strong style={{ color: "var(--seccondPrimaryColor)" }}>
                  50
                </strong>
              </span>
            </div>
            <div className="package__item-2__items-2">
              <img src={checkbox} className="checkbox" />
              <span>
                Logo stickers{" "}
                <strong style={{ color: "var(--seccondPrimaryColor)" }}>
                  60
                </strong>
              </span>
            </div>
            <div className="package__item-2__items-3">
              <img src={checkbox} className="checkbox" />
              <span>
                Address stickers{" "}
                <strong style={{ color: "var(--seccondPrimaryColor)" }}>
                  30
                </strong>
              </span>
            </div>
          </div>

          <button className="package__item-2__button pack-button">
            Get now
          </button>
        </div>
      </div>
    </div>
  );
};
