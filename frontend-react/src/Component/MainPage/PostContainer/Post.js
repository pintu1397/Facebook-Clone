import { Avatar, Paper } from '@mui/material';
import React, { Component } from 'react';
import './PostContainer.css';
import post1 from '../../../images/post.jpeg';
import like from '../../../images/like.png';
import likeButton from '../../../images/likebutton.png'
import commentButton from '../../../images/comment.png'
import shareButton from '../../../images/share.png';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state ={ }
    }

    isImageAvailable = (data)=>{
        return data === ""?false : true;
    }
    getTimeElapsed = (postTime) => {
        const currentTime = new Date();
        const timeDiffInSeconds = Math.floor((currentTime - postTime) / 1000);
      
        if (timeDiffInSeconds < 60) {
          return `${timeDiffInSeconds} s`;
        } else if (timeDiffInSeconds < 3600) {
          const minutes = Math.floor(timeDiffInSeconds / 60);
          return `${minutes} m`;
        } else if (timeDiffInSeconds < 86400) {
          const hours = Math.floor(timeDiffInSeconds / 3600);
          return `${hours} h`;
        } else if (timeDiffInSeconds < 31536000) {
          const days = Math.floor(timeDiffInSeconds / 86400);
          return `${days} d`;
        }else {
            const years = Math.floor(timeDiffInSeconds / 31536000);
            return `${years} y`;
          }
      };
      
    
    render() { 
        const { object } = this.props;
        const postTime = new Date(object.dateTime);
        return ( 
            <div>
                <Paper className='post_container'>
                    {/* header */}
                    <div className='post_header'>
                        <div className='post_header_img'>
                            {/* <Avatar className='post_img' src='https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-1/89531221_919714541817445_8512613725994221568_n.jpg?stp=c0.0.60.60a_cp0_dst-jpg_p60x60&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=-uXpUdwH1NwAX8mFGFL&amp;_nc_ht=scontent-bom1-2.xx&amp;oh=00_AfAaaxiGL2XUdrDSNWZY2T6s59j-vN9SGJ38NQNK3Y5fjQ&amp;oe=64B3A097' /> */}
                            <Avatar className='post_img' src={object.userImage} />
                        </div>
                        <div  className='post_header_text'>
                           {object.userName}
                           <div className='post_time'>{this.getTimeElapsed(postTime)} </div>

                        </div>
                    </div>
                    {/* description */}
                    <div className='post_description'>
                    {object.description}
                    </div>
                    {/* image */}
                    <div className='post_image'>
                    {this.isImageAvailable(object.postImageUrl) ? (
              <img src={object.postImageUrl} width='100%' height='auto' max-width='500px' alt='Post Image' />
            ) : null}
                       
                       
                    </div>
                    {/* like count */}
                    <div className='post_likeCountContainer'>
                        <div >
                             <img  className='postLike_img' src={like} />
                        </div>
                        <div className='post_likeCount'>
                        {object.like}
                        </div>
                    </div>
                    
                    {/* like share box */}
                    <div className='post_likeShare'>
                        <div className='post_tab'>
                            <div className='post_tabFirst'>
                                <img  className='tab_img' src= {likeButton}/>
                            </div>
                            <div className='post_tabText'>
                                Like
                            </div>
                        </div>
                        <div className='post_tab'>
                            <div className='post_tabFirst'>
                                <img  className='tab_img' src= {commentButton}/>
                            </div>
                            <div className='post_tabText'>
                                Comment
                            </div>
                        </div>
                        <div className='post_tab'>
                            <div className='post_tabFirst'>
                                <img  className='tab_img' src= {shareButton}/>
                            </div>
                            <div className='post_tabText'>
                                Share
                            </div>
                        </div>
                    </div>
                    {/* comment box */}
                    <div className=' post_comment'>
                        <div className='upload_top'>
                            <div>
                                 <Avatar className='upload_img' src={object.userImage} />
                            </div>
                            <div>
                                <input className='upload_box' placeholder="What's on your mind?" type='text'/>
                            </div>
                        </div>
                    </div>
                   
                    
                </Paper>
                
            </div>
         );
    }
}
 
export default Post;