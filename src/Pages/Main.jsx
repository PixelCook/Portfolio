import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Navbar from "../components/navbar";
import { Avatar, Button } from "@material-ui/core";
import Gridlist from "../components/gridlist";
import "../CSS/fonts.css";
import "../CSS/main.css";
import homebackground from "../backgrounds/beach.png";
import profile from "../backgrounds/avatar.jpeg";

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
    margin: "auto",
  },
  paperbody: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#000000",
    fontFamily: "Ubuntu",
    background: "#F5F5EF",
    margin: "auto",
    zindex: "1",
  },
  paperbodydetail: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#000000",
    fontFamily: "Ubuntu",
    margin: "auto",
    background: "#F5F5EF",
  },
  papertitle: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#464646",
    fontFamily: "Oswald",
    fontSize: "60px",
    margin: "auto",
    background: "#F5F5EF",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
    alignContent: "center",
  },
  buttonmain: {
    width: "100%",
  }
}));

const Home = () => {
  const classes = useStyles();

  const [isMounted, setIsMounted] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const [isMounted2, setIsMounted2] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);

  const [isMounted3, setIsMounted3] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const handleClick1 = () => {
    setIsMounted(!isMounted);
    if (!showDiv) setShowDiv(true);
  };

  const handleClick2 = () => {
    setIsMounted2(!isMounted2);
    if (!showDiv2) setShowDiv2(true);
  };

  const handleClick3 = () => {
    setIsMounted3(!isMounted3);
    if (!showDiv3) setShowDiv3(true);
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <div
          className="background"
          style={{
            backgroundImage: `url(${homebackground})`,
            backgroundRepeat: "no-repeat",
            height: "85vh",
            backgroundSize: "cover",
            backgroundposition: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className={`center-text ${classes.root}`}>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Slide direction="right" in={true} timeout={800}>
                  <Paper className={classes.papertitle}>
                    ZACHARY GOULD
                    <Avatar className={classes.large} src={profile}></Avatar>
                  </Paper>
                </Slide>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Slide direction="left" in={true} timeout={800}>
                  <Paper className={classes.paperbody}>Fullstack</Paper>
                </Slide>
              </Grid>
            </Grid>
          </div>
        </div>

        <div class='wrap'>
          <div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  <div class='c'></div>
  </div>

        <div className={`center ${classes.root}`}>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Button onClick={handleClick1} className={classes.buttonmain}>
                <Paper className={classes.papertitle} id="about">
                  ABOUT ME
                </Paper>
              </Button>
            </Grid>

            <Grid item xs={10} sm={7}>
              {showDiv && (
                <div
                  className="transitionDiv"
                  style={isMounted ? mountedStyle : unmountedStyle}
                  onAnimationEnd={() => {
                    if (!isMounted) setShowDiv(false);
                  }}
                >
                  <Paper className={classes.paperbodydetail}>
                    <p>
                      🔥 As a Full Stack Developer I work to:<br></br>
                      👾 Create memorable and original products that not only
                      aesthetically look amazing but are secure and functionally
                      exceptional<br></br>
                      👾 Constantly create, produce, and push the envelope on
                      what can be done in development<br></br>
                      👾 Participate and promote a developer community, leaving
                      the world a little more connected than I found it<br></br>{" "}
                      <br></br>
                      After 6+ years of building and developing my own company I
                      have taken the skills and talents that I built in a
                      production environment and turned my sights on
                      development.
                      <br></br>I learned a lot during my years as an owner and
                      managing partner. How to create a brand and a voice. How
                      to dive into a complicated technical world and become an
                      expert in the field. How to stay self-motivated and
                      organized. How to work under pressure and multi-task, but
                      most importantly, how to effectively turn creative ideas
                      into real world solutions.
                      <br></br>
                      After managing a team of 15 and making something that most
                      thought was impossible, I set my vision on my first
                      passion of working in tech; innovative, efficient, and
                      captivating.
                      <br></br>
                      👉 If you're interested in working with me to help make
                      your vision a reality email me at
                      <a href="mailto:zacharyigould@gmail.com">
                        zacharyigould@gmail.com
                      </a>
                      <h2>
                        <a
                          className="contact"
                          href="https://www.linkedin.com/in/zacharygo/"
                        >
                          LinkedIn
                        </a>
                        <a
                          className="contact"
                          href="https://github.com/PixelCook"
                        >
                          GitHub
                        </a>
                      </h2>
                      <br></br>
                    </p>
                  </Paper>
                </div>
              )}
            </Grid>
          </Grid>
        </div>

        <div className={`center ${classes.root}`}>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Button
                className={classes.buttonmain}
                onClick={handleClick2}
              >
                <Paper className={classes.papertitle} id="skills">
                  SKILLS
                </Paper>
              </Button>
            </Grid>

            {showDiv2 && (
              <div
                className="transitionDiv"
                style={isMounted2 ? mountedStyle : unmountedStyle}
                onAnimationEnd={() => {
                  if (!isMounted2) setShowDiv2(false);
                }}
              >
                <Grid container justify="center" spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <Paper className={classes.paperbody}>
                      <h1>EDUCATION</h1>
                      <ul className="list">
                        <li>
                          <h3>UNIVERSITY OF NEW MEXICO</h3> Bachelor's in
                          Spanish and Media Communications
                        </li>
                        <li>
                          <h3>UNIVERSIDAD DE CONCEPCION</h3> Print and Broadcast
                          journalism
                        </li>
                      </ul>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Paper className={classes.paperbody}>
                      <h1>PROFESSIONAL SKILLS</h1>
                      <ul className="list">
                        <li>
                          <h3>COMMUNICATION</h3>
                        </li>
                        <li>
                          <h3>LEADERSHIP</h3>
                        </li>
                        <li>
                          <h3>TIME MANAGEMENT</h3>
                        </li>
                        <li>
                          <h3>ATTENTION TO DETAIL</h3>
                        </li>
                        <li>
                          <h3>PROBLEM SOLVING</h3>
                        </li>
                        <li>
                          <h3>CREATIVITY</h3>
                        </li>
                      </ul>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Paper className={classes.paperbody}>
                      <h1>TECHNICAL SKILLS</h1>
                      <ul className="list">
                        <li>
                          <h3>FRONTEND</h3>
                        </li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Wordpress</li>
                        <li>Materiul UI, BOOTSTRAP, CSS grid... and more</li>
                        <li>
                          <h3>BACKEND</h3>
                        </li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                        <li>Heroku</li>
                      </ul>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            )}
          </Grid>
        </div>

        <div className={`center ${classes.root}`}>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Button onClick={handleClick3} className={classes.buttonmain}>
                <Paper className={classes.papertitle} id="portfolio">
                  PORTFOLIO
                </Paper>
              </Button>
            </Grid>

            <Grid item xs={10} sm={7}>
              {showDiv3 && (
                <div
                  className="transitionDiv"
                  style={isMounted3 ? mountedStyle : unmountedStyle}
                  onAnimationEnd={() => {
                    if (!isMounted3) setShowDiv3(false);
                  }}
                >
                  <Paper className={classes.paperbodydetail}>
                    <Gridlist />
                  </Paper>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
