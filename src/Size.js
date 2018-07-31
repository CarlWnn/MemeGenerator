import React, { Component } from "react";
import './App.css';

class Size extends Component {

  
    
      handleClick=(x)=>{
        //this.setState({height: e.target.height})
        //let height= e.target.height;
      return ()=>{
        console.log(x);
        this.props.changeSize(x);
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
            <button height='1000' className='btn-tall' onClick={this.handleClick(1000)}> tall </button>
            <button height='500' className='btn-square' onClick={this.handleClick(500)}> square </button>
            <button height='200' className='btn-wide' onClick={this.handleClick(200)}> wide </button>


             {/* <div className='size-box-tall '>Tall </div>
             <div className='size-box-square '>Square </div>
             <div className='size-box-wide '>Wide </div> */}
          </div>

        </div>
    );
  }
}

export default Size;

