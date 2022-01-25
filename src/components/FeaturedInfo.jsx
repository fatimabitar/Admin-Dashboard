import React from "react";
import "../css/featured.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured__item">
        <span className="featured__title">Revenue</span>
        <div className="featured__moneyContainer">
          <span className="featured__money">$2.14</span>
          <span className="featured__rate">
            -11.4 <AiOutlineArrowDown className="featured__icon negative" />
          </span>
        </div>
        <span className="featured__sub">Compared to last manth</span>
      </div>
      <div className="featured__item">
        <span className="featured__title">Sales</span>
        <div className="featured__moneyContainer">
          <span className="featured__money">$4.14</span>
          <span className="featured__rate">
            -1.4 <AiOutlineArrowDown className="featured__icon negative" />
          </span>
        </div>
        <span className="featured__sub">Compared to last manth</span>
      </div>
      <div className="featured__item">
        <span className="featured__title">Cost</span>
        <div className="featured__moneyContainer">
          <span className="featured__money">$4.14</span>
          <span className="featured__rate">
            -1.4 <AiOutlineArrowUp className="featured__icon positive" />
          </span>
        </div>
        <span className="featured__sub">Compared to last manth</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
