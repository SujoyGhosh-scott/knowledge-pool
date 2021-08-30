import React, { useState, useEffect } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { roverInfo } from "./data";
import RoverInfo from "./RoverInfo";
import MarsGallery from "./MarsGallery";
import SensorFilter from "./SensorFilter";

export default function MarsImages() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [rover, setRover] = useState("spirit");
  const [selectedCamera, setSelectedCamera] = useState("");
  const [sol, setSol] = useState(1);

  const getImages = () => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=${page}&api_key=1hfhPJW0UurCQ3OQGwoHWFCzGawcE9k8lbJDos0B`
      )
      .then((res) => {
        console.log("mars data: ", res.data.photos);
        setData(res.data.photos);
      })
      .catch((err) => console.log("error: ", err.message));
  };

  const getMoreImages = (sol, page) => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=${page}&api_key=1hfhPJW0UurCQ3OQGwoHWFCzGawcE9k8lbJDos0B`
      )
      .then((res) => {
        console.log("more mars data: ", res.data.photos);
        if (res.data.photos.length === 0) {
          //if there are no more photos in this sol
          //so we make go to the next sol, fetch the first page
          getMoreImages(sol + 1, 1);
          console.log("calling again");
        } else {
          //otherwise we append the returned data in the end and increase page no.
          setData(data.concat(res.data.photos));
          setSol(res.data.photos[0].sol);
          let pageSetter = page;
          if (page !== 1) page++;
          setPage(pageSetter);
        }
      });
  };

  const filterImages = () => {
    if (selectedCamera === "") return;
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${1}&camera=${selectedCamera}&api_key=1hfhPJW0UurCQ3OQGwoHWFCzGawcE9k8lbJDos0B`
      )
      .then((res) => {
        console.log("searched data: ", res.data.photos);
        setData(res.data.photos);
      })
      .catch((err) => console.log("error: ", err.message));
  };

  const refreshList = () => {
    console.log("hello form refreshlist");
    setPage(1);
    setSol(1);
    setSelectedCamera("");
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${1}&page=${1}&api_key=1hfhPJW0UurCQ3OQGwoHWFCzGawcE9k8lbJDos0B`
      )
      .then((res) => {
        console.log("refresh data: ", res.data.photos);
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
          filterImages={filterImages}
          refreshList={refreshList}
        />
        <MarsGallery
          data={data}
          page={page}
          getMoreImages={getMoreImages}
          sol={sol}
        />
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
}
