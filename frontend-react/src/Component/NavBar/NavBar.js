import React, { Component } from 'react';
import "./NavBar.css";
import { Avatar, Grid } from '@mui/material';
import fblogo from '../../images/logo.png';
import home from '../../images/home.svg';
import game from '../../images/game.svg';
import watch from '../../images/watch.svg';
import market from '../../images/market.svg';
import group from '../../images/groups.svg';
import upload from '../../images/upload.png';
import messanger from '../../images/messenger.svg';
import notification from '../../images/notification.svg';



class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const { userImage } = this.props;
        return ( <div>
            <Grid container className='navbar_main'>
                <Grid item xs={3}>
                    <div className="navbar_leftbar">
                    <img className="navbar_logo" src={fblogo} width={35} alt="Facebook Logo" />
                    <input className="navbar_search" type='text' placeholder='Search Facebook'/>
                    </div>
                    
                    </Grid>
                <Grid item xs={6}>
                    <div className='navbar_container'>
                    <div className='navbar_tabs active'>
                        <img src={home} height='35' width='35' alt="home image"/>
                    </div>
                    <div className='navbar_tabs'>
                        <img src={watch} height='35' width='35' />
                    </div>
                    <div className='navbar_tabs'>
                        <img src={market} height='35' width='35' />
                    </div>
                    <div className='navbar_tabs'>
                        <img src={group} height='35' width='35' />
                    </div>
                    <div className='navbar_tabs'>
                        <img src={game} height='35' width='35' />
                    </div>
                    </div>
                    
                    
                    </Grid>
                <Grid item xs={3}>
                    <div className='navbar_righttab'>
                    <div className='navbar_tabs'>
                        <Avatar src={upload} height='35' width='35'/>
                    </div>
                    <div className='messenger'>
                        <img src={messanger} height='50' width='50' />
                    </div>
                    <div className='notification'>
                        <img src={notification} height='50' width='50' />
                    </div>
                            <Avatar className='navbar_rightimg' src={userImage}/>
                    </div>
        
                    </Grid>
            </Grid>

        </div> 
        );
    }
}
 
export default NavBar;