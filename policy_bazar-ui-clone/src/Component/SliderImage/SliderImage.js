import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImage = [
  {
    image: "assets/Slider_image/a1.jfif",
    name: "First Image",
    backgroundColor: "#0088FE",
    index:0
  },
  {
    image: "assets/Slider_image/a2.jfif",
    name: "Second Image",
    backgroundColor: "#00C49F",
    index:1
  },
  {
    image: "assets/Slider_image/a3.jfif",
    name: "Thirt Image",
    backgroundColor: "#FFBB28",
    index:2
  },
  {
    image: "assets/Slider_image/a4.jfif",
    name: "Fourth Image",
    backgroundColor: "#0088FE",
    index:3
  },
  {
    image: "assets/Slider_image/a5.png",
    name: "Fifth Image",
    backgroundColor: "#00C49F",
    index:4
  },
  {
    image: "assets/Slider_image/a6.jfif",
    name: "Sixth Image",
    backgroundColor: "#FFBB28",
    index:5
  },
  {
    image: "assets/Slider_image/a7.png",
    name: "Sixth Image",
    backgroundColor: "#FFBB28",
    index:6
  },
];

const SliderImage = () => {
  const sliderRef = useRef(null);
  const [currentData, setCurrentData] = useState(sliderImage[sliderImage.length - 1]);

  const settings = {
    class: "image-slider",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleAfterChange = (index) => {
    if (index !== sliderImage.length - 1) {
      setCurrentData(sliderImage[Math.abs(index - 2)]);
    } else {
      setCurrentData(sliderImage[index]);
    }
  };


  return (
    <div className="app_main_wrapper app_sliderImage p-4">
     <Slider
              afterChange={(index) => {
                handleAfterChange(index);
              }}
              {...settings}
              ref={sliderRef}
              >
              {sliderImage.map((item, index) => {
                const { image } = item;
                return (
                  <div
                    key={index}
                  >
                    <div className="relative ">
                      <img src={image} width="250" height="200"alt={image ?? ""}/>
                    </div>
                  </div>
                );
              })}
            </Slider>

  </div>
  )
}

export default SliderImage
