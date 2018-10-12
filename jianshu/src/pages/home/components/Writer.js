import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { RecoWriterTitle, WriterSwitch, WriterList, WriterItem, MoreWriter } from '../style'
import { actionCreators } from '../store';

class Writer extends PureComponent {
  render () {
    const {writerPage, writerTotalPage, handleChangePage} = this.props
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
          <WriterItem>
            <a className="avatar" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">
              <img alt="avatar" src="https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></img>
            </a>
            <Link to="/write">
              <div className="follow">
                <i className="iconfont ic-follow">&#xeaf3;</i>
                关注
              </div>
            </Link>
            <a className="name" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">王诗翔</a>
            <div className="info">写了428.6k字 · 1.6k喜欢</div>
          </WriterItem>
          <MoreWriter target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users">查看全部<i className="iconfont">&#xe6c7;</i></MoreWriter>
        </WriterList>
      </Fragment>
    )
  }
  componentDidMount () {
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
    getWriterList () {
      dispatch(actionCreators.getWriterList())
    },
    handleChangePage (page, totalPage, spin) {
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
export default connect(mapState,mapDispatch)(Writer)