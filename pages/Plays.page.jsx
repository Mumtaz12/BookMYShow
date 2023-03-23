import React from 'react';



//components
import Poster from '../components/Poster/poster.component'; 
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';


const Plays = () => {
  return (
    <>
     <div className="container mx-auto px-4 ">
     
        <div className="w-full lg:flex lg:flex-row-reverse">
        <div className="lg:w-3/4">
        <h2 className ="text-2xl font-bold mb-4">Plays in Kottayam</h2>
        
          <div className="flex flex-wrap ">
            <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00345038-tmvpsdjraq-portrait.jpg" 
            title="Rangmandal"
            subtitle="Hindi-> ₹250"/>
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00345038-tmvpsdjraq-portrait.jpg" 
            title="Rangmandal"
            subtitle="Hindi-> ₹250"/>
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00345038-tmvpsdjraq-portrait.jpg" 
            title="Rangmandal"
            subtitle="Hindi-> ₹250"/>
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00345038-tmvpsdjraq-portrait.jpg" 
            title="Rangmandal"
            subtitle="Hindi-> ₹250"/>
            </div>
          </div>
          </div>
          <div className="lg:w-3/12 ">
          <h2 className ="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} 
            />
            <PlaysFilter title="Language" tags={["Malayalam","English","Hindi"]} 
            />
            <PlaysFilter title="Categories" tags={["Theatre","Storytelling","Puppetry"]} 
            />
            <PlaysFilter title="Price" tags={["Free","0-500","501-2000","2000 above"]} 
            />
          </div>
          </div>         
          </div>
          
     </div> 
    </>
  );
};

export default Plays;
