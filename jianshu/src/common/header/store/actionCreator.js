// 把action的创建都封装在这个文件里面
import * as constans from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
  type: constans.CHANGE_LIST,
  data: fromJS(data),  // 把接口返回的普通对象data变成immutable类型
  totalPage: Math.ceil(data.length /10)
})
export const getSearchFocusAction = () => ({
  type: constans.SEARCH_FOCUS
})
export const getSearchBlurAction = () => ({
  type: constans.SEARCH_BLUR
})
export const mouseEnter = () => ({
  type: constans.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constans.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: constans.CHANGE_PAGE,
  page
})
// 使用redux-thunk返回函数
export  const getList = () => {
  return (dispatch) => {
     // 可以在public/api 下造假数据
    axios.get('api/headerList.json').then((res) => {
      const data = res.data.data
      dispatch(changeList(data))
    }).catch(() => {
      console.log('get headerList error')
    })
  }
}

