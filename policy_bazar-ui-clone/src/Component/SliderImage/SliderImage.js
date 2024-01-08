import React, { useEffect, useRef, useState } from 'react'

const sliderImage = [
  {
    image: "assets/Slider_image/a1.jfif",
    name: "First Image",
    backgroundColor: "#0088FE"
  },
  {
    image: "assets/Slider_image/a2.jfif",
    name: "Second Image",
    backgroundColor: "#00C49F"
  },
  {
    image: "assets/Slider_image/a3.jfif",
    name: "Thirt Image",
    backgroundColor: "#FFBB28"
  },
  {
    image: "assets/Slider_image/a4.jfif",
    name: "Fourth Image",
    backgroundColor: "#0088FE"
  },
  {
    image: "assets/Slider_image/a5.png",
    name: "Fifth Image",
    backgroundColor: "#00C49F"
  },
  {
    image: "assets/Slider_image/a6.jfif",
    name: "Sixth Image",
    backgroundColor: "#FFBB28"
  },
  {
    image: "assets/Slider_image/a7.png",
    name: "Sixth Image",
    backgroundColor: "#FFBB28"
  },
];

const SliderImage = () => {

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
          prevIndex === sliderImage.length - 1 ? 0 : prevIndex + 1
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
      <div className="w-full">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {sliderImage.map((item, index) => (
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
            {sliderImage.map((_, idx) => (
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
  )
}

export default SliderImage
