import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from '../News/Item';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/actions";

const FavsCarusel=(props) => {

    let dispatch = useDispatch()

    const favs = useSelector((state) => state.favorites)
  
  
    useEffect(() => {
        dispatch(getFavorites())
      }, [dispatch])
    return (
        <div>
            <h1>Favoritos</h1>
            <Carousel sx={{ m: 3 }}>
                {
                    favs.map( (favs, i) => <Item key={i} favs={favs} /> )
                }
    </Carousel>
        </div>

    )
}


export default FavsCarusel
