import React from "react";
import Slider from "react-slick";

const smallSLiderImage = [
  {
    image: "assets/Small_Slider/banner-24x7.png",
  },
  {
    image: "assets/Small_Slider/beware-of-fraudsters.png",
  },
  {
    image: "assets/Small_Slider/fraud_detection_policy.png",
  },
  {
    image: "assets/Small_Slider/homepage-g20-banner.png",
  },
  {
    image: "assets/Small_Slider/pbaskci_banner_1.png",
  },
];

const SmallSLider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
    <div className="app_main_wrapper app_sliderImage p-4 mt-5 " style={{background:"#eef1fb"}}>
      <div className="px-40 mb-3">
        <Slider {...settings}>
          {smallSLiderImage.map((d) => {
            return <div className="w-1/3 p-1">
              <img src={d.image} alt={"loading..."} height={"20px"} />
            </div>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SmallSLider;
