import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}
// reducer可以接收state，但是绝不能修改state
// reducer必须是纯函数，给定固定的输入，就一定会有固定的输出，而且不会有副作用
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // 对之前的state做一次深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}
