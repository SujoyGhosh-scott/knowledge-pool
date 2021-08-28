import React, { useState } from "react";
//import axios from "axios";
import { roverInfo } from "./data";
import RoverInfo from "./RoverInfo";
import MarsGallery from "./MarsGallery";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({}));

export default function MarsImages() {
  const [rover, setRover] = useState("curiosity");
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
        <Grid style={{ margin: "10px 0" }}>
          <RoverInfo
            data={roverInfo[rover]}
            rover={rover}
            setRover={setRover}
          />
        </Grid>
        <Typography variant="subtitle1">
          Below are some images taken by <strong>{rover}</strong> of the surface
          of Mars.
        </Typography>
        <MarsGallery />
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
}
