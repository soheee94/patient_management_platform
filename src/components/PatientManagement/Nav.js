import React, { useState } from "react";
import logo from "../../assets/logo.png";
import IconButton from "../IconButton";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

function Nav({ onTutorialOpen }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <>
      <div className="nav">
        <img src={logo} alt="logo" className="nav__logo" />
        <div className="nav__right">
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Toggle Menu Grow
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          {/* <div className={isDropdownOpen ? "nav__right__dropdown active" : "nav__right__dropdown"}>
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
          </div> */}
          <IconButton label="tutorial" onClick={onTutorialOpen}>
            <HelpOutlineIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default React.memo(Nav);
