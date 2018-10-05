import axios from 'axios'
import * as constants from './actionTypes'
import {fromJS} from 'immutable'

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
})
export const getDetail = () => {
  return (dispatch) => {
    axios.get('api/detail.json').then((res) => {
      const result = res.data.data[0]
      const title = result.title
      const content = result.content
      const action = changeDetail(title, content)
      dispatch(action)
    })
  }
}