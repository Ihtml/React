// 把action的创建都封装在这个文件里面
import * as constans from './actionTypes'

export const getSearchFocusAction = () => ({
  type: constans.SEARCH_FOCUS
})
export const getSearchBlurAction = () => ({
  type: constans.SEARCH_BLUR
})

