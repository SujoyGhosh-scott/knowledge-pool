import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundPosition: "center",
    backgroundSize: "100%",
    borderRadius: 10,
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    minHeight: 160,
    cursor: "pointer",
  },
}));

const CustomCard = ({
  image,
  path,
  header,
  headerColor,
  content,
  contentColor,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return (
    <Card
      className={classes.card}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => handleClick()}
    >
      <CardHeader title={header} style={{ color: headerColor }} />
      <CardContent>
        <Typography
          variant="subtitle1"
          style={{ color: contentColor, marginTop: "-.5rem" }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
