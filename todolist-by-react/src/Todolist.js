import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
    // this的绑定统一放在constructor里节省性能
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }
  handleBtnClick() {
    // console.log(this) //undefined
    if (this.state.inputValue.trim()) {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }))
    }
  }
  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value
    // 异步写法，节省性能
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        // console.log(this) //Todolist
        return (
          <TodoItem
            deleteItem={this.handleDelete}
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
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
