import React from "react";
import "../css/user.css";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUpload } from "react-icons/hi";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="user__titleContainer">
        <h1 className="user__title">Edit User</h1>
        <Link to="/newUser">
          <button className="user__addUser">Create</button>
        </Link>
      </div>
      <div className="user__container">
        <div className="user__show">
          <div className="user__showTop">
            <img
              src="https://www.w3schools.com/w3images/avatar6.png"
              alt=""
              className="user__showImg"
            />
            <div className="user__showTopTitle">
              <span className="user__showUserName">Anna Backer</span>
              <span className="user__showUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="user__showBottom">
            <span className="user__showTitle">Account Details</span>
            <div className="user__showInfo">
              <AiOutlineUser className="user__showIcon" />
              <span className="user__showInfoTitle">annaback99</span>
            </div>
            <div className="user__showInfo">
              <MdDateRange className="user__showIcon" />
              <span className="user__showInfoTitle">10.12.1999</span>
            </div>
            <span className="user__showTitle">Contact Details</span>
            <div className="user__showInfo">
              <AiOutlinePhone className="user__showIcon" />
              <span className="user__showInfoTitle">+1 123 456 67</span>
            </div>
            <div className="user__showInfo">
              <AiOutlineMail className="user__showIcon" />
              <span className="user__showInfoTitle">annaback99@gmail.com</span>
            </div>
            <div className="user__showInfo">
              <IoLocationOutline className="user__showIcon" />
              <span className="user__showInfoTitle">NewYork | USA</span>
            </div>
          </div>
        </div>
        <div className="user__update">
          <span className="user__udateTitle">Edit</span>
          <form className="user__updateForm">
            <div className="user__updateLeft">
              <div className="user__updateItem">
                <label>User Name</label>
                <input
                  type="text"
                  className="user__updateInput"
                  placeholder="annabake99"
                />
              </div>
              <div className="user__updateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="user__updateInput"
                  placeholder="Anna Baker"
                />
              </div>
              <div className="user__updateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="user__updateInput"
                  placeholder="annabake99@gmail.com"
                />
              </div>
              <div className="user__updateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="user__updateInput"
                  placeholder="+1 123 456 67"
                />
              </div>
              <div className="user__updateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="user__updateInput"
                  placeholder="NewYork | USA"
                />
              </div>
            </div>
            <div className="user__updateRight">
              <div className="user__updateUpload">
                <img
                  src="https://www.w3schools.com/w3images/avatar6.png"
                  alt=""
                  className="user__updateUploadImg"
                />
                <label htmlFor="file">
                  <HiOutlineUpload className="user__updateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user__updateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
