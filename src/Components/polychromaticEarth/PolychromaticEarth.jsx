import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  slideShow: {
    overflow: "hidden",
  },
  slider: {
    whiteSpace: "nowrap",
    transition: "fade-out",
  },
  image: {
    width: "100%",
    objectFit: "contain",
    borderRadius: 10,
    display: "inline-block",
  },
  slideShowDots: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: "50%",
    cursor: "pointer",
    background: "#c4c4c4",
    margin: "0 5px",
  },
  active: {
    background: "#0088FE",
  },
}));

const delay = 1200;

export default function PolychromaticEarth() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const classes = useStyles();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/EPIC/api/natural?api_key=1hfhPJW0UurCQ3OQGwoHWFCzGawcE9k8lbJDos0B"
      )
      .then((res) => {
        //console.log("res: ", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      //resetTimeout();
      setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }
  }, [index, data]);

  return (
    <Grid container>
      <Grid item sm={1} xs={false}></Grid>
      <Grid item sm={10} xs={12}>
        <Typography variant="h4" color="primary">
          Earth Polychromatic Imaging Camera(EPIC)
        </Typography>
        <Typography variant="subtitle1">
          Below we have given daily imagery collected by DSCOVR's Earth
          Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at
          the Earth-Sun Lagrange point, EPIC provides full disc imagery of the
          Earth and captures unique perspectives of certain astronomical events
          such as lunar transits.
        </Typography>
        {data.length === 0 && (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        )}
        {data.length > 0 && (
          <Grid style={{ marginTop: "1rem" }}>
            <Typography color="textSecondary" variant="caption">
              Date: {data[0].date.substring(0, 10)}
            </Typography>
          </Grid>
        )}
        <Grid className={classes.slideShow}>
          <Grid
            className={classes.slider}
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {data.length > 0 &&
              data.map((image) => {
                const year = image.identifier.substring(0, 4);
                const month = image.identifier.substring(4, 6);
                const date = image.identifier.substring(6, 8);
                return (
                  <img
                    src={`https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${date}/png/${image.image}.png?api_key=DEMO_KEY`}
                    className={classes.image}
                    alt=""
                    key={image.identifier}
                  />
                );
              })}
          </Grid>
        </Grid>
        <Grid className={classes.slideShowDots}>
          {data.length > 0 &&
            data.map((_, i) => (
              <div
                className={`${classes.dot} ${i === index && classes.active}`}
                key={i}
              ></div>
            ))}
        </Grid>
        <Typography variant="subtitle1" style={{ marginBottom: "2rem" }}>
          Extremely sorry for longer loading time. All the images shown here are
          high resolution and for research purpose.
        </Typography>
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
}
