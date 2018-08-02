import React, { Component } from 'react';
import './Font.css';

class Font extends Component {

    selectFontFamily=()=>{
       let val= this.refs.selectfamily.value;
    //    console.log(val);
       this.props.selectFontFamily(val);
    }

    selectFontSize=()=>{
        let val= this.refs.size.value;
        console.log(val);

        this.props.selectFontSize(val);
    }

    handleClickItalic=(e)=>{
        let val= this.refs.italic.value;

        if(val === 'normal')
             this.refs.italic.value = 'italic'
            //    document.getElementById("texto").style.fontWeight = 'bold';
        else
            this.refs.italic.value= 'normal'

        this.props.handleItalic(this.refs.italic.value);
    }

    handleClickBold=(e)=>{
        let val= this.refs.bold.value;

        if(val === 'normal')
             this.refs.bold.value = 'bold'
            //    document.getElementById("texto").style.fontWeight = 'bold';
        else
            this.refs.bold.value= 'normal'

        // console.log(this.refs.bold.value);
        this.props.handleBold(this.refs.bold.value);

    }

    handleFontColor=(e)=>{
        let val= e.target.value;
        this.props.handleFontColor(val);
    }

    render() {
        return (

            <div className='card'>

               <div className='card-header'>
                 <h4> TEXT </h4>
               </div>


            <div className='card-body'>

                <div>
                    <select className="font-family" ref="selectfamily" onChange={this.selectFontFamily}>
                        <option value="Arial">Arial </option>
                        <option value="Georgia">Georgia</option>
                        <option value="Helvetica"> Helvetica </option>
                        <option value="TrebuchetMS"> Trebuchet MS </option>
                    </select>
                </div>    

                <div className='font-size'>
                    <select className="Font-Size" ref="size"  onChange={this.selectFontSize}>
                            <option value="22">22</option>
                            <option value="36">36</option>
                            <option value="42">42</option>
                            <option value="48">48</option>
                    </select>
                </div>

           

            <div className='font-style' >
               <button value='normal' ref="bold" onClick={this.handleClickBold}> Bold </button>
               <button value='normal' ref="italic" onClick={this.handleClickItalic}> Italic  </button> 
            </div>
            

            <div className='color-container'>
                <button value='white'   style={{backgroundColor:'white'}} onClick={this.handleFontColor}>  </button>
                <button value='black'   style={{backgroundColor:'black'}} onClick={this.handleFontColor}>  </button>
                <button value='grey'    style={{backgroundColor:'grey'}} onClick={this.handleFontColor}> </button>
                <button value='blue'    style={{backgroundColor:'blue'}} onClick={this.handleFontColor}>  </button>
                <button value='yellow'  style={{backgroundColor:'yellow'}} onClick={this.handleFontColor}>  </button>
                <button value='green'   style={{backgroundColor:'green'}} onClick={this.handleFontColor}>  </button>
            </div>

            

        </div>



   </div>
        );
    }
}

export default Font;