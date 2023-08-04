import React, { Component } from 'react';
import './MainPage.css';
import { Grid } from '@mui/material';
import LeftSide from './LeftSidePannel/LeftSide';
import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePannel/RightSide';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.childRef = React.createRef();
    }
    letUpdate =() =>{
        this.childRef.current.getData()
    }
    
    render() { 
        return ( 
            <div className='mainPage_container'>
                {/* <Grid container className='grid-container'>
                    <Grid className="grid-item" item xs={3}>
                        <LeftSide/>
                    </Grid>
                    <Grid className="grid-item middle_container" xs={6}>
                        <StatusBar/>
                        <UploadSection update = {this.letUpdate}/>
                        <PostContainer ref={this.childRef} />
                    </Grid>
                    <Grid className="grid-item" xs={3}>
                        <RightSide />
                    </Grid>
                </Grid> */}
                <div className='left-container'>
                   <LeftSide/>
                </div>
                <div className='middle-container'>
                     <StatusBar/>
                        <UploadSection update = {this.letUpdate}/>
                        <PostContainer ref={this.childRef} />
                </div>
                <div className='right-container'>
                   <RightSide />
                </div>
    
            </div>
         );
    }
}
 
export default Layout;