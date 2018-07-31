import React, { Component } from 'react';

class Canvas extends Component {


    componentDidMount=()=>{
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
        var w      = canvas.width  = 500;
        var h      = canvas.height = this.props.height;
       //console.log(h)
         img.onload = () => {
            ctx.drawImage(img, 0, 0)
            var pattern = ctx.createPattern(img, "no-repeat");
            ctx.fillStyle = pattern;
            ctx.fillRect(0,0,w,h)
         }
    //     ctx.font = "40px Courier"
    //     ctx.strokeText('brie' , 15, 75)
       
    }
    
    render() {
        
        return (

            <div className="card">
          
                <div className='card-header'>
                    <h4 >CANVAS</h4>
                </div>

                <div className='card-body'>
                    {/* <canvas ref="canvas" width={500} height={this.props.height}  /> */}
                    <canvas ref="canvas"  id="chartdiv" />

                    <img ref="image" src={this.props.src} className="hidden" />
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