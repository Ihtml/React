import React, { Component } from 'react'
import {TopicWrapper, TopicItem} from '../style'
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img className="topic-pic" alt="topic-pic" src="https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
          @IT·互联网
        </TopicItem>
      </TopicWrapper>
    )
  }
}
    
export default Topic