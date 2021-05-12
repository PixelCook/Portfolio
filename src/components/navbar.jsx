import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import khamsa from "../backgrounds/khamsa.svg";
import IconButton from "@material-ui/core/IconButton";
import { HashLink } from "react-router-hash-link";
import "../CSS/navbar.css";

const mountedStyle = {
  animation: "inAnimation 250ms ease-in",
};
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color: "transparent",
}));

export default function Navbar() {
  const classes = useStyles();
  const [isMounted, setIsMounted] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setIsMounted(!isMounted);
    if (!showDiv) setShowDiv(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="start">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <img alt="menu" className="khamsa" src={khamsa}></img>
          </IconButton>
          {showDiv && (
            <div
              className="transitionDiv"
              style={isMounted ? mountedStyle : unmountedStyle}
              onAnimationEnd={() => {
                if (!isMounted) setShowDiv(false);
              }}
            >
              <ul className="nav-list">
                <HashLink smooth to={"#about"}>
                  <li>ABOUT ME</li>
                </HashLink>
                <HashLink smooth to={"#skills"}>
                  <li>SKILLS</li>
                </HashLink>
                <HashLink smooth to={"#portfolio"}>
                  <li>PORTFOLIO</li>
                </HashLink>
              </ul>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
