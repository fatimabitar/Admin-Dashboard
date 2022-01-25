import React from "react";
import "../css/sidebar.css";
import {
  MdLineStyle,
  MdTimeline,
  MdTrendingUp,
  MdProductionQuantityLimits,
  MdOutlineMarkEmailUnread,
  MdOutlineMessage,
  MdDataSaverOff,
  MdInfoOutline,
} from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { RiBarChartLine, RiExchangeDollarLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <MdLineStyle className="sidebar__icon" />
              Home
            </li>
            <li className="sidebar__listItem">
              <MdTimeline className="sidebar__icon" />
              Analytics
            </li>
            <li className="sidebar__listItem">
              <MdTrendingUp className="sidebar__icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Quic Menu</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <FiUser className="sidebar__icon" />
              Users
            </li>
            <li className="sidebar__listItem">
              <MdProductionQuantityLimits className="sidebar__icon" />
              Products
            </li>
            <li className="sidebar__listItem">
              <RiExchangeDollarLine className="sidebar__icon" />
              Transactions
            </li>
            <li className="sidebar__listItem">
              <RiBarChartLine className="sidebar__icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Notifications</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <MdOutlineMarkEmailUnread className="sidebar__icon" />
              Mails
            </li>
            <li className="sidebar__listItem">
              <MdDataSaverOff className="sidebar__icon" />
              Feadback
            </li>
            <li className="sidebar__listItem">
              <MdOutlineMessage className="sidebar__icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Staff</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <MdLineStyle className="sidebar__icon" />
              Manage
            </li>
            <li className="sidebar__listItem">
              <MdTimeline className="sidebar__icon" />
              Analytics
            </li>
            <li className="sidebar__listItem">
              <MdInfoOutline className="sidebar__icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
