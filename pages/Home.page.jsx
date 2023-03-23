import React, {useState ,useEffect} from "react";
import Slider from "react-slick";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import axios from "axios";



//component
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//configs
import PremierImages from "../config/TempPosters.config";


const HomePage=()=>{

   const [popularMovies, setPopularMovies] = useState([]);
   const [topRatedMovies, setTopRatedMovies] = useState([]);
   const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
        const getPopularMovies = await axios.get("/movie/popular");   
        setPopularMovies(getPopularMovies.data.results); 
        };
        requestPopularMovies();
    },[]);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
        const getTopRatedMovies = await axios.get("/movie/top_rated");   
        setTopRatedMovies(getTopRatedMovies.data.results); 
        };
        requestTopRatedMovies();
    },[]);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
        const getUpcomingMovies = await axios.get("/movie/upcoming");   
        setUpcomingMovies(getUpcomingMovies.data.results); 
        };
        requestUpcomingMovies();
    },[]);

    return (
        <>
        <div className="flex flex-col gap-4 ">
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
            <EntertainmentCardSlider />
           
        </div> 

        <div className="bg-litblue py-12">
           
            <div className="container mx-auto px-4">
            <div className="hidden  md:flex">
                <div>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="premierlogo" 
                    className="w-full h-full"/>
                </div>
                
            </div>
                <PosterSlider
                images={popularMovies}
                title="Premieres"
                subtitle="Brand new release every Friday"
                isDark />
            </div>
        </div>
        </div>
          <div className="container mx-auto px-4 my-8">
               <PosterSlider
               images={topRatedMovies}
               title="Online Streaming Events"
               isDark={false}
               subtitle="" />   
         </div>   

         <div className="container mx-auto px-4 my-8">
               <PosterSlider
               images={upcomingMovies}
               title="Outdoor Events"
               isDark={false}
               subtitle="" />   
         </div>   
        </>
    );
};


export default HomePage;