import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
                        //  <header> FILTERS </header>

            < div className='card'>
               
               <div className='card-header'>
                 <h4> FILTERS </h4>
               </div>



<select className="custom-select">
  {/* <option selected=""> None </option> */}
  <option value="1">Light Contrast</option>
  <option value="2">Heavy Contrast</option>
  <option value="3">Light Blur</option>
  <option value="4">Heavy Blur </option>
</select>



            </div>
        );
    }
}

export default Filter;