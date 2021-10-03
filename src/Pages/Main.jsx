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
import profile from "../backgrounds/avatar.png";
import Particles from "react-particles-js";
import resume from "../data/resume.pdf";

const mountedStyle = {
  animation: "inAnimation 250ms ease-in",
};
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards",
};

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#b6b2b2",
      },
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      anim: {
        enable: true,
        speed: 12.181158184520175,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#f716ff73",
      opacity: 0.4,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
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
  },
  paperbodydetail: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#000000",
    fontFamily: "Ubuntu",
    margin: "auto",
    background: "#F5F5EF",
  },
  tagger: {
    padding: "1px 3px",
    textAlign: "center",
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
  },
}));

const Home = () => {
  const classes = useStyles();

  const [isMounted, setIsMounted] = useState(true);
  const [showDiv, setShowDiv] = useState(true);

  const [isMounted2, setIsMounted2] = useState(true);
  const [showDiv2, setShowDiv2] = useState(true);

  const [isMounted3, setIsMounted3] = useState(true);
  const [showDiv3, setShowDiv3] = useState(true);

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
            backgroundImage: `url(https://res.cloudinary.com/ziggysmalls/image/upload/q_auto,f_auto/v1633217648/bumxpowzfdaxy48aocav.png)`,
            backgroundRepeat: "no-repeat",
            height: "90vh",
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
                    <Avatar alt="profile" className={classes.large} src="https://res.cloudinary.com/ziggysmalls/image/upload/c_fit,h_277,q_auto/v1633217656/vntpofjkhq8cqedrcbxr.jpg"></Avatar>
                  </Paper>
                </Slide>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Slide direction="left" in={true} timeout={800}>
                  <Paper className={classes.tagger}>
                    <h4 className="wordCarousel">
                      <div>
                        <ul className="flip4">
                          <li>FRONTEND</li>
                          <li>BACKEND</li>
                          <li>FULLSTACK</li>
                          <li>DEVELOPER</li>
                        </ul>
                      </div>
                    </h4>
                  </Paper>
                </Slide>
              </Grid>
            </Grid>
          </div>
        </div>

        <Particles className="particles" params={particlesOptions} />
        <div className={`center ${classes.root}`}>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Button className={classes.buttonmain} onClick={handleClick2}>
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

            <Grid item xs={12} sm={7}>
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
        <div className={`center ${classes.root}`}>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Button onClick={handleClick1} className={classes.buttonmain}>
                <Paper className={classes.papertitle} id="about">
                  ABOUT ME
                </Paper>
              </Button>
            </Grid>

            <Grid item xs={12} sm={7}>
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
                      </p>
                      <h2 className="contact-span">
                        <a
                          className="contacted"
                          href="https://www.linkedin.com/in/zacharygo/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </a>
                        <a
                          className="contacted"
                          href="https://github.com/PixelCook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                        <a
                          className="contacted"
                          href={resume}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resume
                        </a>
                      </h2>
                      <br></br>
                    
                  </Paper>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
