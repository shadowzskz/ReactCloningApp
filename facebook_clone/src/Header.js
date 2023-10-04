import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img 
                    src="https://www.bing.com/th?id=AMMS_8ddf76a14a2e3ad3ba62b46d49a75a74&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&cdv=1&dpr=1.25&pid=16.1" 
                    alt="from Internet"
                    />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="search facebook" className="header__input__text"/>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__options">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>@UserName</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ArrowDropDownOutlinedIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
