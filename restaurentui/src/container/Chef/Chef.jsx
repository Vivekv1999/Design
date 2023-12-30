import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef...'/>    
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title={"Chef's Word"}/>
      <h1 className='headtext__cormorant'>What We Belive In</h1>

      <div className="app__chef-content">
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote..." />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing..</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis totam quidem exercitationem atque impedit modi adipisci accusantium facilis ipsa necessitatibus ad alias ducimus voluptatibus repellat quis iusto sequi numquam reprehenderit aperiam, illo nulla nihil. Asperiores.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign..." />
      </div>
    </div>
    
  </div>
);

export default Chef;
