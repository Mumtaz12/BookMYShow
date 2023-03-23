const settings={
    infinity:false,
    speed:500,
   
    slidesToShow:5,
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

 export default settings;