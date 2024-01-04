import React from "react";

const AlsoBySection = () => {
  return (
    <div className="app_main_wrapper p-4">
      <div className="flex justify-start px-40 ">
        <h2 className="text-[14px] font-medium block text-blue-700 mb-0">
            Also Buy
        </h2>
        <br/>
        <section className="bg-white w-32 shadow-[10px_15px_10px_2px_rgba(143,131,131,0.4)] border-solid border-2 border-indigo-600
        p-2 rounded-2xl items-center 
        ">
          <div className="items-center text-sm flex align-middle p-0">
            <span className="w-1 rounded-2xl">.</span>
            <div className="text-[12px]">
            Investement
            </div>
          </div>
          <div className="items-center text-center text-[15px]">LIC Plans</div>
        </section>
      </div>
    </div>
  );
};

export default AlsoBySection;
