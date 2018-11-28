import React, {Component} from 'react';
import {Cell} from './Cell.component';
import '../styles/grid.css'

export default class Spreadsheet extends Component {

    componentWillMount() {
        let blankSheet = Array(9).fill(null);
        this.setState({
            sheetIndex: 0,
            history: [blankSheet]
        })
    }

    handleCellClick(i) {
        let newSheet = this.state.history[this.state.sheetIndex];
        newSheet[i] = Math.floor(Math.random() * 999);
        this.setState({
            sheetIndex: this.state.sheetIndex + 1,
            history:[...this.state.history, newSheet]
        });
    }

    renderSquare(i) {
        return <Cell
            value={this.state.history[this.state.sheetIndex][i]}
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
                <button>Undo</button>
            </div>
        );
    }
}