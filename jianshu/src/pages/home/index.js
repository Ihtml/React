import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import axios from 'axios'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
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
      </HomeWrapper>
    )
  }
  componentDidMount () {
    axios.get('api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        topicList:result.topicList,
        articList: result.articList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action)
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData (action) {
    dispatch(action)
  }
})
export default connect(null, mapDispatch)(Home) 