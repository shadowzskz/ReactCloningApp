import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase/firebase'

const Authenticated = (props) => {

    const [isLog, setIsLog] = useState(null);

    auth.onAuthStateChanged(authUser => {
        if(authUser) {
            setIsLog(true)
        }   
        else {
            setIsLog(false)
        }
    });

    if (props.nonAuthenticated) {
        if (isLog === null) {
            return "Loading ..."
        }
        else if (!isLog){
            return props.children;
        }
        else if (isLog) {
            return <Redirect to='/' />
        }
    
    } else {
        if (isLog === null) {
            return "Loading ..."
        }
        else if (isLog){
            return props.children;
        }
        else if (!isLog) {
            return <Redirect to='/Login' />
        }
    
    }
}


export default Authenticated;
