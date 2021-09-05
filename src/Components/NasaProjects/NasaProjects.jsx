import React, { useState, useEffect } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProjectsContainer from "./ProjectsContainer";

export default function NasaProjects({ setProject }) {
  const [projectIds, setProjectIds] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const getProjectIds = () => {
    axios
      .get(
        `https://api.nasa.gov/techport/api/projects?api_key=${process.env.REACT_APP_NASA_API_KEY}`
      )
      .then((res) => {
        //console.log("data: ", res.data.projects);
        let filteredList = [];
        for (let i = 0; i < res.data.projects.length; i++) {
          filteredList.push(res.data.projects[i].projectId);
        }
        console.log("filtered list: ", filteredList);
        setProjectIds(filteredList);
        makeRequestList(filteredList);
      })
      .catch((err) => console.log(err.message));
  };

  const makeRequestList = (list) => {
    //first we will get 15 project ids from the list of projects
    let projectIdList = list.slice(page * 15 - 15, page * 15);
    console.log("project id list: ", projectIdList);

    //makeing the final url then storing it to
    for (let i = 0; i < 15; i++) {
      projectIdList[
        i
      ] = `https://api.nasa.gov/techport/api/projects/${projectIdList[i]}?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    }
    //console.log("project id list: ", projectIdList);

    let projectDataList = data;

    for (let i = 0; i < 15; i++) {
      axios
        .get(projectIdList[i])
        .then((res) => {
          console.log("#" + i + " response: ", res.data);
          projectDataList = [...projectDataList, res.data.project];
          setData(projectDataList);
        })
        .catch((err) =>
          console.log(
            "error in #" +
              i +
              " url: " +
              projectIdList[i] +
              ". error: " +
              err.message
          )
        );
    }

    //increasing the page number
    //so when we call next time, we can get the next page data
    setPage(page + 1);
  };

  useEffect(() => {
    getProjectIds();
  }, []);

  return (
    <Grid container>
      <Grid item sm={1} xs={false}></Grid>
      <Grid item sm={10} xs={12} style={{ marginBottom: "1rem" }}>
        <Grid>
          <Typography variant="h4" color="primary">
            Welcome to TechPort
          </Typography>
          <Typography variant="subtitle1">
            Techport allows the public to discover the technologies NASA is
            working on every day to explore space, understand the universe, and
            improve aeronautics. NASA is developing technologies in areas such
            as propulsion, nanotechnology, robotics, and human health.
            <br />
            Below are details of the projects NASA's working on.
          </Typography>
        </Grid>
        {data.length === 0 && (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        )}
        {data.length > 0 && (
          <ProjectsContainer data={data} setProject={setProject} />
        )}
        <Button
          color="primary"
          fullWidth
          size="small"
          onClick={() => makeRequestList(projectIds)}
        >
          more
        </Button>
      </Grid>
      <Grid item sm={1} xs={false}></Grid>
    </Grid>
  );
}
