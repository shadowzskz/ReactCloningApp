import React from 'react';
import web from "../src/Images/img2.png"
import './App.css';
import Common from './Common';

const Home = () => {
   return (
     <>
      <Common 
        name = 'Grow your buisness with'
        intro = "Anapple Construction"
        imgsrc={web} 
        visit="/service" 
        btname="Get Started"
        whta="We supply best construction chemicals"
      />
     </>
   )
};

export default Home;
