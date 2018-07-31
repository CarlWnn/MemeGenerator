import React, { Component } from 'react';
import './App.css';
import LeftCard from './LeftCard';
import Canvas from './Canvas';
import RightCard from './RightCard';

class App extends Component {

  constructor(props){
    super(props);
    this.state= { src:"https://images.unsplash.com/photo-1461016951828-c09537329b3a?fm=jpg&w=364",
                  height:500};
  } 

  selectImage=(src) =>{
    this.setState({src:src})
   // console.log(this.state.src);
  }

  changeSize=(h)=>{
      this.setState( (state,props)=>{  height :'1' });
       console.log(this.state.height);
  }

  render() {
    return(
      <div className="container app">
         <div className="row">

            <div className="col-sm-3">
            {/* <button className="btn btn-primary"> test </button> */}
            <LeftCard selectImage= {this.selectImage}/>
            </div>

            <div className="col-sm-6">
            <Canvas height={this.state.height} src= {this.state.src}/>
            </div>

            <div className="col-sm-3">
            <RightCard changeSize={this.changeSize}/>
            </div>

          </div>
      </div>
 




    );
  }
}

export default App;
