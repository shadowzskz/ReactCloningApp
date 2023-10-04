import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {

  const [{ user }, dispatch] = useStateValue();

  //  useEffect on high order to listen user loggin or logged out
  //  component mount and unmount 

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //User is logged IN
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        //User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });

    return () => {
      // Clear up any clean up operations
      // listner log out and log in by unsubscribing
      unsubscribe();
    }
    
  }, [])
  
  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
