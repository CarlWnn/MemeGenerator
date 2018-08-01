import React, { Component } from 'react';

class Canvas extends Component {
    
    render() {
        
        return (

            <div className="canevas-card">
          
                <div className='card-header'>
                    <h4 >CANVAS</h4>
                </div>


                <div className='canevas-body' style={{"height": this.props.height}}>

                    <img className="canvas-img" ref="image" alt="no description" 
                    src={this.props.src} style={{"height": this.props.height, "filter": this.props.filter}}
                      />

                    <textarea defaultValue= "Others have seen what is and asked why. I have seen what could be and asked why not. Pablo Picasso"/> 

                </div>

            </div>


        );
    }
}

export default Canvas;