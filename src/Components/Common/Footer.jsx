import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <Grid style={{ textAlign: "center" }}>
      <Typography variant="caption">
        made by <strong style={{ color: "blue" }}>Sujoy</strong>
      </Typography>
      <br />
      <Typography variant="caption">
        all the informations shown in this website is provided by{" "}
        <strong>Nasa</strong>
      </Typography>
    </Grid>
  );
}
