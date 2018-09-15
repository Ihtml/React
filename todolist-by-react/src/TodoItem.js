import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  render() {
    const { content } = this.props
    return (
      <div>{content} <button onClick={this.handleDelete}>X</button></div>
    )
  }
}

export default TodoItem
