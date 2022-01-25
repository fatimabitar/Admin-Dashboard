import React from "react";
import "../css/topbar.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="topLeft">
          <span className="logo">LOGO</span>
        </div>
        <div className="topRight">
          <div className="topbar__iconContainer">
            <IoMdNotificationsOutline className="icon" />
            <span className="topbar__iconBadge">2</span>
          </div>
          <div className="topbar__iconContainer">
            <MdLanguage className="icon" />
            <span className="topbar__iconBadge">2</span>
          </div>
          <div className="topbar__iconContainer">
            <FiSettings className="icon" />
          </div>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
            className="top__avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
