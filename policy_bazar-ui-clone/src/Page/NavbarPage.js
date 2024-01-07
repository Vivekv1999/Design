import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Heading from "../Component/Heading/Heading";
import Products from "../Component/products/Products";
import AlsoBySection from "../Component/AlsoBuy/AlsoBySection";
import SliderImage from "../Component/SliderImage/SliderImage";

const NavbarPage = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <Products/>
      <AlsoBySection/>
      <SliderImage/>
    </>
  );
};

export default NavbarPage;
