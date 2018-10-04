import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to="/detail">
                <ListItem >
                  <img
                    className='pic'
                    src={item.get('imgUrl')}
                    alt={item.get('title')}
                  />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articList']),
  page: state.getIn(['home', 'articPage'])
})
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    actionCreators.getMoreList(page)(dispatch)
  }
})
export default connect(mapState, mapDispatch)(List)