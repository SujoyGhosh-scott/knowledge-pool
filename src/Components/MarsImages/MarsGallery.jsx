import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

const useStyles = makeStyles(() => ({}));

function MarsGallery({ data }) {
  const classes = useStyles();

  const getImageCol = (i) => {
    if (i % 10 === 7) return 3;
    else if (i % 10 === 3 || i % 10 === 6 || i % 10 === 8) return 2;
    else return 1;
  };

  return (
    <Grid style={{ overflowX: "hidden" }}>
      <ImageList rowHeight={180} cols={3} style={{ cursor: "pointer" }}>
        {data.map((photo, i) => (
          <ImageListItem
            key={photo.id}
            cols={getImageCol(i)}
            component="a"
            href={`${photo.img_src}`}
            target="_blank"
          >
            <img src={photo.img_src} alt="" />
            <ImageListItemBar
              style={{ background: "none" }}
              title={<strong>{photo.camera.full_name}</strong>}
              subtitle={`on: ${photo.earth_date}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}

export default MarsGallery;
