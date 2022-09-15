import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/actions";

const NewsCarusel=(props) => {

    let dispatch = useDispatch()

    const news = useSelector((state) => state.news)
  
  
    useEffect(() => {
        dispatch(getNews())
      }, [dispatch])

    return (
        <Carousel>
            {
                news.map( (news, i) => <Item key={i} news={news} /> )
            }
        </Carousel>
    )
}


export default NewsCarusel
