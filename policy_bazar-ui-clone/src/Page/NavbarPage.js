import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Heading from "../Component/Heading/Heading";
import Products from "../Component/products/Products";
import AlsoBySection from "../Component/AlsoBuy/AlsoBySection";
import SliderImage from "../Component/SliderImage/SliderImage";
import WhyPolicyBazar from "../Component/WhyPolicyBazar/WhyPolicyBazar";
import SmallSLider from "../Component/SmallSlider/SmallSLider";
import Advantages from "../Component/Advantages/Advantages";

const NavbarPage = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <Products/>
      <AlsoBySection/>
      <SliderImage/>
      <WhyPolicyBazar/>
      <SmallSLider/>
      <Advantages/>
    </>
  );
};

export default NavbarPage;
