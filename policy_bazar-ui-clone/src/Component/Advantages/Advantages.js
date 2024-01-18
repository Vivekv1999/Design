import { Description } from "@mui/icons-material";
import React from "react";

const cardDetails = [
  {
    image: "lllllllll",
    heading: "One of the best Prices",
    description: "Guaranteed",
  },
  {
    image: "lllllllll",
    heading: "Unbiased Advice",
    description: "Keeping customers first",
  },
  {
    image: "lllllllll",
    heading: "100% Reliable",
    description: "Regulated by IRDAI",
  },
  {
    image: "lllllllll",
    heading: "Claims Support",
    description: "Made stress-free",
  },
  {
    image: "lllllllll",
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
        <span className="mt-3" style={{ color: "#0065ff" }}>
          Know more
        </span>
        <div className="flex justify-between">
          {cardDetails.map((d) => {
            return (
              <>
                <card className="flex w-2/12 flex-col p-3 border-solid border-2 border-indigo-600 tracking-wide">
                  <img src="" alt="" />
                  <heading className="text-[20px] justify-end">{d.heading}</heading>
                  <description className="text-[14px] justify-end">{d.description}</description>
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
