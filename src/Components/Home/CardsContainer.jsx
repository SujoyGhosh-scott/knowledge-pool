import React from "react";

import Grid from "@material-ui/core/Grid";

import CustomCard from "./Card";
import { cards } from "./cards";

const CardsContainer = () => {
  return (
    <Grid item container sm={10} xs={false}>
      {cards.map((card) => (
        <Grid item sm={6} xs={12} style={{ padding: "1rem" }} key={card.header}>
          <CustomCard
            image={card.image}
            path={card.path}
            content={card.content}
            header={card.header}
            headerColor={card.headerbg}
            contentColor={card.contentbg}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsContainer;
