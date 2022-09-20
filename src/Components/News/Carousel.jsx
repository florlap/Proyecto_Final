import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/actions";

//a

const NewsCarusel = ({news}) => {


  return (
    <Carousel sx={{ m: 3 }}>
                {
                    news.map( (newItem) => <Item key={newItem.idNews} news={newItem} /> )
                }
    </Carousel>
  );
};

export default NewsCarusel;
