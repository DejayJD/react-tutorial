import React, {Component} from 'react';

export default class App extends Component {
    //TODO: Play around with some template variables
    someTemplateVariable = (<h2> I am a variable </h2>);

    render() {
        return (
            <div className="app-wrapper">
                <h1>Welcome to the React Native tutorial!</h1>
                {this.someTemplateVariable}
            </div>
        );
    }
}