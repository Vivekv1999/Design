import React from "react";

const FeactureCard = ({ icon, heading, description,textColor,borderColor,style}) => {
  return (
    <>
      <div className={`border-2 pl-3 rounded-lg w-52 h-44 shadow-[1px_8px_10px_1px_rgba(143,131,131,0.4)] p-2 border-s-${borderColor}-500`}
      style={{...style}}>
        <icon className="text-[15px] block p-2">{icon}</icon>
        <heading className={`p-2 font-bold text-[18px] text-${textColor}-700`}>
          {heading}
        </heading>
        <div className="text-sm p-2 font-normal">{description}</div>
      </div>
    </>
  );
};

const WhyPolicyBazar = () => {
  return (
    <div className="app_main_wrapper app_sliderImage p-4 mt-5">
      <div className="px-40">
        <div className="flex items-center">
          <div className="w-3/5">
          <h2 className="text-[28px] w-4/6">
            What makes <strong>Policybazaar</strong> one of{" "}
            <strong>India's favourite places</strong> to{" "}
            <strong>buy insurance?</strong>
          </h2>
          </div>
          <div className=" p-1 flex gap-2 flex-wrap justify-end">
              <FeactureCard
                icon={"🎉"}
                heading={"Over 9 million"}
                borderColor={"indigo"}
                textColor={"indigo"}
                description={
                  "customers trust us & have bought their insurance on Policybazaar"
                }
              />
              <FeactureCard
                icon={"🔎"}
                heading={"50+ insurers"}
                borderColor={"blue"}
                textColor={"blue"}
                style={{margin: "25px"}}
                description={
                  "partnered with us so that you can compare easily & transparently"
                }
              />

              <FeactureCard
                icon={"🤑"}
                heading={"Great Price"}
                borderColor={"cyan"}
                textColor={"cyan"}
                style={{margin: "0px 25px"}}
                description={
                  "for all kinds of insurance plans available online"
                }
              />
              <FeactureCard
                icon={"👩‍💼👩🏻‍💼"}
                heading={"Claims"}
                borderColor={"yellow"}
                style={{margin: "25px 0px"}}
                textColor={"yellow"}
                description={
                  "support built in with every policy for help, when you need it the most"
                }
              />
            {/* </div> */}

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
  );
};

export default WhyPolicyBazar;
