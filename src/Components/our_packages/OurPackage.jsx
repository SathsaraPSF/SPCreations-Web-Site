import React from "react";
import "./OurPackage.css";
import checkbox from "../../assests/checkbox.png";

export const OurPackage = () => {
  return (
    <div className="package">
      <div className="package__name">
        <span className="package__name-1">Take</span>
        <span className="stroke-text"> Package</span>
        <span className="package__name-3"> & be happy</span>
      </div>

      <div className="package__item">
        <div className="package__item-1 card pacakge-card  ">
             <div className="package__item-2__price">
            <span className="package__item-2__price-1"> RS.1250/= </span>
            <span className="package__item-2__price-2">Special package</span>
          </div>

          <div className="package__item-2__items">
            <div className="package__item-2__items-1">
                <img src={checkbox} className="checkbox" />
                <span>Business cards</span>
            </div>
            <div className="package__item-2__items-2">
                <img src={checkbox} className="checkbox" />
                <span>Thank you cards</span>
            </div>
            <div className="package__item-2__items-3">
                <img src={checkbox} className="checkbox" />
                <span>Display cards</span>
            </div>
          </div>

          <button className="package__item-2__button pack-button">Get now</button>
        </div>
        
        <div className="package__item-2 card "> 
          <div className="package__item-2__price">
            <span className="package__item-2__price-1"> RS.1250/= </span>
            <span className="package__item-2__price-2">Special package</span>
          </div>

          <div className="package__item-2__items">
            <div className="package__item-2__items-1">
                <img src={checkbox} className="checkbox" />
                <span>Business cards</span>
            </div>
            <div className="package__item-2__items-2">
                <img src={checkbox} className="checkbox" />
                <span>Thank you cards</span>
            </div>
            <div className="package__item-2__items-3">
                <img src={checkbox} className="checkbox" />
                <span>Display cards</span>
            </div>
          </div>

          <button className="package__item-2__button pack-button">Get now</button>
        </div>
        
        
        <div className="package__item-3 card pacakge-card">
        <div className="package__item-2__price">
            <span className="package__item-2__price-1"> RS.1250/= </span>
            <span className="package__item-2__price-2">Special package</span>
          </div>

          <div className="package__item-2__items">
            <div className="package__item-2__items-1">
                <img src={checkbox} className="checkbox" />
                <span>Business cards</span>
            </div>
            <div className="package__item-2__items-2">
                <img src={checkbox} className="checkbox" />
                <span>Thank you cards</span>
            </div>
            <div className="package__item-2__items-3">
                <img src={checkbox} className="checkbox" />
                <span>Display cards</span>
            </div>
          </div>

          <button className="package__item-2__button pack-button">Get now</button>
        </div>
      </div>
    </div>
  );
};
