import React, { Component } from 'react';

class ImageItem extends Component {


  

    render() {
        return (
            <div>
                <img className="img-thumbnail" 
                src= {this.props.src}
                alt="Thumbnail image"
                onClick = {this.props.handleClick}/>
            </div>
        );
    }
}

export default ImageItem;