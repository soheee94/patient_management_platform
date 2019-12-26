import React, { useState } from "react";
import { MdHelpOutline } from "react-icons/md";

function Nav() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  });

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="nav">
      <p className="nav__date">{dateString}</p>
      <div className="nav__right">
        <div className={isOpen ? "nav__right__dropdown active" : "nav__right__dropdown"}>
          <div className="nav__right__dropdown__text" onClick={() => setOpen(!isOpen)}>
            바른손정형외과
          </div>
          <div className="nav__right__dropdown__items">
            <div className="nav__right__dropdown__item">병원정보</div>
            <div className="nav__right__dropdown__item">로그아웃</div>
          </div>
        </div>
        <div className="nav__right__tutorial-btn">
          <MdHelpOutline />
        </div>
      </div>
    </div>
  );
}

export default Nav;
