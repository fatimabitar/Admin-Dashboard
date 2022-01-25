import React from "react";
import "../css/widgetsm.css";
import { MdVisibility } from "react-icons/md";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSm__title">New Join Members</span>
      <ul className="widgetSm__list">
        <li className="widgetSm__listItem">
          <img
            src="https://www.w3schools.com/w3images/avatar5.png"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__userName">Anna Keller</span>
            <span className="widgetSm__jobTitle">Software Engineer</span>
          </div>
          <button className="widgetSm__btn">
            <MdVisibility className="widgetSm__icon" />
            display
          </button>
        </li>
        <li className="widgetSm__listItem">
          <img
            src="https://www.w3schools.com/w3images/avatar5.png"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__userName">Anna Keller</span>
            <span className="widgetSm__jobTitle">Software Engineer</span>
          </div>
          <button className="widgetSm__btn">
            <MdVisibility className="widgetSm__icon" />
            display
          </button>
        </li>
        <li className="widgetSm__listItem">
          <img
            src="https://www.w3schools.com/w3images/avatar5.png"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__userName">Anna Keller</span>
            <span className="widgetSm__jobTitle">Software Engineer</span>
          </div>
          <button className="widgetSm__btn">
            <MdVisibility className="widgetSm__icon" />
            display
          </button>
        </li>
        <li className="widgetSm__listItem">
          <img
            src="https://www.w3schools.com/w3images/avatar5.png"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__userName">Anna Keller</span>
            <span className="widgetSm__jobTitle">Software Engineer</span>
          </div>
          <button className="widgetSm__btn">
            <MdVisibility className="widgetSm__icon" />
            display
          </button>
        </li>
        <li className="widgetSm__listItem">
          <img
            src="https://www.w3schools.com/w3images/avatar5.png"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__userName">Anna Keller</span>
            <span className="widgetSm__jobTitle">Software Engineer</span>
          </div>
          <button className="widgetSm__btn">
            <MdVisibility />
            display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
