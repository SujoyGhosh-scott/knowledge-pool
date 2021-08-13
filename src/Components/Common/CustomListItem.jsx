import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(() => ({
  imageIcon: {
    height: "100%",
    marginBottom: "5px",
  },
}));

const CustomListItem = ({ image, path, text }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push(path);
  };

  return (
    <ListItem button onClick={() => handleClick("/polychromatic-earth")}>
      <ListItemIcon>
        <Icon>
          <img src={image} className={classes.imageIcon} alt="" />
        </Icon>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default CustomListItem;
