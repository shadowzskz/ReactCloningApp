import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo' />
        </Link>
    <div className="options">
        <Link className='option' to='/shop'>
            Shop
        </Link>
        <Link className='option' to='/shop'>
            Contact
        </Link>
        {
            currentUser ?
            <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
    </div>   
    </div>
); 

export default Header;