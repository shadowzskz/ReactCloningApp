import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';


function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
            <Route path="/">
              <Header />
              <div className="app__body">
                <Sidebar />
                <Feed />
              </div>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
