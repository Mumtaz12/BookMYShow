import React , { useContext } from 'react';

//context
import { MovieContext } from '../context/movie.context';


const MovieInfo = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");  //optional chaining

  return (
    <>
      <div className="flex flex-col gap-3 ">
        <div className="md:px-4">
            <span className="bg-litgray p-1 text-xs text-white rounded-md ">
                Streaming Now
            </span>
        </div>
        <h1 className="hidden lg:block text-white lg:text-5xl font-bold ">{movie.original_title}</h1>
        
        <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5 ">
        <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>4k &bull; {movie.original_language} </h4>
            <h4>{(movie.runtime / 60).toFixed(2)}h &bull; {genres} &bull; 13+</h4>
        </div>
        <div className="flex items-center gap-3 md:w-screen lg:w-full md:px-4">
            <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-xl">
                Rent ₹149
            </button>
            <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-xl">
                Buy ₹499
            </button>
        </div>
        </div>

      </div>
    </>
  );
};

export default MovieInfo;
