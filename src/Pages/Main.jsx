import React from "react";
import homebackground from "../backgrounds/1.svg";
import profile from "../backgrounds/avatar.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import "../CSS/fonts.css";
import "../CSS/main.css";
import Navbar from "../components/navbar"
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
  },
  paperbody: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#EC008C",
    fontFamily: "Ubuntu",
    background: "#FFF2F3",
    margin: "auto",
  },
  paperbodydetail: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#EC008C",
    fontFamily: "Ubuntu",
    margin: "auto",
    background: "#FFF2F3",
  },
  papertitle: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#EC008C",
    fontFamily: "Oswald",
    fontSize: "60px",
    margin: "auto",
    background: "#FFF2F3",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
    alignContent: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
    <Navbar/>
      <div className="main">
        <div
          className="background"
          style={{
            backgroundImage: `url(${homebackground})`,
            backgroundRepeat: "no-repeat",
            height: "300vh",
            backgroundSize: "cover",
            position: "relative",
            overflow: "scroll",
          }}
        >
          <div className={`center-text ${classes.root}`}>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Slide direction="right" in={true} timeout={800}>
                  <Paper className={classes.papertitle}>ZACHARY GOULD<Avatar className={classes.large} src={profile}></Avatar></Paper>
                </Slide>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Slide direction="left" in={true} timeout={800}>
                  <Paper className={classes.paperbody}>
                    Fullstack Engineer
                  </Paper>
                </Slide>
              </Grid>
            </Grid>
          </div>
        
       
          <div className={`center ${classes.root}`}>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Paper className={classes.papertitle}>ABOUT ME</Paper>
              </Grid>
              <Grid item xs={10} sm={7}>
                <Paper className={classes.paperbodydetail}>
                  <p>
                    After 6+ years of building and developing my own company I
                    have taken the skills and talents that I built in a
                    production environment and turned my sights on development.
                    <br></br>I learned a lot during my years as an owner and
                    managing partner. How to create a brand and a voice. How to
                    dive into a complicated technical world and become an expert
                    in the field. How to stay self-motivated and organized. How
                    to work under pressure and multi-task, but most importantly,
                    how to effectively turn creative ideas into real world
                    solutions.
                    <br></br>
                    After managing a team of 15 and making something that most
                    thought was impossible, I set my vision on my first passion
                    of working in tech; innovative, efficient, and captivating.
                    <br></br>
                    🔥 As a Full Stack Developer I work to:<br></br>
                    👾 Create memorable and original products that not only
                    aesthetically look amazing but are secure and functionally
                    exceptional<br></br>
                    👾 Constantly create, produce, and push the envelope on what
                    can be done in development<br></br>
                    👾 Participate and promote a developer community, leaving
                    the world a little more connected than I found it<br></br>
                    👉 If you're interested in working with me to help make your
                    vision a reality email me at{" "}
                    <a href="mailto:zacharyigould@gmail.com">
                      zacharyigould@gmail.com
                    </a>
                    <br></br>
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </div>

          <div className={`center ${classes.root}`}>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Paper className={classes.papertitle}>SKILLS</Paper>
              </Grid>

              <Grid container justify="center" spacing={3}>
                <Grid item xs={12} sm={3}>
                  <Paper className={classes.paperbody}>
                    <h1>EDUCATION</h1>
                    <ul className="list">
                      <li>
                        <h3>UNIVERSITY OF NEW MEXICO</h3> Bachelor's in Spanish
                        and Media Communications
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
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
