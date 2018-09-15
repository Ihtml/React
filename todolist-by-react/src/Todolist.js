import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleBtnClick() {
    // console.log(this) //undefined
    if (this.state.inputValue.trim()) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list })
  }
  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            delete={this.handleDelete}
            key={index}
            content={item}
            index={index}
          />
        )
      })
    )
  }
  render() {
    return (
      <Fragment>
        {/*jsx的注释写法,fragment是占位符*/}
        <div>
          <label htmlFor="insertArea">请输入内容: </label>
          <input id="insertArea" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={() => this.handleBtnClick()}>add</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
