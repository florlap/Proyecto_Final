import React from "react";
import {  Button, TextField } from '@mui/material';

import Button from "@mui/material/button";
import { FormLabel } from '@mui/material';

function CreateNews(props) {

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const idNewsFav = e.target.value
    console.log(e.target.value)
    const response = await fetch("http://localhost:3001/news",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.parse(idNewsFav),
    })
    const result = await response.json();
    if (response.status === 201) {
      alert("noticia creada");
    } else {
      alert("no se creo la noticia");
    }

  }

  return (
    <div>
      <FormLabel onSubmit={handleSubmit}>
        <legend>Title</legend>
        <TextField placeholder="Titulo" /> 
        <TextField placeholder="Descripcion" /> 
        <Button variant="contained" component="label">
          Cargar imagen
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <Button variant="contained" type="submit" >Publicar</Button>
      </FormLabel>
    </div>
  );
}

export default CreateNews;
