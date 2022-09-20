import React from 'react';

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";


import { Paper, Button } from '@mui/material'
const Item = (props) => {

    const addRemoveLocalFavs = (e) => {
        const favsNews = localStorage.getItem("favoritos")
        console.log(favsNews)

        let tempNewsFavs;

        if (favsNews === null) {
            tempNewsFavs = []
        } else {
            tempNewsFavs = JSON.parse(favsNews)

        }
        const btn = e.currentTarget
        /* const parent = btn.parentElement
        const name = parent.querySelector("h4").innerText
        const title = parent.querySelector("h2").innerText
        const body = parent.querySelector("p").innerText */
        console.log(btn.dataset)
        const newsData = {

            id: btn.dataset.newsId
        }
        let newsArray = tempNewsFavs.find(oneNew => {
            return oneNew.id === newsData.id
        })

        if (!newsArray) {
            tempNewsFavs.push(newsData)
            localStorage.setItem("favoritos", JSON.stringify(tempNewsFavs))
            console.log("se agrego la noticia")
        } else {
            /* let newsLeft = tempNewsFavs.filter(oneNew =>{
                return oneNew.id !== newsData.id
            }) */
            localStorage.setItem("favoritos", JSON.stringify(tempNewsFavs))
            console.log("ya se agrego a favoritos")
        }
    }
    const addRemoveDBFavs = ()=>{

    }
    return (
        <Grid container style={{ maxWidth: 1410, margin: "auto" }}>
            <Grid item md={8} sm={12} sx={{ boxShadow: 2 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={props.news.image}  // props.img
                    alt="Paella dish"
                />
            </Grid>
            <Grid item md={4} sm={12}>
                <CardContent>
                    <Typography variant="h5" color="text.secondary">
                        {props.news.title}
                    </Typography>
                    <Divider variant="middle" sx={{ mt: 1 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                        {props.news.body}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                        Creado por: {props.news.firstNames}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                        Faveado por: {props.news.firstNames}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                        Info Id: {props.news.idNews}
                    </Typography>
                </CardContent>
                <Button className="CheckButton">
                    Leer mas
                </Button>
                {idUser ?
                    <Button data-news-id={props.news.idNews} className="CheckButton" onClick={addRemoveDBFavs}>
                        Agregar a favoritos...
                    </Button> :
                    <Button data-news-id={props.news.idNews} className="CheckButton" onClick={addRemoveLocalFavs}>
                        Agregar a favoritos...
                    </Button>
            
                }
            </Grid>
        </Grid>
    )
}

export default Item

{/* <Paper>
            <div className='div_prueba'>
                <h2>{props.news.title}</h2>
                <p>{props.news.body}</p>
                <h4>{props.news.poster.firstNames}</h4>
                <h6>Info Id:{props.news.idNews}</h6>
                <Button className="CheckButton">
                    Leer mas
                </Button>
                <Button data-news-id={props.news.idNews} className="CheckButton" onClick={addRemoveFavs}>
                    Agregar a favoritos
                </Button>

            </div>
        </Paper> */}