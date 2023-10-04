import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Service from './Service.js';
import Contact from './Contact.js';

import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const App = () => {
   return (
     <>
     <Navbar />
      <Switch>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
 
    </Switch>
    <Footer />
    </>
   )
};

export default App;
