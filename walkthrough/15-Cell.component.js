import React, { Component } from 'react';

export class Cell extends Component {
    render() {
        return (
            <button>
                {this.props.value}
            </button>
        );
    }
}