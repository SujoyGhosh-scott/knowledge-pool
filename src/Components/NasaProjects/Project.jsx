import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Project = ({ data }) => {
  return (
    <Grid container>
      <Grid item sm={1} xs={false}></Grid>
      <Grid item sm={10} xs={12}>
        <Typography variant="h4" color="primary">
          {data.title}
        </Typography>
        <Grid style={{ marginTop: "1rem" }}>
          <Typography variant="subtitle2" color="textSecondary">
            Project Duration:
            <span style={{ color: "GrayText" }}>
              {data.startDateString + " to " + data.endDateString}
            </span>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Status:
            <span style={{ color: "GrayText" }}>{data.statusDescription}</span>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Release Status:
            <span style={{ color: "GrayText" }}>
              {data.releaseStatusString}
            </span>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Organization:
            <span style={{ color: "GrayText" }}>
              {data.leadOrganization.organizationName}
            </span>
          </Typography>
          {data.website !== "" && (
            <Typography variant="subtitle2" color="textSecondary">
              Website:
              <span style={{ color: "GrayText" }}>{data.website}</span>
            </Typography>
          )}
        </Grid>
        <Typography variant="h5" style={{ marginTop: 10 }}>
          Description
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        <Typography variant="h5" style={{ marginTop: 10 }}>
          Benefits
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: data.benefits }}></div>
        <Typography variant="h5" style={{ marginTop: 10 }}>
          Summary
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: data.closeoutSummary }}></div>
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
};

export default Project;
