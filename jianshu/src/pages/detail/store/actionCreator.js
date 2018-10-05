import axios from 'axios'
import * as constants from './actionTypes'
import {fromJS} from 'immutable'

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
})
export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data
      const title = result.title + " id为:" + id
      const content = result.content
      const action = changeDetail(title, content)
      dispatch(action)
    })
  }
}