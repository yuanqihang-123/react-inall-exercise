import React, { Component } from 'react';
import './button.less'

class Button extends Component {

    render() {
        return (
            <input
                className="button"
                value={this.props.value}
                onClick={()=> this.props.handleClick(this.props.value)}
                readOnly
            />
        );
    }
}

export default Button;
