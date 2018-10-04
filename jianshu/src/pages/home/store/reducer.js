import { fromJS } from 'immutable'
import * as constants from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articList: [],
  recommendList: [],
  articPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA :
      return state.merge({
        topicList: fromJS(action.topicList),
        articList: fromJS(action.articList),
        recommendList: fromJS(action.recommendList)
      })
    case constants.ADD_ARTICLE_LIST :
      const newArticList = state.get('articList').concat(action.list)
      const nextPage = action.nextPage
      return state.merge({
        'articList': newArticList,
        'articPage': nextPage
      })
    default:
      return state
  }
}
