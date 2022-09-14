import React from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getNewsBack } from "../../redux/actions";
import Footer from '../Footer/Footer';
import Carousel from "./Carousel";

const LandingPage = () => {

  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(getNewsBack())
  }, [dispatch])

  return (
    <div>
      <Link to="/login">Login</Link>
      <h1> Landing page</h1>
      <Carousel/>
      <Footer/>

    </div>
  );
}

export default LandingPage