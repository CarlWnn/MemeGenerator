import React, { Component } from 'react';
import Filter from './Filter';
import Size from './Size';
import Font from './Font';

class RightCard extends Component {
    render() {
        return (
            <div className='card'>
<div>
<Size changeSize={this.props.changeSize}/>
</div>

<div>
<Filter/>
</div> 

<div>
<Font/>
</div>
                
            </div>
                
        );
    }
}

export default RightCard;