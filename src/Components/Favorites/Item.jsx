import React from "react";

import { Paper } from "@mui/material";

const Item = (props) => {
  return (
    <Paper>
      <h2>{props.favs.favorites.title}</h2>
      <p>{props.favs.favorites.body}</p>
      <p>Creado por: {props.favs.favorites.poster.firstNames}</p>
      <h2>Faveado por: {props.favs.user.firstNames}</h2>
    </Paper>
  );
};

export default Item;
