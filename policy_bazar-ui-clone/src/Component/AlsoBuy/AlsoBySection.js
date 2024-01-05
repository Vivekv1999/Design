import React from "react";

const sectionCardList=[
  {
    label:"LIC Plans",
    subHeader:"investment",
    subHeaderColor:""
  },
  {
    label:"Return of Premium",
    subHeader:"Term Life",
    subHeaderColor:""
  },
  {
    label:"Life Insurance of HouseWives",
    subHeader:"investment",
    subHeaderColor:""
  },
  {
    label:"Day 1 of Coveraje",
    subHeader:"Health Insurance",
    subHeaderColor:""
  },
  {
    label:"1CR Health Insurance",
    subHeader:"Health Insurance",    
    subHeaderColor:""
  },
  {
    label:"Unlimited Restoration of Cover",
    subHeader:"Health Insurance",
    subHeaderColor:""
  },
  {
    label:"Return of Premium",
    subHeader:"Term Life",
    subHeaderColor:""
  },
  {
    label:"Life Insurance of HouseWives",
    subHeader:"investment",
    subHeaderColor:""
  },
  {
    label:"Day 1 of Coveraje",
    subHeader:"Health Insurance",
    subHeaderColor:""
  },
  {
    label:"1CR Health Insurance",
    subHeader:"Health Insurance",    
    subHeaderColor:""
  },
  {
    label:"Unlimited Restoration of Cover",
    subHeader:"Health Insurance",
    subHeaderColor:""
  },
]

const AlsoBySection = () => {
  return (
    <div className="app_main_wrapper p-4">
      <div className="flex justify-start flex-col px-40 ">
        <h2 className="text-[14px] font-medium block text-blue-700 mb-0">
            Also Buy
        </h2>
        <br/>
        <div className="flex flex-3"> 
        {sectionCardList.map((d)=>{
       return <section className="bg-white shadow-[10px_15px_10px_2px_rgba(143,131,131,0.4)] border-solid border-2 border-indigo-600
        p-2 rounded-2xl items-center 
        ">
          <div className="items-center text-sm flex align-middle p-0">
            <span className="w-1 rounded-2xl">.</span>
            <div className="text-[12px]">
            {d.label}
            </div>
          </div>
          <div className="items-center text-center text-[15px]">LIC Plans</div>
        </section>
        })}
        </div>
      </div>
    </div>
  );
};

export default AlsoBySection;
