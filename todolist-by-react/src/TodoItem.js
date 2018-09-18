import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  // 父组件数据变化的时候，子组件可以不用更新
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  handleDelete () {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  render () {
    const { content } = this.props
    return (
      <div>{content} <button onClick={this.handleDelete}>X</button></div>
    )
  }
}
// 对传入的props类型进行检测
TodoItem.propTypes = {
  // content必须传递
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
// 定义props的默认值
TodoItem.defaultProps = {
  content: '未添加项目'
}
export default TodoItem
