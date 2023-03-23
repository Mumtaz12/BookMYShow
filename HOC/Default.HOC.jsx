import React from "react";
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";




const DefaultHOC =(props)=> {
    return (
        <> 
           
            <DefaultLayout>
                {props.children}
            </DefaultLayout>
          
            
           
        </>
    );
}


export default DefaultHOC;