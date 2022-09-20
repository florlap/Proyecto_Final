import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNews } from "../../redux/actions";
import Carousel from "../News/Carousel";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';  
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const LandingPage = () => {

  let dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])
  
  const news = useSelector((state) => state.news);
  
  return (
    <div>
      <Carousel news={news} />
    </div>
 
  );
}

export default LandingPage


