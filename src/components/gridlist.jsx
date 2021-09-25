import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import tileData from "../data/tiledata.js";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto",
    backgroundColor: "#F5F5EF",
  },
  gridList: {
    width: "90%",
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
    justifyContent: "flex-start",
    padding: "0 10px",
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}))(Tooltip);

export default function TitleGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}  >
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Recent Projects</ListSubheader>
        </GridListTile >
        {tileData.map((tile) => (
          <LightTooltip className={classes.tooltip} title={tile.about}>
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />

              <GridListTileBar
                title={tile.title}
                subtitle={<span>About: {tile.about}</span>}
                actionIcon={
                  <>
                    <a href={tile.url} target="_blank" rel="noreferrer" >
                      <IconButton
                        aria-label={`Go to website for ${tile.title}`}
                        className={classes.icon}
                      >
                        <ExitToAppIcon />
                      </IconButton>
                    </a>
                    <a href={tile.git} target="_blank" rel="noreferrer" >
                      <IconButton
                        aria-label={`Git for ${tile.title}`}
                        className={classes.icon}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </>
                }
              />
            </GridListTile>
          </LightTooltip>
        ))}
      </GridList>
    </div>
  );
}
