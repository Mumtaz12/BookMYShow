import React from "react";
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import MovieLayout from "../layouts/Movie.layout";




const MovieHOC =(props)=> {
    return (
        <> 
           
            <MovieLayout>
                {props.children}
            </MovieLayout>
          
            
           
        </>
    );
}


export default MovieHOC;