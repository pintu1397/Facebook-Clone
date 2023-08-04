import React, { Component } from 'react';
import './UploadSection.css';
import { Avatar, Paper } from '@mui/material';
import live from '../../../images/video.png';
import image from '../../../images/image.png';
import feeling from '../../../images/feelings.png';
import firebase  from '../../../firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const storage = getStorage();

class UploadSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        uploadImage: null,
        file: null,
        description: "",
        isUploading: false // Add a state variable to track the upload status
      };
    }
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    openDialog = (event) => {
      const file = event.target.files[0];
      const value = event.currentTarget.value;
      if (file) {
        this.setState({
          open: true,
          uploadImage: URL.createObjectURL(file),
          file: file,
          description: value
        });
      }
    };
  
    handleDescriptionChange = (event) => {
      this.setState({ description: event.target.value });
    };
  
    uploadToFirebase = (event) => {
      const { file, description } = this.state;
      const { update } = this.props;
  
      if (file && description && !this.state.isUploading) {
        this.setState({ isUploading: true }); // Disable the button during the upload process
  
        const storageRef = ref(storage, "images/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.error(error);
            this.setState({ isUploading: false }); // Enable the button after the upload process is complete (error occurred)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log("File available at", downloadURL);
  
                let payload = {
                  userId: JSON.parse(localStorage.getItem("user")).userId,
                  userName: JSON.parse(localStorage.getItem("user")).userName,
                  description: description,
                  postImageUrl: downloadURL
                };
  
                const requestOptions = {
                  method: "POST",
                  headers: { "Content-Type": "application/json; charset=utf8" },
                  body: JSON.stringify(payload)
                };
  
                fetch("http://localhost:8080/api/postService/save", requestOptions)
                  .then((Response) => Response.json())
                  .then((data) => {
                    this.setState({ open: false });
                    update();
                    this.setState({ isUploading: false }); // Enable the button after the upload process is complete (success)
                  })
                  .catch((error) => {
                    console.error(error);
                    this.setState({ isUploading: false }); // Enable the button after the upload process is complete (error occurred during API call)
                  });
              });
          }
        );
      }
    };
          
    render() { 
        return ( 
            <div>
                <Dialog 
                //onClose={this.handleClose} 
                aria-labelledby='simple-dialog-title' 
                open={this.state.open}
                className='upload_dialogbox'>
                    <div className='upload_header'>Create Post</div>
                    <input
                     type='text'
                     //onChange={this.handleDescriptionChange}
                     onChange={(event)=>this.state.description = event.currentTarget.value}
                     className='upload_textbox'
                       placeholder="What's on your mind?" />
                    <img src={this.state.uploadImage} className='upload_preview'/>
                    <input type='button' value='post'onClick={this.uploadToFirebase} className='upload_button' />
                </Dialog>
                <Paper className='upload_container'>
                <div className='upload_top'>
                    <div>
                    <Avatar className='upload_img' src='https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-1/89531221_919714541817445_8512613725994221568_n.jpg?stp=c0.0.60.60a_cp0_dst-jpg_p60x60&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=-uXpUdwH1NwAX8mFGFL&amp;_nc_ht=scontent-bom1-2.xx&amp;oh=00_AfAaaxiGL2XUdrDSNWZY2T6s59j-vN9SGJ38NQNK3Y5fjQ&amp;oe=64B3A097'/>

                    </div>
                    <div>
                        <input className='upload_box' placeholder="What's on your mind?" type='text'/>
                    </div>
                </div>
                <div className='upload_bottem'>
                    <div className='upload_tabs'>
                        <img src={live}  width="35px"/>
                        <div className='upload_text'>Live Video</div>
                    </div>
                    <div className='upload_tabs'>
                        <label for='file-upload' className='upload_tabs'>
                        <img src={image} width="35px" />
                        <div className='upload_text'>Photos/Videos</div>
                        </label>
                        <input type='file' id='file-upload' onChange={this.openDialog}/>
                        
                    </div>
                    <div className='upload_tabs'>
                        <img src={feeling} width="35px" />
                        <div className='upload_text'>Feelings/Activity</div>
                    </div>

                </div>
                </Paper>
            </div>
         );
    }
}
 
export default UploadSection;