import React, { Component } from 'react';
import './App.css';
import LeftCard from './LeftCard';
import Canvas from './Canvas';
import RightCard from './RightCard';

class App extends Component {

  constructor(props){
    super(props);
    this.state= { src: "https://images.unsplash.com/photo-1461016951828-c09537329b3a?fm=jpg&w=364",
    height:300, filter:''};

  }
  // changeSizeTest=(h)=>{
  //   console.log(h);
  //   // let h=50;
  //   this.setState({height:h});
  //   console.log(this.state);
  //}

//   changeSize=(h)=>{
//       this.setState( (state,props)=>{
//         height :h 
//        });
//        console.log(this.state);
//  }

 changeSize=(h)=>{
  this.setState({height :h });
   //console.log(this.state.height);
  }

  selectImage=(s) =>{
    // console.log(this.state.src);
    this.setState({ src:s});
    // console.log(this.state.src);
  }

  onFilterChange=(value)=>{
    this.setState({filter: value});
    // console.log(this.state.filter);

  }

  render() {
    return(
      
      <div className="container app">
         <div className="row">

            <div className="col-md-3">
            {/* <button className="btn btn-primary" onClick={this.changeSizeTest(90)}> test </button> */}
            <LeftCard selectImage= {this.selectImage}/>
            </div>

            <div className="col-md-6 ">
            <Canvas height={this.state.height} src= {this.state.src} filter={this.state.filter}/>
            </div>


            <div className="col-md-3">
            <RightCard changeSize={this.changeSize} onFilterChange={this.onFilterChange}/>
            </div>

          </div>
      </div>
 




    );
  }
}

export default App;
