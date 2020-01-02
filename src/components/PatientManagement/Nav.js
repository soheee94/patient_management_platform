import React, { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";
import Tutorial from "./Tutorial";
import logo from "../../assets/logo.png";

function Nav() {
  // Date String
  // const today = new Date();
  // const dateString = today.toLocaleDateString("ko-KR", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   weekday: "long"
  // });

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isTutorialOpen, setTutorialOpen] = useState(false);
  const tutorialClose = () => setTutorialOpen(false);

  return (
    <>
      <div className="nav">
        {/* <p className="nav__date">{dateString}</p> */}
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
          <div
            className="nav__right__tutorial-btn"
            onClick={() => setTutorialOpen(!isTutorialOpen)}
          >
            <FiHelpCircle />
          </div>
        </div>
      </div>

      {isTutorialOpen && <Tutorial onClose={tutorialClose} />}
    </>
  );
}

export default Nav;
