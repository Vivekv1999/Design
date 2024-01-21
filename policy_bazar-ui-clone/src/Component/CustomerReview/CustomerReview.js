import React from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Slider from "react-slick";
import { Divider } from "@mui/material";
const CustomerReviews = [
  { title: "Customer tiles", description: "Customer" },
  { title: "Customer titles", description: "Customer" },
//   { title: "Customer titles", description: "Customer" },
//   { title: "Customer titles", description: "Customer" },
];

const CustomerReview = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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
    <>
      <div className="app_main_wrapper app_sliderImage p-4">
        <div className="px-40 ">
          <div className="w-68 text-[30px] font-semibold">
            What Our Customers
            <br /> Are Saying
          </div>
          <div className="h-[5px] w-16 my-5 bg-blue-800"></div>
          <section className="flex justify-end">
            <WestIcon className="mr-4" />
            <EastIcon />
          </section>
          <div className="mt-4 mb-28">
          {/* <Slider {...settings}> */}
            {/* {CustomerReviews.map((item) => {
              return ( */}
                <card className="h-64 w-34 border-4 border-indigo-300 shadow-[10px_10px_15px_5px_rgba(143,131,131,0.4)] ">
                  <section className="my-3">{"item.title"}</section>
                  <section className="items-center gap-3">
                    <FormatQuoteIcon className="text-indigo-400" />
                    <description className="">
                    {"item.description"}
                    </description>
                  </section>
                </card>
              {/* );
            })} */}
            {/* </Slider> */}
          </div>
          <Divider/>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
