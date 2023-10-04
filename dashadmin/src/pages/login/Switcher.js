import React from 'react';
import { useState, useEffect, useRef  } from 'react';
import { Redirect } from 'react-router';
import Login from '../../component/login/Login'
import AdminLog from '../../component/login/AdminLog'
import RightSwitcher from './RightSwitcher';

import "./Switcher.scss";

function Switch() {
    
    const [isLogginActive, setIsLogginActive] = useState(true);
    const refRender = useRef();


    useEffect(() => {
        setIsLogginActive(true);
    }, [])

    const current = isLogginActive ? "Admin" : "Login";
    const currentActive = isLogginActive ? "Login" : "Admin";

    const changeState = () => {
        setIsLogginActive(!isLogginActive);
    }
    
    useEffect(() => {
        setIsLogginActive(true);


    }, [])

    return (
        <div className='switcher'>
            <div className="login">
                <div className="container">
                    {isLogginActive && (
                    <Login containerRef={ref => (refRender.current = ref)}/>
                            )}
                    {!isLogginActive && (
                    <AdminLog containerRef={ref => (refRender.current = ref)}/>
                            )}
                </div>
                <div className="wrapper">
                    <RightSwitcher
                        current={current}
                        currentActive={currentActive}   
                        onClick={changeState}
                        isLogginActive={isLogginActive}
                        />
                </div>
            </div>
        </div>
    )
}                 


export default Switch;