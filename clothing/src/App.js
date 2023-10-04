import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';

import Homepage from './components/pages/homepage/Homepage';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/pages/shop/Shop';
import Sign from './components/pages/sign/Sign';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot => {
            this.setState(
              {
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              }, () => {console.log(this.state)}
            )
            console.log(this.state)
          })
      }
      this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div>
      <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/Signin' component={Sign} />
        </Switch>
      </div>
    )
  }
}

export default App;
