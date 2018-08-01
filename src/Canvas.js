import React, { Component } from 'react';

class Canvas extends Component {


    componentDidMount=()=>{
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")//drawing object we will draw on 
        const img = this.refs.image

        // var w      = canvas.width  = 400;
        // var h      = canvas.height = this.props.height;
         img.onload = () => {
            //var pattern = ctx.createPattern(img, "no-repeat");
            //ctx.fillStyle = pattern;
            //ctx.fillRect(0,0,w,h)
            ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
                0, 0, canvas.width, canvas.height); // destination rectangle

         }
    //     ctx.font = "40px Courier"
       
    }
    
    render() {
        
        return (

            <div className="canevas-card">
          
                <div className='card-header'>
                    <h4 >CANVAS</h4>
                </div>

                <div className='canevas-body'>

                    <canvas ref="canvas"  width="500" height={this.props.height}  />

                    <img ref="image" alt="no description" src={this.props.src} className="hidden" />

                    <textarea> "Others have seen what is and asked why. I have seen what could be and asked why not.
                      - Pablo Picasso"  
                    </textarea> 

                </div>
    
                {/* <div className= "canvas-body" backgr> */}
                {/* <img className="card-img" 
                src= {this.props.src}
                alt="Card image"/>
                 */}
                {/* <div className="card-img-overlay"> */}
                {/* </div> */}
               


                 


            </div>


        );
    }
}

export default Canvas;