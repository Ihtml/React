import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import { Input, Button } from 'antd'
import store from './store'
import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM } from '../src/store/actionTypes'
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
    this.handleKeyEnter = this.handleKeyEnter.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    // store发生变化时触发handleStoreChange函数
    store.subscribe(this.handleStoreChange)
  }
  handleStoreChange () {
    // 把store里的数据，替换成最新的数据
    this.setState(store.getState())
  }
  handleBtnClick () {
    // console.log(this) //undefined
    if (this.state.inputValue.trim()) {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }))
      const action = {
        type: ADD_TODO_ITEM
      }
      store.dispatch(action)
    }
  }
  handleInputChange (e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value
    // 异步写法，节省性能
    this.setState(() => ({
      inputValue: value
    }))
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleDelete (index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
    const action = {
      type: DELETE_TODO_ITEM,
      index: index
    }
    store.dispatch(action)
  }
  handleKeyEnter (e) {
    if (e.which && e.which !== 13) return
    this.handleBtnClick()
  }
  getTodoItems () {
    return (
      this.state.list.map((item, index) => {
        // console.log(this) //Todolist
        return (
          <TodoItem
            deleteItem={this.handleDelete}
            key={item}
            content={item}
            index={index}
          />
        )
      })
    )
  }
  render () {
    return (
      <Fragment>
        {/*jsx的注释写法,fragment是占位符*/}
        <div style={{ marginTop: 10, marginLeft: 10 }}>
          <label htmlFor="insertArea">请输入内容: </label>
          <Input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyEnter}
            style={{ width: 300, marginRight: 10 }}
          />
          <Button type="primary" onClick={this.handleBtnClick}>add</Button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
