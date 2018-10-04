import React, { Component, Fragment } from 'react'
import {
  DetailWrapper,
  Header,
  Content,
} from './style'

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>东华凤九 落叶知秋</Header>
        <Content>
          这是文章的内容，一段很长的文字，这是文章的内容，一段很长的文字，这是文章的内容，一段很长的文字，
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail