import React, { useEffect, useRef, useState } from "react";
import "./Heading.css"
import Slider from "react-slick";

const heqadingSlider = [
  {
    image: "assets/heading_slider/heading_slider_1.jpg",
    name: "First Image",
    backgroundColor: "#0088FE"
  },
  {
    image: "assets/heading_slider/heading_slider_2.jpg",
    name: "Second Image",
    backgroundColor: "#00C49F"
  },
  {
    image: "assets/heading_slider/heading_slider_3.jpg",
    name: "Thirt Image",
    backgroundColor: "#FFBB28"
  },
];
const Heading = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
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

  return (
    <div className="app_main_wrapper app_navbar p-4">
      <div className="flex justify-between items-center px-40">
      
        <div className="mt-10 w-2/3">
          <div className="text-4xl font-thin block ">Let's find you</div>
          <div className="text-4xl font-thin mt-6 ">
            the <stong className="font-bold">Best Insurance</stong>
          </div>
        </div>
        <div className="w-1/3">
        <Slider {...settings}>
          {heqadingSlider.map((d) => {
            return <div className="pb-0">
              <img src={d.image} alt={"loading..."} height={"15px"} />
            </div>;
          })}
        </Slider>
          {/* <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {heqadingSlider.map((item, index) => (
                <div
                  className="slide"
                  key={index}
                  style={{ backgroundColor:item.backgroundColor,borderRadius:"40px"}}
                >
                <img src={item.image} alt={item.name} style={{padding:"10px" }}/>
                </div>
              ))}
            </div>
            <div className="slideshowDots">
              {heqadingSlider.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Heading;
