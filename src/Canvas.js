import React, { Component } from 'react';
import './style/Canevas.css';

class Canvas extends Component {
    
    render() {
        //console.log(this.props.font_size)



        return (

            <div className="card">
          
                <div className='card-header'>
                    <h4 >CANVAS</h4>
                </div>


                <div className='canevas-body' style={{height: this.props.height}}>

                            <img className="canvas-img" ref="image" alt="no description" 
                            src={this.props.src} style={{height: this.props.height, filter: this.props.filter}}
                            />

                            <textarea defaultValue= "Others have seen what is and asked why. I have seen what could be and asked why not. Pablo Picasso"
                            style={{fontFamily:this.props.font_family, fontSize:this.props.font_size, 
                                fontWeight:this.props.bold, fontStyle: this.props.italic, color:this.props.font_color}}
                            /> 

                </div>

            </div>


        );
    }
}

export default Canvas;