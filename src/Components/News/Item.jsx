import React from 'react';

import { Paper, Button } from '@mui/material'


const Item=(props)=>
{
    return (
        <Paper>
            <h2>{props.news.title}</h2>
            <p>{props.news.body}</p>
            <p>Creado por: {props.news.poster.firstNames}</p>

            <Button className="CheckButton">
                Agregar a favoritos
            </Button>
        </Paper>
    )
}

export default Item
