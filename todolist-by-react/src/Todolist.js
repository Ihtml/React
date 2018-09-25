import React from 'react'
import { connect } from 'react-redux'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator'
// 无状态组件，一个接受props的函数
const Todolist = (props) => {
  const { inputValue, list, changeInputValue, handleClick, handleDel } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>ADD</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item}<button onClick={handleDel}>X</button></li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (e) {
      const value = e.target.value
      const action = getInputChangeAction(value)
      dispatch(action)
    },
    handleClick () {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDel (i) {
      const action = getDeleteItemAction(i)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
