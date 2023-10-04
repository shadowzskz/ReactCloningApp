import React from 'react';
import web from "../src/Images/img2.png"
import './App.css';
import Common from './Common';

const About = () => {
   return (
     <>
      <Common 
        name = 'Welcome to about page'
        intro = "AnappleConstruction" 
        imgsrc={web} 
        visit="/contact" 
        btname="Contact Now"
        whta="Authorized distributor of CICO Chemicals"
      />
     </>
   )
};

export default About;
