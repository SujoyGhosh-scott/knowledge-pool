import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  input: {
    marginRight: "1rem",
    width: "120px",
  },
  dateInp: {
    marginRight: "1rem",
    width: "150px",
  },
}));

const correctDigit = (num) => {
  if (num < 10) return "0" + num;
  else return num;
};

const getTodayDate = () => {
  const date = new Date();
  return (
    date.getFullYear() +
    "-" +
    correctDigit(date.getMonth() + 1) +
    "-" +
    correctDigit(date.getDate())
  );
};

export default function SatelliteImagery() {
  const [lat, setLat] = useState(22.5726);
  const [long, setLong] = useState(88.3639);
  const [date, setDate] = useState(getTodayDate());
  const [data, setData] = useState(null);
  const [error, setError] = useState({ error: false, message: "" });
  const classes = useStyles();

  const showError = () => {
    setError({
      error: true,
      message:
        "Sorry, Cannot load image. Please give proper latitude and longitude.",
    });
  };

  const getImage = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=${date}&dim=0.12&api_key=1hfhPJW0UurCQ3OQGwoHWFCzGawcE9k8lbJDos0B`
      )
      .then((res) => {
        //console.log("data: ", res.data);
        if (res.data.msg) {
          showError();
          setData({});
          return;
        }
        setData(res.data);
      })
      .catch((err) => {
        console.log("error: ", err.message);
        showError();
        setData({});
      });
  };

  const handleSearch = () => {
    if (lat > 90 || lat < -90) {
      //show error alert
      setLat(null);
      return;
    }
    if (long > 180 || long < -180) {
      //show error alert
      setLong(null);
      return;
    }
    getImage();
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2020-01-12&dim=0.12&api_key=1hfhPJW0UurCQ3OQGwoHWFCzGawcE9k8lbJDos0B`
      )
      .then((res) => {
        //console.log("data: ", res.data);
        if (res.data.msg) {
          showError();
          setData({});
          return;
        }
        setData(res.data);
      })
      .catch((err) => {
        console.log("error: ", err.message);
        showError();
        setData({});
      });
  }, []);

  return (
    <Grid container>
      <Grid item sm={1} xs={false}></Grid>
      <Grid item sm={10} xs={12}>
        <Typography variant="h4" color="primary">
          Landsat Satellite Imagery
        </Typography>
        <Typography variant="subtitle1">
          See high-quality, multi-spectral imagery of the surface of the Earth.
        </Typography>
        {lat === 22.5726 && long === 88.3639 && (
          <Typography variant="subtitle1">
            Below we have given a landsat image of Kolkata, India.
          </Typography>
        )}
        <Grid style={{ margin: "1rem 0" }}>
          {error.error ? (
            <Typography variant="body1" color="textSecondary">
              {error.message}
            </Typography>
          ) : data ? (
            <>
              <a href={data.url} target="_blank">
                <img
                  src={data.url}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    borderRadius: 10,
                  }}
                  alt=""
                />
              </a>
              <Typography variant="caption" color="textSecondary">
                {data.resource.dataset}
                <br />
                taken on {Date(data.date)}. click to see image in high
                resolution.
              </Typography>
            </>
          ) : (
            <CircularProgress />
          )}
        </Grid>
        <Typography variant="subtitle1">
          You can also see images of other locations by giving the latitude and
          longitude below
        </Typography>
        <Grid container style={{ margin: "1rem 0" }}>
          <TextField
            label="latitude"
            type="number"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className={classes.input}
          />
          <TextField
            label="longitude"
            type="number"
            value={long}
            onChange={(e) => setLong(e.target.value)}
            className={classes.input}
          />
          <TextField
            label="date"
            type="date"
            value={date}
            helperText="Today's date by default"
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            inputProps={{ max: getTodayDate() }}
            className={classes.dateInp}
          />
          <Button
            color="primary"
            variant="contained"
            style={{ marginLeft: "1rem" }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
}
