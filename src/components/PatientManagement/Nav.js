import React, { useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Tutorial from "./Tutorial";
import logo from "../../assets/logo_cordia.png";

function Nav() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  });

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isTutorialOpen, setTutorialOpen] = useState(false);

  return (
    <>
      <div className="nav">
        {/* <p className="nav__date">{dateString}</p> */}
        <img src={logo} alt="logo" className="nav__logo" />
        <div className="nav__right">
          <div
            className={
              isDropdownOpen
                ? "nav__right__dropdown active"
                : "nav__right__dropdown"
            }
          >
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
          <div
            className="nav__right__tutorial-btn"
            onClick={() => setTutorialOpen(!isTutorialOpen)}
          >
            <IoIosHelpCircleOutline />
          </div>
        </div>
      </div>

      {isTutorialOpen && <Tutorial />}
    </>
  );
}

export default Nav;
