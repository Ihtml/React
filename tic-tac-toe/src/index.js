import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Square extends React.Component {
  render() {
    return (
      // 现在每次格子被点击时就会触发传入的 onClick 方法
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor() {
    // 必须调用 super()方法才能在继承父类的子类中正确获取到类型的 this
    super()
    // 每个组件的 state 都是它私有的。
    this.state = {
      squares: Array(9).fill(null)
    }
  }
  renderSquare(i) {
    // 通过 props 传递一个父组件当中的事件处理函数到子组件当中
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
