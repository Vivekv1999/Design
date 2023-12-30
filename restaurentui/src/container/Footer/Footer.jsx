import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className="p__opensans">Lorem, ipsum dolor address </p>
        <p className="p__opensans">Lorem,number 2521252 </p>
        <p className="p__opensans">+1 514-554-12541 </p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo..." />
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed accusamus ratione odio iure iusto voluptates!</p>
        <img src={images.spoon} alt="spoon..." style={{marginTop:15}} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer_copyright">
      <p className="p__opensens" style={{color:"#AAA"}}>2023 Lorem, ipsum dolor.</p>
    </div>
  </div>
);

export default Footer;
