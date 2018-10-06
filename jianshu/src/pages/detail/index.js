import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {actionCreators} from './store'
import {
  DetailWrapper,
  Header,
  Content,
} from './style'

class Detail extends PureComponent {
  render() {
    const {title, content} = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.getDetail(id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
  getDetail (id) {
    dispatch(actionCreators.getDetail(id))
  }
})
// 让Detail有能力获得所有Router里的参数和内容
export default connect(mapState, mapDispatch)(withRouter(Detail)) 