import React, { useEffect, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import { Avatar, IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

import logo from '../../assets/logo/logo.png'
import { useStateValue } from '../../context/StateProvider'
import useStyles from './styles';
import './Dashboard.scss';
import { auth, firestore } from '../../firebase/firebase'

const Dashboard = () => {

    const classes = useStyles();
    const [{ user, validUser }, dispatch] = useStateValue();

    /**
     * 
        
    const snapshots = firestore.collection('USERS')
                .get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        //console.log(doc.id, '=>', doc.data());
                        if(doc.id === user?.uid) {
                            dispatch({
                                type: 'SET_VALID_USER',
                                data: {
                                    id: doc.id,
                                    uname: doc.data().uname,
                                    fname: doc.data().fname,
                                    lname: doc.data().lname,
                                }
                            })
                        }
                    })
                })
     */

    return (
    <div className="dashboard">
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <div className="header">
                    <div className="header__left">
                        <img 
                            src={logo}
                            alt="from Internet"
                            width="60px"
                            height="60px"
                            />
                        <div className="header__name">
                            <Typography>ADMIN PANEL</Typography>
                        </div>
                    </div>
                    <div className="header__middle">
                        <div className="header__input">
                            <Typography className="text">Sanjog Suppliers</Typography>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__info">
                            <Avatar />
                            <h4>{validUser?.uname}</h4>
                            <IconButton>
                                <ArrowDropDownOutlinedIcon />
                            </IconButton>
                        </div>
                        <IconButton>
                            <ForumIcon />
                        </IconButton>
                        <IconButton>
                            <NotificationsActiveIcon />
                        </IconButton>
                        
                    </div>
                </div>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </List>

            <List>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                </ListItem>
            </List>
            
            </div>
        </Drawer>
        <main className={classes.content}>
                <Toolbar />
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>
        </div>
    </div>
    )
}

export default Dashboard
