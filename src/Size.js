import React, { Component } from "react";
import './Size.css';

class Size extends Component {

    
      setSize=(h)=>{
        //this.setState({height: e.target.height})
        //let height= e.target.height;
      return ()=>{
        //console.log(h);
        this.props.changeSize(h);
       }

      }



  render() {
    return (
        <div className='card'>

          <div className='card-header'>
            <h4>SIZES</h4>
          </div>

          {/* <div className='flex-container'> */}
          <div className='btn-toolbar'>
            <button className='btn-tall' onClick={this.setSize(800)}> tall </button>
            <button height='500' className='btn-square' onClick={this.setSize(500)}> square </button>
            <button height='200' className='btn-wide' onClick={this.setSize(300)}> wide </button>


          </div>

        </div>
    );
  }
}

export default Size;

