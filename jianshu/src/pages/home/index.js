import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { actionCreators } from './store'
import { BackTop } from './style'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt="banner" src="https://upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ?
            <BackTop onClick={this.handleScrollTop}>TOP</BackTop> :
            null
        }

      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow() {
    // 函数节流
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      const topHeight = document.documentElement.scrollTop
      if (topHeight > 100) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }, 160)
  }
})
export default connect(mapState, mapDispatch)(Home) 