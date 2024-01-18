import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const GetApp = () => {
  return (
    <div className="app_main_wrapper app_sliderImage p-4 mt-5">
      <div className="px-40 mt-4 flex bg-violet-50 py-14">
        <div className="w-1/2">
          <h1 className="text-[26px] font-medium tracking-wider">
            Get the Policybazaar app
          </h1>
          <div className="h-[5px] w-16 my-2 bg-blue-800"></div>
          <h2 className="text-[18px] font-normal text-zinc-500">
            Get control of all your insurance needs anywhere, anytime
          </h2>
          <section className="text-[14px] tracking-wider text-teal-800 mt-10">
            <StarBorderIcon className="text-zinc-400" />
            <span className="ml-4">
              Compare different insurance policies
            </span>{" "}
            <br />
            <StarBorderIcon className="text-zinc-400" />
            <span className="ml-4">
              Buy, store and share all your policies online
            </span>{" "}
            <br />
            <StarBorderIcon className="text-zinc-400" />
            <span className="ml-4">
              Track your policy status on the go
            </span>{" "}
            <br />
            <StarBorderIcon className="text-zinc-400" />
            <span className="ml-4">
              Download your policy with a single tap
            </span>{" "}
            <br />
          </section>
          <app className="mt-12 block">
            <div className="mb-5">Download our app from</div>
            <div className="flex gap-8 h-14">
              <img
                src="assets/GetApp/playStore.png"
                alt="loading..."
                height={20}
                width={190}
              />
              <img
                src="assets/GetApp/appleStore.png"
                alt="loading..."
                height={40}
                width={190}
              />
            </div>
          </app>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default GetApp;
