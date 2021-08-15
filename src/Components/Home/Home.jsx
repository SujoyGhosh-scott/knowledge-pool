import React from "react";
import LottieAnimation from "../Common/LottieAnimation";
import science from "../../animations/science.json";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardsContainer from "./CardsContainer";

export default function Home() {
  return (
    <Grid>
      <Grid container style={{ minHeight: "90vh" }}>
        <Grid
          item
          sm={6}
          xs={12}
          container
          direction="column"
          justifyContent="center"
          style={{ padding: "2rem" }}
        >
          <Typography variant="h6">
            If you Love Science, I'm preety much sure you're not leaving this
            website anytime soon! 😄
          </Typography>
          <br />
          <Typography variant="subtitle1">
            cause we have a ton of stuff like images taken by mars rovers,
            satellite imagery, astronomy pictures and a lot of other things to
            draw your attention!
          </Typography>
          <Typography variant="subtitle1">
            checkout the cards below for more info...
          </Typography>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <LottieAnimation lotti={science} height={280} width={280} />
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: "2rem" }}>
        <Grid item sm={1} xs={false}></Grid>
        <CardsContainer />
        <Grid item sm={1} xs={false}></Grid>
      </Grid>
    </Grid>
  );
}
