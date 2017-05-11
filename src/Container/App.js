import React, { Component } from 'react';
import GridItem from '../Component/GridItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  renderGridItem(i) {
    return (
        <GridItem
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
        />
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext  
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

     for (let i = 0; i < lines.length; i++) {
         const [a, b, c] = lines[i];
         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }

      return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner is ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div>{status}</div>
        
        <div className="grid-row">
          {this.renderGridItem(0)}
          {this.renderGridItem(1)}
          {this.renderGridItem(2)}
        </div>
        <div className="grid-row">
          {this.renderGridItem(3)}
          {this.renderGridItem(4)}
          {this.renderGridItem(5)}
        </div>
        <div className="grid-row">
          {this.renderGridItem(6)}
          {this.renderGridItem(7)}
          {this.renderGridItem(8)}
        </div>
      </div>
    );
  }
}

export default App;