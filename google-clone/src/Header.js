import React from 'react';
import './index.css';
import logo from './Images/logo.jpg';

const Header = () => {
return (
  <>
    <div className="header">
        <img src={logo} alt="logo" width= '90px' height='100px'/>
        <h1> Sahaj Keep </h1>
    </div>
  </>
)
};

export default Header;
