import React, { Component } from 'react';
//import './LeftSide.css';
import ImageLayout from './ImageLayout';
import groups from '../../../images/groups.png';
import memories from '../../../images/memories.png';
import adMannager from '../../../images/admanager.png';
import pages from '../../../images/pages.png';
import adCentre from '../../../images/ads.png';
import blood from '../../../images/blood.png';
import messenger from '../../../images/messenger_logo.png';
import messengerKid from '../../../images/messengerkids.png';
import playGames from '../../../images/game.png';


class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : []
        }
    }
    getData=()=>{
        let jsondata =[
            {
                "image":'https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-1/89531221_919714541817445_8512613725994221568_n.jpg?stp=c0.0.60.60a_cp0_dst-jpg_p60x60&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=-uXpUdwH1NwAX8mFGFL&amp;_nc_ht=scontent-bom1-2.xx&amp;oh=00_AfAaaxiGL2XUdrDSNWZY2T6s59j-vN9SGJ38NQNK3Y5fjQ&amp;oe=64B3A097',
            
                "text":"Pintu Kumar"
            },
            {
                "image":groups,
                "text":"Friends"
            },
            {
                "image":memories,
                "text":"Memories"
            },
            {
                "image":adMannager,
                "text":"Ads Mannager"
            },
            // {
            //     "image":marketplace,
            //     "text":"Marketplace"
            // },
            // {
            //     "image":watch,
            //     "text":"Watch"
            // },
            {
                "image":pages,
                "text":"Pages"
            },
            {
                "image":adCentre,
                "text":"Ads Centre"
            },
            {
                "image":pages,
                "text":"Pages"
            },
            {
                "image":adCentre,
                "text":"Ads Centre"
            },
            {
                "image":pages,
                "text":"Pages"
            },
            {
                "image":adCentre,
                "text":"Ads Centre"
            },
            {
                "image":blood,
                "text":"Blood Donation"
            },
            {
                "image":messenger,
                "text":"Messenger"
            },
            {
                "image":messengerKid,
                "text":"Messenger Kid"
            },
            {
                "image":playGames,
                "text":"Play Games"
            }
            

        ];
        this.setState({data : jsondata});
    }
    componentDidMount(){
        this.getData();
    }
    //  state = {  }
    render() { 
        return ( 
            <div className='leftSide_container'>
                {
                    this.state.data.map((item)=>(
                        <ImageLayout  image={item.image} text={item.text} />
                    ))
                }
            </div>
         );
    }
}
 
export default LeftSide;
