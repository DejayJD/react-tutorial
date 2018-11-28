import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.header}</h1>
                <p>{this.props.body}</p>
            </div>
        );
    }
}