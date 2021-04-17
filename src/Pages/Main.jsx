import React, { useState } from "react";
import homebackground from "../backgrounds/1.svg";
import homebackground2 from "../backgrounds/2.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import VizSensor from "react-visibility-sensor";
import "../CSS/fonts.css";
import "../CSS/main.css";

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
  },
  paperbodydetail: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#EC008C",
    fontFamily: "Ubuntu",
  },
  papertitle: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#EC008C",
    fontFamily: "Oswald",
    fontSize: "60px",
    margin: "auto",
  },
}));

const Home = () => {
  const classes = useStyles();

  let [vizActive, setVizActive] = useState(false);
  let [vizActive2, setVizActive2] = useState(false);

  return (
    <>
      <div className="main">
        <div
          className="background"
          style={{
            backgroundImage: `url(${homebackground})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          <div className={`center-text ${classes.root}`}>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Slide direction="right" in={true} timeout={800}>
                  <Paper className={classes.papertitle}>Zachary Gould</Paper>
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
        </div>
        <div
          className="background"
          style={{
            backgroundImage: `url(${homebackground2})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "cover",
            overflow: "scroll",
          }}
        >
          <VizSensor
            onChange={(isVisible) => {
              setVizActive(isVisible);
            }}
          >
            <div className={`center ${classes.root}`}>
              <Slide direction="left" in={vizActive} timeout={800}>
                <Grid container justify="center" spacing={3}>
                  <Grid item xs={12} sm={7}>
                    <Paper className={classes.papertitle}>about me</Paper>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Paper className={classes.paperbodydetail}>
                      <p>
                        After 6+ years of building and developing my own company
                        I have taken the skills and talents that I built in a
                        production environment and turned my sights on
                        development.<br></br>I learned a lot during my years as
                        an owner and managing partner. How to create a brand and
                        a voice. How to dive into a complicated technical world
                        and become an expert in the field. How to stay
                        self-motivated and organized. How to work under pressure
                        and multi-task, but most importantly, how to effectively
                        turn creative ideas into real world solutions.
                        <br></br>
                        After managing a team of 15 and making something that
                        most thought was impossible, I set my vision on my first
                        passion of working in tech; innovative, efficient, and
                        captivating.
                        <br></br>
                        🔥 As a Full Stack Developer I work to:<br></br>
                        👾 Create memorable and original products that not only
                        aesthetically look amazing but are secure and
                        functionally exceptional<br></br>
                        👾 Constantly create, produce, and push the envelope on
                        what can be done in development<br></br>
                        👾 Participate and promote a developer community,
                        leaving the world a little more connected than I found
                        it<br></br>
                        👉 If you're interested in working with me to help make
                        your vision a reality email me at{" "}
                        <a href="mailto:zacharyigould@gmail.com">
                          zacharyigould@gmail.com
                        </a>
                        <br></br>
                      </p>
                    </Paper>
                  </Grid>
                </Grid>
              </Slide>
            </div>
          </VizSensor>
        </div>
        <div
          className="background"
          style={{
            backgroundImage: `url(${homebackground2})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          <VizSensor
            onChange={(isVisible) => {
              setVizActive2(isVisible);
            }}
          >
            <div className={`center ${classes.root}`}>
              <Slide direction="right" in={vizActive2} timeout={800}>
                <Grid container justify="center" spacing={3}>
                  <Grid item xs={12} sm={7}>
                    <Paper className={classes.papertitle}>poop</Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={` ${classes.paperbodydetail}`}>
                      <p></p>
                    </Paper>
                  </Grid>
                </Grid>
              </Slide>
            </div>
          </VizSensor>
        </div>
      </div>
    </>
  );
};

export default Home;
