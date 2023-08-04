import { Paper } from '@mui/material';
import React, { Component } from 'react';
import "./StatusBar.css"
import uploadIcon from '../../../images/upload.png';
import status1 from '../../../images/pic1.jpeg'

class Status extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const { uploader, object } = this.props;
        return ( 
           
            <div>
                {
                    uploader === "true" ?
                    <Paper className='statusbar_status' >
                        <img src={uploadIcon} className='upload_icon' />
                    </Paper> :
                    <Paper className='statusbar_status'>
                        <img src={object.statusImageUrl} alt='Status Image' className='status_image' />
                    </Paper>

                }
            </div>
         );
    }
}
 
export default Status ;