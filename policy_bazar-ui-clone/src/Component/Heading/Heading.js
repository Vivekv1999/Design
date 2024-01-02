import React, { useEffect, useRef, useState } from "react";
import "./Heading.css"
const heqadingSlider = [
  {
    image: "assets/heading_slider/heading_slider_1.png",
    name: "First Image",
    backgroundColor: "#0088FE"
  },
  {
    image: "assets/heading_slider/heading_slider_2.png",
    name: "Second Image",
    backgroundColor: "#00C49F"
  },
  {
    image: "assets/heading_slider/heading_slider_3.png",
    name: "Thirt Image",
    backgroundColor: "#FFBB28"
  },
];
const Heading = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === heqadingSlider.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="app_main_wrapper app_navbar p-4">
      <div className="flex justify-between items-center px-40">
        <div className="mt-10 w-2/3">
          <div className="text-4xl font-thin block ">Let's find you</div>
          <div className="text-4xl font-thin mt-6 ">
            the <stong className="font-bold">Best Insurance</stong>
          </div>
        </div>
        <div className="w-1/4">
          <div className="slideshow">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
