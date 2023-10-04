import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Switcher from './pages/login/Switcher';
import './App.scss';
import Dashboard from "./pages/Dashboard/Dashboard";
import Authenticated from "./component/Auth/Authenticated";
import { useStateValue } from './context/StateProvider';
import { auth, firestore } from './firebase/firebase';

function App() {

  const [{ user }, dispatch] = useStateValue();
  const [data, setdata] = useState();

  //  useEffect on high order to listen user loggin or logged out
  //  component mount and unmount 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //User is logged IN
        dispatch({
          type: "SET_USER",
          user: authUser,
        })

        firestore.collection('USERS').doc(authUser.uid)
                                    .get()
                                    .then(snapshot => {
                                      const userData = snapshot.data();
                                      console.log(userData);
                                      dispatch({
                                        type: 'SET_VALID_USER',
                                        data: {
                                            id: snapshot.id,
                                            uname: snapshot.data().uname,
                                            fname: snapshot.data().fname,
                                            lname: snapshot.data().lname,
                                        }
                                    })
                                      
            });      
      } else {
        //User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });

    console.log("Insied", data);
    
    
    return () => {
      // Clear up any clean up operations
      // listner log out and log in by unsubscribing
      unsubscribe();
    }
    
  }, [])



  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Authenticated>
            <Dashboard />
          </Authenticated>
        </Route>
        <Route exact path="/login">
        <Authenticated nonAuthenticated={true}>
            <Switcher />
          </Authenticated>
        </Route>
        <Route path="*" render={()=>"404 not found!"} />
      </Switch>
    </Router>
  );
}

export default App;
