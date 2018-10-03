import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo } from '../style'
class List extends Component {
  render() {
    const { list } = this.props
    return (
      <Fragment>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
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
            )
          })
        }
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articList'])
})
export default connect(mapState, null)(List)