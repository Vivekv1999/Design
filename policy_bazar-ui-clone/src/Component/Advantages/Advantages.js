import React from "react";

const cardDetails = [
  {
    image: "assets/Advantages/preview.jpg",
    heading: "One of the best Prices",
    description: "Guaranteed",
  },
  {
    image: "assets/Advantages/lapi_man.jpg",
    heading: "Unbiased Advice",
    description: "Keeping customers first",
  },
  {
    image: "assets/Advantages/man_device.jpg",
    heading: "100% Reliable",
    description: "Regulated by IRDAI",
  },
  {
    image: "assets/Advantages/office_mam.jpg",
    heading: "Claims Support",
    description: "Made stress-free",
  },
  {
    image: "assets/Advantages/multi.jpg",
    heading: "Happy to Help",
    description: "Every day of the week",
  },
];

const Advantages = () => {
  return (
    <div className="app_main_wrapper app_sliderImage p-4 mt-5">
      <div className="px-40 mt-4">
        <h2 className="text-[30px] font-semibold">PB Advantage</h2>
        <section className="mt-3 w-2/4 tracking-wide">
          When you buy insurance from us, you get more than just financial
          safety. You also get: our promise of simplifying complex insurance
          terms and conditions, quick stress-free claims, instant quotes from
          top insurers and being present for you in the toughest of times.
        </section>
        <span
          className="mt-3 cursor-pointer mb-24 block"
          style={{ color: "#0065ff" }}
        >
          Know more
        </span>
        <div className="flex justify-between">
          {cardDetails.map((d) => {
            return (
              <>
                <card className="flex w-2/12 flex-col content-between p-3 border-solid border-2 border-grey-300 tracking-wide hover:scale-125 hover:shadow-[1px_1px_15px_5px_rgba(143,131,131,0.4)]">
                  <img src={d.image} alt="" height={"200"} className="ml-0" width={"85"}/>
                  <div className="ml-auto" style={{marginTop:"auto"}}>
                    <heading className="text-[18px] font-medium block hover:font-bold">
                      {d.heading}
                    </heading>
                    <description className="text-[12px] p-0 m-0">
                      {d.description}
                    </description>
                  </div>
                </card>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
