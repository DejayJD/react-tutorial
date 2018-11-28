import React, { Component } from 'react';

export class Cell extends Component {
    render() {
        return (
            <button onClick={()=>{this.props.onClick()}}>
                {this.props.value}
            </button>
        );
    }
}