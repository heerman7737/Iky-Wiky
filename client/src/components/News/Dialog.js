import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



class Dialog extends Component {
    render() {
        let dialog = (
            
            <div className="dialogBody">

                <button className="buttonStyle" onClick={this.props.onClose}>x</button>

                <div className="dialogContent">{this.props.children}
                </div>
            </div>
           
        );

        if (! this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        );
    }
}

export default Dialog;