import React from "react";
import {BiChevronRight, BiSearch, BiMenu, BiChevronDown} from "react-icons/bi";



const NavSm =()=>{
    return (
        <>
        <div className="text-white flex item-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here</h3>
                <span className="text-gray-400 text-xs flex items-center">Kottayam <BiChevronRight /></span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    );
};
const NavMd =()=>{
    return (
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input type="search"
             className="w-full bg-transparent border-none focus:outline-none" 
             placeholder="Search for Movies, Events ,Plays ,Sports and Activities" />
        </div>
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




const Navbar =()=> {
    return (
        <>
            <nav className="bg-litgray p-4">
                <div className="md:hidden"> <NavSm /> </div>
                <div className="hidden md:flex lg:hidden"> <NavMd /> </div>
                <div className="hidden lg:flex"><NavLg /></div>

            </nav>
        </>
    );
};



export default Navbar;