import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class LeftCard extends Component {
    constructor(props){
        super(props);
        this.state= { imageList : [
            "https://images.unsplash.com/photo-1461016951828-c09537329b3a?fm=jpg&w=364",
            "https://images.unsplash.com/photo-1461295025362-7547f63dbaea?fm=jpg&w=364",
             "https://images.unsplash.com/photo-1465326117523-6450112b60b2?fm=jpg&w=364",
             "https://images.unsplash.com/photo-1458640904116-093b74971de9?fm=jpg&w=364",
             "https://images.unsplash.com/photo-1447969025943-8219c41ea47a?fm=jpg&w=364",
             "https://images.unsplash.com/photo-1421749810611-438cc492b581?fm=jpg&w=364",
             "https://images.unsplash.com/photo-1449960238630-7e720e630019?fm=jpg&w=364",
             "https://images.unsplash.com/photo-1433190152045-5a94184895da?fm=jpg&w=364"
        ]}
    }

    handleClick=(event)=>{
        //console.log(event.target);
        let src_selected= event.target.src;
        this.props.selectImage(src_selected);
    }

    render() {
        return (
            <div className='card'>
             
            <div className='card-header'>
             <h4 >IMAGES</h4>
            </div>

               {this.state.imageList.map(
                   (imageItem, index) => <ImageItem src={imageItem} handleClick={this.handleClick}/> 
               )}

            </div>
        );
    }
}

export default LeftCard;