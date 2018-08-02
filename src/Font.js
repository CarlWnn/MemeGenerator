import React, { Component } from 'react';
import './style/Font.css';

class Font extends Component {

    selectFontFamily=()=>{
       let val= this.refs.family.value;
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
                 <h4> FONTS </h4>
               </div>


            <div className='card-body'>

                <div className="font-family" > 
                    Font:
                    <select ref="family" onChange={this.selectFontFamily}>
                        <option value="Arial">Arial </option>
                        <option value="Georgia">Georgia</option>
                        <option value="Helvetica"> Helvetica </option>
                        <option value="TrebuchetMS"> Trebuchet MS </option>
                    </select>
                </div>    

                <div className='font-size'>
                    Font size:
                    <select ref="size"  onChange={this.selectFontSize}>
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
            

            <div className='box-color'>
                <button  class="btn btn-primary" value='white'   style={{backgroundColor:'white'}} onClick={this.handleFontColor}>  </button>
                <button class="btn btn-primary" value='black'   style={{backgroundColor:'black'}} onClick={this.handleFontColor}>  </button>
                <button class="btn btn-primary" value='grey'    style={{backgroundColor:'grey'}} onClick={this.handleFontColor}> </button>
                <button class="btn btn-primary" value='blue'    style={{backgroundColor:'blue'}} onClick={this.handleFontColor}>  </button>
                <button class="btn btn-primary" value='yellow'  style={{backgroundColor:'yellow'}} onClick={this.handleFontColor}>  </button>
                <button class="btn btn-primary" value='green'   style={{backgroundColor:'green'}} onClick={this.handleFontColor}>  </button>
            </div>

            

        </div>



   </div>
        );
    }
}

export default Font;