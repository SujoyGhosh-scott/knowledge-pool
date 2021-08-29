import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    objectFit: "contain",
    maxHeight: "180px",
  },
}));

const RoverInfo = ({ data, rover, setRover }) => {
  const classes = useStyles();

  console.log("from rover info");

  return (
    <Grid container>
      <Grid container direction="column" item sm={8} xs={8}>
        <Typography variant="h4" color="primary" gutterBottom>
          {data.name}{" "}
          <Tooltip title={`status: ${data.status}`}>
            <FiberManualRecordIcon
              fontSize="small"
              style={{
                color: data.status === "complete" ? "#32a9d9" : "#35d45f",
              }}
            />
          </Tooltip>
        </Typography>
        <Typography variant="subtitle1">
          <strong style={{ color: "gray" }}>Launch Date:</strong>{" "}
          {data.launchDate}
        </Typography>
        <Typography variant="subtitle1">
          <strong style={{ color: "gray" }}>Land Date:</strong> {data.landDate}
        </Typography>
        <Typography variant="subtitle1">
          <strong style={{ color: "gray" }}>Launch Vehicle:</strong>{" "}
          {data.launchVechicle}
        </Typography>
      </Grid>
      <Grid item container direction="column" sm={4} xs={4}>
        <FormControl
          size="small"
          variant="outlined"
          style={{ maxWidth: "100%" }}
        >
          <Select value={rover} onChange={(e) => setRover(e.target.value)}>
            <MenuItem value="curiosity">curiosity</MenuItem>
            <MenuItem value="spirit">spirit</MenuItem>
            <MenuItem value="opportunity">opportunity</MenuItem>
          </Select>
        </FormControl>
        <Grid style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img src={data.image} className={classes.image} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RoverInfo;
