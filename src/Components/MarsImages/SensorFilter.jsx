import React from "react";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import RefreshIcon from "@material-ui/icons/Refresh";
import Tooltip from "@material-ui/core/Tooltip";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

function SensorFilter({
  cameras,
  camName,
  selectedCamera,
  setSelectedCamera,
  refreshList,
  filterImages,
}) {
  return (
    <Grid container justifyContent="flex-end">
      <FormControl size="small" variant="outlined">
        <Select
          value={selectedCamera}
          onChange={(e) => setSelectedCamera(e.target.value)}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {cameras.map((cam, i) => (
            <MenuItem key={cam} value={cam}>
              {camName[i]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title="search">
        <IconButton
          color="primary"
          style={{ marginLeft: 10 }}
          onClick={filterImages}
        >
          <SearchRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="refresh images">
        <IconButton color="primary" onClick={refreshList}>
          <RefreshIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Grid>
  );
}

export default SensorFilter;
