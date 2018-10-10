import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {TopicWrapper, TopicItem, MoreItems} from '../style'
class Topic extends PureComponent {
  render() {
    const {list, moreTopicLinkUrl} = this.props
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img
                  className='topic-pic'
                  src={item.get('imgUrl')}
                  alt={item.get('title')}
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
        <MoreItems href={moreTopicLinkUrl}>更多热门专题 ></MoreItems>
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList'),
  moreTopicLinkUrl: state.getIn(['home','moreTopicLinkUrl'])
})
export default connect(mapState, null)(Topic)