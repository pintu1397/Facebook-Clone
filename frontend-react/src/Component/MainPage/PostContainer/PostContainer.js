import React, { Component } from 'react';
import Post from './Post';
import post1 from '../../../images/post.jpeg';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData = () => {
        // Call your backend API to fetch the posts
        fetch("http://localhost:8080/api/postService/getPost")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ data }, () => {
                if (data.length > 0) {
                  const lastPost = data[data.length - 1];
                  this.setState({ randomPost: lastPost });
                }
              });
            })
          .catch((error) => {
            console.error('Error fetching posts:', error);
          });
      };


    
    render() { 
        const { data, randomPost} = this.state;
        return ( 
            <div> 
                {data.map((item, index) => (
                 <Post key={item.post_id} object={item} />
                ))}
                 {
                        randomPost && <Post key={randomPost.post_id} object={randomPost} />
                        }

            </div>
         );
    }
}
 
export default PostContainer;