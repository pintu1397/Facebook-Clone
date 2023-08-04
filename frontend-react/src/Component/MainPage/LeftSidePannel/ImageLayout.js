import { Avatar, Badge } from '@mui/material';
import React, { Component } from 'react';
import './LeftSide.css';

class ImageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { image, text, active } = this.props;

        return (
            <div className='imageLayout_container'>
                <div className='imageLayout_imgLay'>
                    {active ? (
                        <Badge color='primary' overlap='circular' badgeContent='' variant='dot'>
                            <Avatar className='imageLayout_img' src={image} />
                        </Badge>
                    ) : (
                        <Avatar className='imageLayout_img' src={image} />
                    )}
                </div>
                <div className='imageLayout_text'>{text}</div>
            </div>
        );
    }
}

export default ImageLayout;
