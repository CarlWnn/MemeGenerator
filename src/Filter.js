import React, { Component } from 'react';

class Filter extends Component {

    applyFilter=()=> {
        let val = this.refs.select.value;
        console.log(val);
        this.props.onFilterChange(val);
      }
    
    render() {
        return (

            < div className='card'>


               <div className='card-header'>
                 <h4> FILTERS </h4>
               </div>

                <div className="card">
                    <select  ref="select" onChange={this.applyFilter}>
                        <option value=" ">None</option> 
                        <option value="contrast(50%)">Light contrast</option>
                        <option value="contrast(200%)">Heavy contrast</option>
                        <option value="blur(2px)">Light blur</option>
                        <option value="blur(6px)">Heavy blur</option>
                    </select>
                </div>

            </div>
        );
    }
}

export default Filter;