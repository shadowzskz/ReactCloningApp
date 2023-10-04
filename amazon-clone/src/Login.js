import React, { useState } from 'react';
import { auth } from './firebase';
import { Link, useHistory } from 'react-router-dom';

import "./Login.css"


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const login = e => {
        e.preventDefault();
        //Login Logic
        // 1. Use react useHsitory to redirect
        // 2. Listen to login and push in to data map
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logined is sucessfully
                //redirect to homepage

                //1. Redirect
                history.push("/")

                //2. Listener to always listen the data login event adn refresh the datalayer (keep track)
            })
            .catch(e => alert(e.message));
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img 
                src="https://www.llamar-atencion-a-clientes.com.mx/wp-content/uploads/2019/07/Tel%C3%A9fono-Gratuito-Amazon.png"
                className="login__logo"
                alt="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form> 
                    <h5>Email</h5>
                    <input type="email" onChange={e => setEmail(e.target.value)}  value={email} required/>
                    <h5>Password</h5>
                    <input type="password" onChange={e => setPassword(e.target.value)}  value={password} required/>
                    <button className="login__signin" type="submit" onClick={login}>Sign In</button>
                </form>
                <p>
                    By signing in you agree to Amazons condition of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login
