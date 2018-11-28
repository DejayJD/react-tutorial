import React, {Component} from 'react';
import {Cell} from './Cell.component';
import '../styles/grid.css'

export default class Spreadsheet extends Component {

    componentWillMount() {
        this.setState({
            currentSheet: Array(9).fill(null)
        })
    }

    handleCellClick(i) {
        let newSheet = this.state.currentSheet;
        newSheet[i] = Math.floor(Math.random()*999);
        this.setState({
            currentSheet:newSheet
        });
    }

    renderSquare(i) {
        return <Cell
            value={this.state.currentSheet[i]}
            onClick={()=> {this.handleCellClick(i)}}
        />
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        );
    }
}