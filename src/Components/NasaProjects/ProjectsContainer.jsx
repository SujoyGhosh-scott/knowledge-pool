import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router-dom";

const ProjectsContainer = ({ data, setProject }) => {
  const history = useHistory();
  const handleClick = (item) => {
    setProject(item);
    history.push(`/project/${item.projectId}`);
  };

  return (
    <Grid container item style={{ margin: "10px 0" }}>
      {data.map((item) => (
        <Grid item sm={6} xs={12} style={{ padding: 5 }} key={item.projectId}>
          <Card variant="outlined">
            <CardHeader
              title={item.title}
              style={{
                fontSize: "small",
                marginBottom: "-1rem",
                color: "#0000FF",
              }}
            />
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Duration:
                <span style={{ color: "GrayText" }}>
                  {item.startDateString + " to " + item.endDateString}
                </span>
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Status:
                <span style={{ color: "GrayText" }}>
                  {item.statusDescription}
                </span>
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Release Status:
                <span style={{ color: "GrayText" }}>
                  {item.releaseStatusString}
                </span>
              </Typography>
              <div
                dangerouslySetInnerHTML={{ __html: item.benefits }}
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 40%, transparent 100%",
                  maskImage:
                    "linear-gradient(to bottom, black 40%, transparent 100%",
                  overflowY: "hidden",
                  maxHeight: 120,
                  marginTop: 5,
                }}
                onClick={() => handleClick(item)}
              ></div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsContainer;
