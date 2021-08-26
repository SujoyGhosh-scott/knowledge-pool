import React, { useState } from "react";
//import axios from "axios";
import { roverInfo } from "./data";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
  roverImage: {
    height: "100%",
    //maxWidth: "30%",
    objectFit: "contain",
    border: "1px solid lightgray",
    backgroundPosition: "center",
  },
}));

export default function MarsImages() {
  const [rover, setRover] = useState("spirit");
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={1} xs={false}></Grid>
      <Grid item sm={10} xs={12}>
        <Typography variant="h4" color="primary">
          Mars Rover Photos
        </Typography>
        <Typography variant="subtitle1">
          Here we show images of the surface of Mars gathered by NASA's
          Curiosity, Opportunity, and Spirit rovers. You can see images taken by
          all three rovers and even see images taken by specific camera using
          the given filter below.
        </Typography>
        <Grid style={{ marginTop: "1rem" }}>
          <Card
            style={{ borderRadius: 10, display: "flex", height: 180 }}
            variant="outlined"
          >
            <img
              src={roverInfo[rover].image}
              className={classes.roverImage}
              alt=""
            />
            <CardContent style={{ flex: 1 }}>
              <Typography variant="h6" color="primary">
                {rover}
              </Typography>
              <Divider />
              <p>launch date: {roverInfo[rover].launchDate}</p>
              <p>land date: {roverInfo[rover].landDate}</p>
              <p>staus: {roverInfo[rover].status}</p>
            </CardContent>
          </Card>
        </Grid>
        <Typography variant="subtitle1">
          Below are some images taken by {rover} of the surface of Mars.
        </Typography>
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
}
