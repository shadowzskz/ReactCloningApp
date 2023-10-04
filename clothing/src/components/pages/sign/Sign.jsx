import React from 'react';

import SignIn from  '../../sign_in/SignIn';
import SignUp from '../../signup/Signup';

import './sign.scss';

const Sign = () => (
    <div className="sign">
        <SignIn />
        <SignUp />
    </div>
);

export default Sign; 