import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import CircularProgress from "@material-ui/core/CircularProgress";

import { roverInfo } from "./data";
import RoverInfo from "./RoverInfo";
import MarsGallery from "./MarsGallery";
import SensorFilter from "./SensorFilter";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

export default function MarsImages() {
  const [data, setData] = useState([]);
  const [rover, setRover] = useState("curiosity");
  const [selectedCamera, setSelectedCamera] = useState("");
  //const classes = useStyles();

  const getImages = () => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=200&api_key=1hfhPJW0UurCQ3OQGwoHWFCzGawcE9k8lbJDos0B`
      )
      .then((res) => {
        console.log("mars data: ", res.data.photos);
        setData(res.data.photos);
      })
      .catch((err) => console.log("error: ", err.message));
  };

  useEffect(() => {
    getImages();
  }, [rover]);

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
          of Mars. Click on the image to see in hight resolution.
        </Typography>
        <SensorFilter
          cameras={roverInfo[rover].camera}
          camName={roverInfo[rover].cameraName}
          selectedCamera={selectedCamera}
          setSelectedCamera={setSelectedCamera}
        />
        {data.length === 0 ? (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : (
          <MarsGallery data={data} />
        )}
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
}
