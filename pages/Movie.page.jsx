import React , { useContext , useState , useEffect} from 'react';
import MovieHero from '../components/MovieHero.component';
import {FaCcVisa ,FaCcApplePay} from "react-icons/fa";
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import PremierImages from '../config/TempPosters.config';
import Slider from 'react-slick';

//context
import { MovieContext } from '../context/movie.context';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Movie = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast,setCast] = useState([]);
  const [similarMovies,setSimilarMovies] = useState([]);
  const [recommended,setRecommended] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  },[id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
    const getSimilarMovies = await axios.get(`/movie/${id}/similar`);   
    setSimilarMovies(getSimilarMovies.data.results); 
    };
    requestSimilarMovies();
},[id]);

useEffect(() => {
  const requestRecommended = async () => {
  const getRecommended = await axios.get(`/movie/${id}/recommendations`);   
  setRecommended(getRecommended.data.results); 
  };
  requestRecommended();
},[id]);

  const settingsCast={
    infinity:false,
    speed:500,
   
    slidesToShow:6,
    slidesToScroll:4,
    InitialSlide:0,
    responsive: [
        {
        breakpoint:1024,
        settings : {
            slidesToShow:4,
            slidesToScroll:3,
            infinite:true,

        },

    },
    {
        breakpoint:600,
        settings : {
            slidesToShow:4,
            slidesToScroll:2,
            InitialSlide:1,

        },

    },
    {
        breakpoint:480,
        settings : {
            slidesToShow:3,
            slidesToScroll:1,
          

        },

    },
],
 };

 
 const settings={
  infinity:false,
  speed:500,
 
  slidesToShow:4,
  slidesToScroll:4,
  InitialSlide:0,
  responsive: [
      {
      breakpoint:1024,
      settings : {
          slidesToShow:3,
          slidesToScroll:3,
          infinite:true,

      },

  },
  {
      breakpoint:600,
      settings : {
          slidesToShow:2,
          slidesToScroll:2,
          InitialSlide:1,

      },

  },
  {
      breakpoint:480,
      settings : {
          slidesToShow:3,
          slidesToScroll:1,
        

      },

  },
],
};


  return (
    <>
      <MovieHero />
      <div className="my-12 container  px-4 lg:ml-20 lg:w-2/3" >
          <h2 className="text-black font-bold text-2xl mb-3">About the movie</h2>
          <div className="flex flex-col items-start gap-3">
          <p className="text-gray-800">
            {movie.overview}
          </p>
          </div>
          <div className="my-8">
          <hr />
          </div>


          <div className="my-8" flex flex-col gap-5>
            <h2 className="text-black font-bold text-2xl mb-3">Applicable Offers
            </h2>  

             <div className="flex flex-col gap-3 lg:flex-row">
             <div className="flex items-start bg-yellow-100 p-3  border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
              <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                <p className="text-gray-600">WATCH TOP MOVIES @ 50% OFF
                  Rent & Use Code STREAMSAVE</p>
              </div>
            </div>     
            

            
             <div className="flex items-start bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
              <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-gray-700 text-xl font-bold">Apple Pay Offer</h3>
                <p className="text-gray-600">WATCH MOVIES ONLINE FOR FREE!
                Limited Period Offer</p>
              </div>
            </div>     
            </div>

          </div>   

          <div className="my-8">
          <hr />
          </div>

          <div className="my-8">
          <h2 className="text-black font-bold text-2xl mb-4">Cast & Crew</h2>
          
            <Slider {...settingsCast}>
            {cast.map((castdata) => (
              <Cast image= {`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
              castName={castdata.original_name} 
              role={castdata.character} />
            ))}
           </Slider> 

          
          </div>

          <div className="my-8">
          <hr />
          </div>

          <div className="my-8">
          <PosterSlider
          config={settings}
               images={similarMovies}
               title="You might also like"
               isDark={false}
               subtitle="" />   
          </div>

          <div className="my-8">
          <hr />
          </div>

          <div className="my-8">
          <PosterSlider
          config={settings}
               images={recommended}
               title="BMS XCLUSIVE"
               isDark={false}
               subtitle="" />   
          </div>

      </div>
    </>
  );
};

export default Movie;
