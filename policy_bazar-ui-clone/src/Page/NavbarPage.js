import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Heading from "../Component/Heading/Heading";
import Products from "../Component/products/Products";
import AlsoBySection from "../Component/AlsoBuy/AlsoBySection";
import SliderImage from "../Component/SliderImage/SliderImage";
import WhyPolicyBazar from "../Component/WhyPolicyBazar/WhyPolicyBazar";
import SmallSLider from "../Component/SmallSlider/SmallSLider";
import Advantages from "../Component/Advantages/Advantages";
import GetApp from "../Component/GetApp/GetApp";
import CustomerReview from "../Component/CustomerReview/CustomerReview";

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
      <GetApp/>
      <CustomerReview/>
    </>
  );
};

export default NavbarPage;
