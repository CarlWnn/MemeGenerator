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
                    <Filter onFilterChange= {this.props.onFilterChange}/>
                    </div> 

                    <div>
                    <Font selectFontFamily={this.props.selectFontFamily}
                          selectFontSize={this.props.selectFontSize}
                          handleBold={this.props.handleBold}
                          handleItalic= {this.props.handleItalic}
                          handleFontColor= {this.props.handleFontColor}
                    />
                    </div>
                
            </div>
                
        );
    }
}

export default RightCard;