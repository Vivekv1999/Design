import React from "react";

const FeactureCard=({ icon, heading, description })=> {
  return (
    <>
      <icon className="text-[15px] block p-2">{icon}</icon>
      <heading className="p-2 text-indigo-700 font-bold text-[18px]">
        {heading}
      </heading>
      <div className="text-sm p-2 font-normal">{description}</div>
    </>
  );
}

const WhyPolicyBazar = () => {
  return (
    <div className="app_main_wrapper app_sliderImage p-4 mt-5">
      <div className="px-40 ">
        <div className="flex items-center">
          <h2 className="text-[28px] w-6/12">
            What makes <strong>Policybazaar</strong> one of{" "}
            <strong>India's favourite places</strong> to{" "}
            <strong>buy insurance?</strong>
          </h2>
          <div className="w-6/12 p-5">
            <div className="border-2 pl-3 rounded-lg w-52 h-44 shadow-[5px_5px_5px_1px_rgba(143,131,131,0.4)] border-s-indigo-500 p-2">
              <FeactureCard
                icon={"🎉"}
                heading={"Over 9 million"}
                description={
                  "customers trust us & have bought their insurance on Policybazaar"
                }
              />
              {/* <icon className="text-[15px] block p-2">🎉</icon>
              <heading className="p-2 text-indigo-700 font-bold text-[18px]">
                Over 9 million
              </heading>
              <div className="text-sm p-2 font-normal">
                customers trust us & have bought their insurance on Policybazaar
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPolicyBazar;
