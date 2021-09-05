import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    objectFit: "contain",
  },
  card: {
    borderRadius: 10,
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.08)",
  },
}));

export default function AstronomyPictures() {
  const [pictures, setPictures] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const classes = useStyles();

  const dateOfLastWeek = (date) => {
    const initialDate = date;
    const finalDate = new Date(initialDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    console.log("cd: ", initialDate);
    console.log("fd: ", finalDate);
    return finalDate;
  };

  const correctDigit = (num) => {
    if (num < 10) return "0" + num;
    else return num;
  };

  const getImages = (start_date) => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${start_date}`
      )
      .then((res) => {
        //console.log("got images: ", res.data);
        setPictures(res.data.reverse());
      })
      .catch((err) => console.log("got error: ", err.message));
  };

  const fetchMore = () => {
    const initialDate = dateOfLastWeek(startDate);
    setStartDate(initialDate);
    const start_date =
      initialDate.getFullYear() +
      "-" +
      correctDigit(initialDate.getMonth() + 1) +
      "-" +
      correctDigit(initialDate.getDate());
    console.log("start date: ", start_date);
    getImages(start_date);
  };

  useEffect(() => {
    const initialDate = dateOfLastWeek(new Date());
    setStartDate(initialDate);
    const start_date =
      initialDate.getFullYear() +
      "-" +
      correctDigit(initialDate.getMonth() + 1) +
      "-" +
      correctDigit(initialDate.getDate());
    console.log("start date: ", start_date);
    getImages(start_date);
  }, []);

  const seeImage = (url) => {
    window.open(url);
  };

  return (
    <Grid container>
      <Grid item sm={1} xs={false}></Grid>
      <Grid item sm={10} xs={11} style={{ marginBottom: "2rem" }}>
        <Typography variant="h4" color="primary">
          Astronomy Pictures of the Week - NASA
        </Typography>
        <Typography variant="subtitle1">
          Each day a different image or photograph of our fascinating universe
          is featured, along with a brief explanation written by a professional
          astronomer.
        </Typography>
        <Grid container item spacing={2} style={{ marginTop: "2rem" }}>
          {pictures.length === 0 && (
            <Grid container justifyContent="center">
              <CircularProgress />
            </Grid>
          )}
          {pictures.map((picture) => (
            <Grid item sm={4} xs={12} key={picture.date}>
              <Card className={classes.card}>
                <img
                  src={picture.url}
                  alt=""
                  className={classes.image}
                  onClick={() => seeImage(picture.hdurl)}
                />
                <Typography variant="body1" style={{ marginLeft: 10 }}>
                  {picture.date}{" "}
                  <span style={{ fontSize: "small" }}>
                    (click to see image in full resoulution)
                  </span>
                </Typography>
                <Accordion style={{ border: "none" }}>
                  <AccordionSummary
                    style={{ marginLeft: "-1rem" }}
                    expandIcon={<ExpandMoreIcon color="primary" />}
                  >
                    <CardHeader title={picture.title} />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="textSecondary">
                      {picture.explanation}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button
          color="primary"
          size="small"
          fullWidth
          style={{ marginTop: "1rem" }}
          disabled={pictures.length === 0 ? true : false}
          onClick={() => fetchMore()}
        >
          more
        </Button>
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
}
