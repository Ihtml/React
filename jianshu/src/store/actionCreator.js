// 把action的创建都封装在这个文件里面
import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes'

export const getSearchFocusAction = () => ({
  type: SEARCH_FOCUS
})
export const getSearchBlurAction = () => ({
  type: SEARCH_BLUR
})

