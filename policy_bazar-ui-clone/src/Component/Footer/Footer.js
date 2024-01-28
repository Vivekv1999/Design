import React from "react";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SavingsIcon from "@mui/icons-material/Savings";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const lifeInsurance = [
  { name: "Life Insurance" },
  { name: "Term Insurance" },
  { name: "Term Insurance Calculator" },
  { name: "1cr Term Insurance" },
  { name: "life Insurance" },
  { name: "life Insurance" },
];
const OtherInsurance = [
  { name: "Life Insurance" },
  { name: "Term Insurance" },
  { name: "Term Insurance Calculator" },
  { name: "1cr Term Insurance" },
];
const healthInsurance = [
  { name: "Health Insurance" },
  { name: "Family Health Insurance" },
  { name: "1cr Term Insurance" },
];
const Investment = [
  { name: "Investment Plans" },
  { name: "Capital Guarantee Plans" },
  { name: "Cild Plan" },
  { name: "Pension Plan" },
  { name: "Lic" },
  { name: "SIP" },
  { name: "SIP Calculator" },
  { name: "NPS Calculator" },
  { name: "FD Calculator" },
];
const GeneralInsurance = [
  { name: "Car Insurance" },
  { name: "Bike Insurance" },
  { name: "Motor Insurance" },
  { name: "THird Party Car Insurance" },
  { name: "THird Party BIke Insurance" },
  { name: "Travel Insurance" },
];

function ListData({ data, name, icon }) {
  return (
    <div className="flex gap-3">
      <span>{icon}</span>
      <span>
        <h2 className="font-semibold text-[18px]">{name}</h2>
        {data.map((d) => {
          return <div className="mt-2 text-zinc-400">{d.name}</div>;
        })}
      </span>
    </div>
  );
}
const Footer = () => {
  return (
    <div className="app_main_wrapper app_sliderImage p-4 mt-10 bg-black">
      <div className="px-40 text-white">
        <span className="font-bold text-[28px]">More Products</span>
        <div className="flex justify-between mt-8">
          <div>
            <div className="flex gap-3">
              <span>
                <BeachAccessIcon />
              </span>
              <span>
                <h2 className="font-semibold text-[18px]">Life Insurance</h2>
                {lifeInsurance.map((d) => {
                  return <div className="mt-2 text-zinc-400">{d.name}</div>;
                })}
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              <span>
                <HealthAndSafetyIcon />
              </span>
              <span>
                <h2 className="font-semibold text-[18px]">Other Insurance</h2>
                {OtherInsurance.map((d) => {
                  return <div className="mt-2 text-zinc-400">{d.name}</div>;
                })}
              </span>
            </div>
          </div>
          <ListData
            name={"Health Insurance"}
            icon={<MedicalInformationIcon />}
            data={healthInsurance}
          />
          <ListData
            name={"Investment"}
            icon={<SavingsIcon />}
            data={healthInsurance}
          />
          <ListData
            name={"General Insurance"}
            icon={<VerifiedUserIcon />}
            data={healthInsurance}
          />
        </div>
        <div className="text-[11px] text-zinc-400 mt-4">
          <h6>*Standard Plans Terms and Conditions apply</h6>
          <h6>
            +For insurance plans that do not require inspection of your car
          </h6>
          <h6>
            #The above returns are based on the past performance of 7 years
          </h6>
          <h6>
            *As per Draft Notification No. RT-11036/194/2021-MVL Govt. of India,
            Ministry of Road Transport and Highways
          </h6>
          <h6>
            #Tax benefit is subject to change in tax laws. ^Valid for policies
            issued until 31st March 23
          </h6>
          <h6>
            *The Guaranteed Returns are dependent on the policy term and premium
            term availed along with the other variable factors. The Guaranteed
            return of Rs 1 Cr is for a 30-Year-old individual for a policy term
            of 10 Years and a premium paying term of 5 Years with a Rs 1,00,000
            monthly installment premium.
          </h6>
          <h6>
            **Fixed deposit rate applicable for 5 years 1 day to 10 years for
            investment amount less &lt; 2 Crore ( Not for senior citizens), PPF
            interest rate applicable for 15 years for investment amount upto 1.5
            Lac
          </h6>
          <h6>
            *Rs. 950/month is the starting price for a Rs. 1 Crore term life
            insurance for a 30 year-old male, non-smoker, with no pre-existing
            diseases, cover upto 68 years of age. Additional premium is payable
            for riders opted.
          </h6>
          <h6>
            **Full refund of the premium may be availed when you opt to exit the
            policy at a pre-defined interval. On availing the one-time option to
            exit, the total base premium is returned by the Insurer excluding
            GST & premium paid for additional optional benefits.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
