import axios from 'axios'
import * as constants from './actionTypes'
import {fromJS} from 'immutable'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articList: result.articList,
  recommendList: result.recommendList
})
const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('api/home.json').then((res) => {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      const action = addHomeList(result, page+1)
      dispatch(action)
    })
  }
}