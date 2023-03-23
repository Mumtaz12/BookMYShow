import React from "react";
import Slider from "react-slick";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const EntertainmentCard =(props)=>{
    return (
        <>
        <div className="w-full h-30 px-2">
            <img className="w-full h-full rounded-xl"
             src={props.src}
             alt="entertainment image" />
        </div>
        </>
    );
};

const EntertainmentCardSlider=()=>{
    const EntertainmentImage = ["https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
                                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/stay-fit-collection-202211140440.png",
                                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
                                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
                                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png",
                                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
                                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png",
                                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202211140440.png",
                            ];


     const settings={
        infinity:false,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:4,
        InitialSlide:0,
        responsive: [
            {
            breakpoints:1024,
            settings : {
                slidesToShow:3,
                slidesToScroll:2,
                infinite:true,

            },

        },
        {
            breakpoints:600,
            settings : {
                slidesToShow:2,
                slidesToScroll:1,
                InitialSlide:1,

            },

        },
        {
            breakpoints:480,
            settings : {
                slidesToShow:2,
                slidesToScroll:1,
              

            },

        },
    ],
     };   

    return (
        <>
        
        <Slider {...settings}>
            {
                EntertainmentImage.map((image) =>(
                <EntertainmentCard src={image} />
                ))
            }
        </Slider>
                
        </>
    );
};

export default EntertainmentCardSlider;