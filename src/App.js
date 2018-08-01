import React, { Component } from 'react';
import './App.css';
import LeftCard from './LeftCard';
import Canvas from './Canvas';
import RightCard from './RightCard';

class App extends Component {

  constructor(props){
    super(props);
    this.state= { src:'',
                  height:0};

  } 

  selectImage=(s) =>{
    this.setState({
      src:s
    });
    console.log(this.state);

  }

  changeSize=(h)=>{
      this.setState( (state,props)=>{
        height :h 
       });
       console.log(this.state);
 }

//  changeSize=(h)=>{
//   this.setState({
//     height :h 
//    });
//    console.log(this.state.height);
//   }


  render() {
    return(
      
      <div className="container app">
         <div className="row">

            <div className="col-md-3">
            {/* <button className="btn btn-primary"> test </button> */}
            <LeftCard selectImage= {this.selectImage}/>
            </div>

            <div className="col-md-6 ">
            <Canvas height={this.state.height} src= {this.state.src}/>
            </div>

            <div className="col-md-3">
            <RightCard changeSize={this.changeSize}/>
            </div>

          </div>
      </div>
 




    );
  }
}

export default App;
