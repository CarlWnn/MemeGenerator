import React, { Component } from 'react';
import './style/App.css';
import LeftCard from './LeftCard';
import Canvas from './Canvas';
import RightCard from './RightCard';

class App extends Component {

  constructor(props){
    super(props);
    this.state= { src: "https://images.unsplash.com/photo-1461016951828-c09537329b3a?fm=jpg&w=364",
    height:500, filter:'', font_family:'arial', font_size:'22', bold:'normal', italic:'normal', font_color:'black'};
  }

//   changeSize=(h)=>{
//       this.setState( (state,props)=>{
//         height :h 
//        });
//        console.log(this.state);
//  }

 changeSize=(h)=>{
  this.setState({height :h });
  }

  selectImage=(s) =>{
    this.setState({ src:s});
  }

  onFilterChange=(value)=>{
    this.setState({filter: value});
  }

selectFontFamily=(val)=>{
  this.setState({font_family: val})
}

selectFontSize=(val)=>{

  // console.log(typeof val)
  val = parseInt(val);
  this.setState({font_size:val}, ()=>{
  console.log(this.state.font_size);
})
}

handleBold=(val)=>{
  this.setState({bold:val})
   console.log(this.state.bold);
}


handleItalic=(val)=>{
  console.log(val);
  this.setState({italic:val})
}


handleFontColor=(val)=>{
  this.setState({font_color:val})
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
            <Canvas height={this.state.height} src= {this.state.src} filter={this.state.filter}
            font_family={this.state.font_family}  font_size={this.state.font_size} 
            bold={this.state.bold} italic={this.state.italic} font_color={this.state.font_color}/>
            </div>


            <div className="col-md-3">
            <RightCard changeSize={this.changeSize} onFilterChange={this.onFilterChange}
             selectFontSize={this.selectFontSize} selectFontFamily={this.selectFontFamily}
             handleBold={this.handleBold} handleItalic={this.handleItalic}  handleFontColor={this.handleFontColor}/>
            </div>

          </div>
      </div>
 




    );
  }
}

export default App;
