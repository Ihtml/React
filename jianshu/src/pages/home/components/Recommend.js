import React, { PureComponent, Fragment } from 'react'
import {RecommendWrapper, RecommendItem} from '../style'
import { connect } from 'react-redux'
class Recommend extends PureComponent {
  render() {
    const {list} = this.props
    return (
      <Fragment>
        <RecommendWrapper>
          {
            list.map((item) => {
              return (
                <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
              )
            })
          }
        </RecommendWrapper>
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend) 