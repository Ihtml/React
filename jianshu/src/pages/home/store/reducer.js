import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articList: fromJS(action.articList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state
  }
}
