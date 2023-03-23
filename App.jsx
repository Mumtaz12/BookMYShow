import axios from "axios";
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import MovieHOC from "./HOC/Movie.HOC";
import Plays from "./pages/Plays.page";
import React from "react";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;



function App() {
  return (
    <>
         
     <DefaultHOC path="/" exact element={<HomePage />} /> 
     <MovieHOC path ="/movie/:id" exact element={<Movie />} />
     <DefaultHOC path="/plays/:id"  element={<Plays />} />
    </>

  );
}

export default App;
