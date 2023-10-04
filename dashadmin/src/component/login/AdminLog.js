import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import loginImg from '../../assets/logo/logo.svg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { auth, firestore } from '../../firebase/firebase';

import "./Login.scss"

const AdminLog = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [progress, setProgress] = useState(false);
    const [emailerror, setEmailError] = useState(null);
    const [passerror, setPassError] = useState(null);
    const [error, setError] = useState(null);

    const history = useHistory();

    const login = (e) => {
        e.preventDefault();
        let valid_data = true;
        setEmailError(null);
        setPassError(null);

        if(!email) {
            setEmailError("Email Required");
            valid_data = false;
        }
        if(!password) {
            setPassError("Password Required");
            valid_data = false;
        }
        if (valid_data) {
            setEmailError(null);
            firestore.collection("USERS")
            .where('email','==',email)
            .where('isAdmin','==',true)
            .get()
            .then(snapshot => {
                if(!snapshot.empty) {
                    auth.signInWithEmailAndPassword(email, password)
                    .then((auth) => {
                        // redirect to dashboard
                        setProgress(true);
                        history.push('/');
                    })
                    .catch((e) => setError(e.message))
                    }
                else {
                    setEmailError("Not Admin");
                    setProgress(false);
                }
            })
        }
    }

    console.log(email)

    return (
        <div className="login">
            <div className="login__header"><h4>Admin Login</h4></div>
                <div className="login__content">
                <div className="login__image">
                    <img src={loginImg} />
                </div>
                <form className="login__form">
                    {progress ? <CircularProgress size={18}/> : null }
                    { error ? <h5>{error}</h5> : null }
                    <div className="login__form__group">
                        <TextField 
                            id="standard-basic" 
                            label="Email" 
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            error={emailerror!=null}
                            helperText={emailerror}
                            required    
                            />
                    </div>
                    <div className="login__form__group">
                        <TextField 
                            id="standard-basic" 
                            type="password"
                            label="Password" 
                            onChange={e => setPassword(e.target.value)}
                            value={password}  
                            error={passerror!=null}
                            helperText={passerror}   
                            required  
                            />
                    </div>
                    <div className="login__footer">
                        <div className="btn">
                            <Button variant="contained" onClick={login}>Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="login__forgot">
                <Link to='/forgot' style={{
                            textDecoration: "none",
                            color: "black"
                }}>
                Forgot Password</Link>
            </div>    
        </div>
    )
}

export default AdminLog;
