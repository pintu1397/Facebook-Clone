import React, { Component } from 'react'
import './RightSide.css'
import ImageLayout from '../LeftSidePannel/ImageLayout';


class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : []
        }
    }
    getData = () => {
        // Call your backend API to fetch the posts
        fetch("http://localhost:8080/api/userService/getUserDetails")
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

       
    componentDidMount(){
        this.getData();
    }
    render() { 
        const { data } = this.state;
        // const fixedContactsCount = 10; // Number of fixed contacts to show
        // const contactsToShow = data.slice(0, fixedContactsCount);
    
        return ( 
            <div className='rightside_container'>
                <div className='rightside_header'>
                    Contacts
                </div>
                <div className='rightside_contects'>
                
                {
                    data.map((item)=>(
                        <ImageLayout 
                        key={item.userId} 
                        image={item.userImage} 
                        text={item.userName} 
                        active={item.activeStatus} 
                        />
                    ))
                }
            
                </div>
            </div>
         );
    }
}
 
export default RightSide;