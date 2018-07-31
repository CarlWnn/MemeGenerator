import React, { Component } from 'react';

class Font extends Component {
    render() {
        return (
        //    <header> TEXT </header>

            <div className='card'>

               <div className='card-header'>
                 <h4> TEXT </h4>
               </div>



            <div>
                <span className="font-text"> font </span>
                <select className="custom-select">
                {/* <option selected=""> None </option> */}
                <option value="1">Arial </option>
                <option value="2">Georgia</option>
                <option value="3"> Helvetica </option>
                <option value="4"> Trebuchet MS </option>
               </select>
           </div>
               

                   



            </div>
        );
    }
}

export default Font;