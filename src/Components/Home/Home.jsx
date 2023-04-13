import React from 'react';
import './Home.css';
import pic1 from './pic/pic1.jpg';
import pic2 from './pic/pic2.webp';

import {GoTriangleRight} from 'react-icons/go';
import {BsArrowRight} from 'react-icons/bs';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay } from "swiper";

const Home = () => {
  return (
    <>
    

    
    
    <Swiper  loop={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}modules={[Autoplay]} className="mySwiper">
        <SwiperSlide><img src={pic1} className='myIMG' /></SwiperSlide>
        <SwiperSlide><img src={pic2} className='myIMG' /></SwiperSlide>
      </Swiper>
    <div className='textOnImg'>
        <p id='title'>Welcome to Vapeboss</p>
        <p id='Subtitle'>STOP SMOKE <br/>LET'S VAPING!</p>
        <p id='discrib'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>

        <button id='meraBtn'>LEARN MORE &nbsp;<BsArrowRight id='arrow'/></button> <span><GoTriangleRight id='videoLogo'/></span> <span id='WatIntro'>WATCH INTRO</span>
    </div>
    
    
    </>
  )
}

export default Home