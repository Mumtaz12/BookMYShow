import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/Home.page";
import DefaultHOC from "./HOC/Default.HOC";
import Movie from "./pages/Movie.page";
import MovieHOC from "./HOC/Movie.HOC";
import Plays from "./pages/Plays.page";

//context provider
import MovieProvider from "./context/movie.context";




const RouteSwitch = ()=> {
    return (
        <BrowserRouter>
        <MovieProvider>
            <Routes>
                <Route path="/" element={<DefaultHOC>
                    
                    <HomePage />
                    
                    </DefaultHOC>} 
                
                />

                <Route path="/movie/:id" element={<MovieHOC>
                    <Movie />
                </MovieHOC>} />

                <Route path="/plays/:id" element={<DefaultHOC>
                    <Plays />
                </DefaultHOC>} />
            </Routes>
            </MovieProvider>    
        </BrowserRouter>
    );
};

export default RouteSwitch;