import React, { Component } from 'react';
import Status  from './Status';
import "./StatusBar.css"
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }
    getData = () => {
        // Call your backend API to fetch the posts
        fetch("http://localhost:8080/api/statusService/getStatus")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ data });
             
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
        return ( 
            <div className='statusbar_container'  style={{ overflow: 'auto', maxHeight: '300px' }}>
               <Status  uploader="true" />
               {
                data.map((item)=>(
                    <Status key={item.id} object={item} />
                ))
               }
               
            </div>
            
            
         );
    }
}
 
export default StatusBar;