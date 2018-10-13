import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { RecoWriterTitle, WriterSwitch, WriterList, WriterItem, MoreWriter } from '../style'
import { actionCreators } from '../store';

class Writer extends PureComponent {
  render() {
    const { list, writerPage, writerTotalPage, handleChangePage } = this.props
    const newList = list.toJS() //把immutable对象转化成普通对象,才能newList[i]
    const writerList = []
    if (newList.length) {
      for (let i = (writerPage - 1) * 5; i < writerPage * 5; i++) {
        if (newList[i]) {
          writerList.push(
            <WriterItem key={newList[i].id}>
              <a className="avatar" target="_blank" rel="noopener noreferrer" href={newList[i].link_url}>
                <img alt="avatar" src={newList[i].avatar_source}></img>
              </a>
              <Link to="/write">
                <div className="follow">
                  <i className="iconfont ic-follow">&#xeaf3;</i>
                  关注
              </div>
              </Link>
              <a className="name" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">{newList[i].nickname}</a>
              <div className="info">写了{newList[i].total_wordage}字 · {newList[i].total_likes_count}喜欢</div>
            </WriterItem>
          )
        }
      }
    }
    return (
      <Fragment>
        <RecoWriterTitle>
          推荐作者
          <WriterSwitch onClick={() => { handleChangePage(writerPage, writerTotalPage, this.spinIcon) }}>
            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
            换一批
          </WriterSwitch>
        </RecoWriterTitle>
        <WriterList>
          {
            writerList
          }
          <MoreWriter target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users">查看全部<i className="iconfont">&#xe6c7;</i></MoreWriter>
        </WriterList>
      </Fragment>
    )
  }
  componentDidMount() {
    this.props.getWriterList()
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'writerList']),
    writerPage: state.getIn(['home', 'writerPage']),
    writerTotalPage: state.getIn(['home', 'writerTotalPage'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getWriterList() {
      dispatch(actionCreators.getWriterList())
    },
    handleChangePage(page, totalPage, spin) {
      // 除了数字以外的字符串替换成空
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10) //字符串转数字
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changeWriterPage(page + 1))
      } else {
        dispatch(actionCreators.changeWriterPage(1))
      }
    }
  }
}
export default connect(mapState, mapDispatch)(Writer)