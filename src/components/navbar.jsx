import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import khamsa from "../backgrounds/khamsa.svg";
import IconButton from "@material-ui/core/IconButton";
import "../CSS/navbar.css";

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

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="start">
        <Toolbar>
        { open && 
             <ul className="nav-list">
               <a href="#about"><li>ABOUT ME</li></a>
               <a href="#skills"><li>SKILLS</li></a>
               <a href="#portfolio"><li>PORTFOLIO</li></a>
              </ul>
}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <img alt="menu" className="khamsa" src={khamsa}></img>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
