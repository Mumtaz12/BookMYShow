import React, { useContext } from "react";
import { BiSearch, BiMenu, BiChevronDown, BiShareAlt} from "react-icons/bi";

//context for movie name
import { MovieContext } from "../../context/movie.context";



const NavSm =()=>{

    const { movie } = useContext(MovieContext);
    return (
        <>
        
            <div className="text-white  ">
            <div className="">
                <h3 className=" text-xl font-bold p-6 w-full">{movie.original_title}</h3>
                
            </div>
           {/* <div className="w-6 h-6">
                <BiShareAlt className="w-full h-full"/>
    </div> */}
        </div>
        </>
    );
};

const NavLg =()=>{
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-3/4 gap-3 ">
                    <div className="w-20 h-14">
                    < img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png"
                      alt="logo"
                      className="w-full h-full"  />
                    </div> 

                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        <BiSearch />
                        <input type="search"
                        className="w-full bg-transparent border-none focus:outline-none" 
                        placeholder="Search for Movies, Events ,Plays ,Sports and Activities" />
                    </div>
                </div> 
                    <div className="flex items-center gap-3">
                    <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer" >
                        Kottayam <BiChevronDown /></span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign In</button>
                    <div className="h-8 w-8 text-white">
                        <BiMenu className="h-full w-full" />
                    </div>
                    </div>           
            </div>  
        </>
    );
};




const MovieNavbar =()=> {
    return (
        <>
            <nav className="absolute insert-x-0 z-30 bg-opacity-40 backdrop-filter backdrop-blur-lg lg:relative lg:bg-litgray  w-full">
                <div className="md:hidden"> <NavSm /> </div>
                <div className="hidden md:block lg:hidden"> <NavSm /> </div>
                <div className="hidden w-full lg:flex"><NavLg /></div>

            </nav>
        </>
    );
};



export default MovieNavbar;