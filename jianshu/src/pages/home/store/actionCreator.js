import axios from 'axios'
import * as constants from './actionTypes'
import {fromJS} from 'immutable'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articList: result.articList,
  recommendList: result.recommendList,
  moreTopicLinkUrl: result.moreTopicLinkUrl
})
const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})
const changeWriterList = (data) => ({
  type: constants.CHANGE_WRITER_LIST,
  data: fromJS(data),  // 把接口返回的普通对象data变成immutable类型
  writerTotalPage: Math.ceil(data.length /5)
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

export const changeWriterPage = (page) => ({
  type: constants.CHANGE_WRITER_PAGE,
  page
})

export  const getWriterList = () => {
  return (dispatch) => {
    axios.get('api/writerList.json').then((res) => {
      const data = res.data.data
      dispatch(changeWriterList(data))
    }).catch(() => {
      console.log('get headerList error')
    })
  }
} 
export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})
export const toggleQrcodeShow = (show) => ({
  type: constants.TOGGLE_QRCODE_SHOW,
  show
})