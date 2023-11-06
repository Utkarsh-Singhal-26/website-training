import React from "react";
import Logo from "./U.jpg";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <div className="Header">
      <img src={Logo} alt="Profile Pic" className="profile-photo" />
      <div className="info">
        <h2>Utkarsh Singhal</h2>
        <h4>Frontend Developer</h4>
        <p className="email">
          <AiOutlineMail className="icon" /> Email
        </p>
        <p className="linkedin">
          <AiFillLinkedin className="icon" /> Linkedin
        </p>
      </div>
    </div>
  );
};

export default Header;
