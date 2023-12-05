import React from "react";
import "./Service.css";
import checkbox from "../../assests/checkbox.png";

const Service = () => {
  return (
    <div className="service">
      <div className="service__topic">
        <span className="service__topic-2 ">Get our</span>
        <span className="stroke-text">&nbsp;Service</span>
      </div>

      <div className="service__container">
        <div className="service__container__left card">
          <div className="service__container__left-1">
            <img src={checkbox} className="checkbox" />
            <span>Business cards</span>
          </div>
          <div className="service__container__left-2">
            <img src={checkbox} className="checkbox" />
            <span>Thank you cards</span>
          </div>
          <div className="service__container__left-3">
            <img src={checkbox} className="checkbox" />
            <span>Display cards</span>
          </div>
        </div>

        <div className="service__container__midle card">
          <div className="service__container__midle-1">
            <img src={checkbox} className="checkbox" />
            <span>Address stickers</span>
          </div>
          <div className="service__container__midle-2">
            <img src={checkbox} className="checkbox" />
            <span>Logo stickers</span>
          </div>
          <div className="service__container__midle-3">
            <img src={checkbox} className="checkbox" />
            <span>Subject name card</span>
          </div>
        </div>

        <div className="service__container__right card">
          <div className="service__container__right-1">
            <img src={checkbox} className="checkbox" />
            <span>Logo design</span>
          </div>
          <div className="service__container__right-2">
            <img src={checkbox} className="checkbox" />
            <span>Product lable design</span>
          </div>
          <div className="service__container__right-3">
            <img src={checkbox} className="checkbox" />
            <span>And all kind of design works & printing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
