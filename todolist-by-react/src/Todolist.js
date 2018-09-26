import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import { Input, Button } from 'antd'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from '../src/store/actionCreator'
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
      const action = getAddItemAction()
      store.dispatch(action)
    }
  }
  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleDelete (index) {
    const action = getDeleteItemAction(index)
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
          <Button type="primary" onClick={this.handleBtnClick}>添加</Button>
        </div>
        <ul style={{ marginTop: 10, marginLeft: 10 }}>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    );
  }
}
export default Todolist;
