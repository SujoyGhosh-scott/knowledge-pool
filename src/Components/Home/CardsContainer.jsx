import React from "react";

import Grid from "@material-ui/core/Grid";

import astrobg from "../../images/astrobg.png";
import earthbg from "../../images/earthbg.jpg";
import marsbg from "../../images/marsbg.jpg";
import nasabg from "../../images/nasabg2.png";
import techbg from "../../images/tech.jpg";
import satellitebg from "../../images/satellitebg.jpg";
import CustomCard from "./Card";

const CardsContainer = () => {
  return (
    <Grid item container wrap sm={10} xs={false}>
      <Grid item sm={6} xs={12} style={{ padding: "1rem" }}>
        <CustomCard image={astrobg} path="/astronomy-picture" />
      </Grid>
      <Grid item sm={6} xs={12} style={{ padding: "1rem" }}>
        <CustomCard image={marsbg} path="/mars-images" />
      </Grid>
      <Grid item sm={6} xs={12} style={{ padding: "1rem" }}>
        <CustomCard image={earthbg} path="/polychromatic-earth" />
      </Grid>
      <Grid item sm={6} xs={12} style={{ padding: "1rem" }}>
        <CustomCard image={nasabg} path="/nasa-projects" />
      </Grid>
      <Grid item sm={6} xs={12} style={{ padding: "1rem" }}>
        <CustomCard image={satellitebg} path="/satellite-imagery" />
      </Grid>
      <Grid item sm={6} xs={12} style={{ padding: "1rem" }}>
        <CustomCard image={techbg} path="/tech-news" />
      </Grid>
    </Grid>
  );
};

export default CardsContainer;
