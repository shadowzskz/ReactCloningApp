import React from 'react';
import './App.css';

const Footer = () => {
const year = new Date().getFullYear();

return (
  <>
    <p> Copyright © {year}</p>
  </>
)
};

export default Footer;
