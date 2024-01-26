import React from "react";

const groupLogos = [
  {
    images: "assets/GroupBrands/pbfintech.png",
    descrption: "pbFintech",
    width:50,
  },
  {
    images: "assets/GroupBrands/plogo.jfif",
    descrption: "policyBazaar",
    width:170,
  },
  {
    images: "assets/GroupBrands/pbbazar.png",
    descrption: "paisaBazaar",
    width:170,
  },
  {
    images: "assets/GroupBrands/pbpartners.png",
    descrption: "pbPartners",
    width:170,
  },
  {
    images: "assets/GroupBrands/docprime.png",
    descrption: "docPrime",
    width:50,
  },
  {
    images: "assets/GroupBrands/quickfixcars.png",
    descrption: "quickFIxCars",
    width:150,
  },
  {
    images: "assets/GroupBrands/moneyWide.png",
    descrption: "moneyWide",
    width:90,
  },
];

const GroupBrands = () => {
  return (
    <div className="app_main_wrapper app_sliderImage p-4 mt-10">
      <div className="px-40">
        <h1 className="font-semibold text-[24px]">Group Brands</h1>
        <div className="flex h-12 justify-between mt-10">
          {groupLogos.map((item) => {
            return <img src={item.images} alt={"loading..."} width={item.width}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default GroupBrands;
