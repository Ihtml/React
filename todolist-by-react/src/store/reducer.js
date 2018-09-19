const defaultState = {
  inputValue: '',
  list: []
}
// reducer可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    // 对之前的state做一次深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}
