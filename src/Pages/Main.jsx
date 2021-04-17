import React from "react";
import homebackground from "../backgrounds/1.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../CSS/fonts.css"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto'
  },
  paperbody: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#EC008C",
    fontFamily: 'Ubuntu',
  },
  papertitle: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#EC008C",
    fontFamily: 'Oswald',
    fontSize: '48px',
    margin: 'auto'
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url(${homebackground})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.papertitle}>Zachary Gould</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paperbody}>xs=12</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
