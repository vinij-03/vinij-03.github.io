// src/components/Hero.js
import React from 'react';
import Globe from '../../assets/Globe';

function Hero() {
  return (
    <div className='hero text-white flex flex-col md:flex-row items-center justify-between  lg:mb-6 lg:px-20 '>
      <div className="left flex flex-col py-16 px-4   w-full relative sm:h-1/2 md:w-1/2 ">
        <span className='text-xl font-mono font-semibold mb-6'>
          Hey, I'm Vineet ✌️
        </span>
        <span className='text-md'>
          I'm a Computer Science undergrad and tech enthusiast based in India. I co-founded Twinverse Technology, focusing on AR, VR, and spatial computing. My work has been showcased at international exhibitions, and I won the Gitex YouthX 2022 in Dubai. I'm dedicated to bridging reality and the virtual world through innovative tech solutions.
        </span>
      </div>
      <div className="right w-screen sm:mb-16 md:w-1/2 h-[40vh] lg:h-[80vh] md:h-[40vh] " >
        <Globe  path="/space_boi.glb" />
      </div>
    </div>
  );
}

export default Hero;



