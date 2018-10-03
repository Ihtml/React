import { fromJS } from 'immutable'
import * as constants from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA :
      return state.merge({
        topicList: fromJS(action.topicList),
        articList: fromJS(action.articList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state
  }
}
