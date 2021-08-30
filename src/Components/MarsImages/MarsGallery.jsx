import React from "react";

import Grid from "@material-ui/core/Grid";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function MarsGallery({ data, page, getMoreImages, sol }) {
  const getImageCol = (i) => {
    if (i % 10 === 7) return 3;
    else if (i % 10 === 3 || i % 10 === 6 || i % 10 === 8) return 2;
    else return 1;
  };

  //in case of 0 search result
  if (data.length === 0)
    return (
      <Grid>
        <Typography>
          No photos found. Please use refresh button to get back to the gallery.
        </Typography>
      </Grid>
    );

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
              subtitle={<strong>sol: {photo.sol}</strong>}
              position="top"
            />
            <ImageListItemBar
              style={{ background: "none" }}
              title={<strong>{photo.camera.full_name}</strong>}
              subtitle={`on: ${photo.earth_date}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        color="primary"
        size="small"
        fullWidth
        onClick={() => getMoreImages(sol, page + 1)}
      >
        more
      </Button>
    </Grid>
  );
}

export default MarsGallery;
