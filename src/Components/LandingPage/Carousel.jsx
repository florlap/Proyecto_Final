import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsBack } from "../../redux/actions";

const NewsCarusel=(props) => {

    let dispatch = useDispatch()

    const news = useSelector((state) => state.news)
  
    useEffect(() => {
      dispatch(getNewsBack())
    }, [dispatch])

    /*
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
*/
    return (
        <Carousel>
            {
                news.map( (news, i) => <Item key={i} news={news} /> )
            }
        </Carousel>
    )
}


export default NewsCarusel


/* export default{
    Example,
    Item
} */