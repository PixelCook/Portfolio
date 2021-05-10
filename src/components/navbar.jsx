import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import khamsa from "../backgrounds/khamsa.svg";
import IconButton from "@material-ui/core/IconButton";
import { CSSTransition } from "react-transition-group";
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
                <a href="#about">
                  <li>ABOUT ME</li>
                </a>
                <a href="#skills">
                  <li>SKILLS</li>
                </a>
                <a href="#portfolio">
                  <li>PORTFOLIO</li>
                </a>
              </ul>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
