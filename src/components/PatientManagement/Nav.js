import React, { useState } from "react";
import logo from "../../assets/logo.png";
import IconButton from "../IconButton";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Nav({ onTutorialOpen }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <div className="nav">
        <img src={logo} alt="logo" className="nav__logo" />
        <div className="nav__right">
          <div className={isDropdownOpen ? "nav__right__dropdown active" : "nav__right__dropdown"}>
            <div
              className="nav__right__dropdown__text"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              바른손성형외과
            </div>
            <div className="nav__right__dropdown__items">
              <div className="nav__right__dropdown__item">병원정보</div>
              <div className="nav__right__dropdown__item">로그아웃</div>
            </div>
          </div>
          <IconButton label="tutorial" onClick={onTutorialOpen}>
            <HelpOutlineIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default React.memo(Nav);
