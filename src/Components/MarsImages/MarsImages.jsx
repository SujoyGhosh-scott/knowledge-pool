import React, { useState } from "react";
import axios from "axios";
import { roverInfo } from "./data";
import RoverInfo from "./RoverInfo";
import MarsGallery from "./MarsGallery";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({}));

export default function MarsImages() {
  const [rover, setRover] = useState("spirit");
  //const classes = useStyles();

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
          <RoverInfo data={roverInfo[rover]} />
        </Grid>
        <Typography variant="subtitle1">
          Below are some images taken by {rover} of the surface of Mars.
        </Typography>
        <MarsGallery />
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
}
