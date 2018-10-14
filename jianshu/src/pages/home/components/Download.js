import React, { PureComponent} from 'react'
import { connect } from 'react-redux'
import { DownloadBox, Qrcode } from '../style'
import { actionCreators } from '../store'
import { CSSTransition } from 'react-transition-group'

class Download extends PureComponent {
  render() {
    const { isDownloadHover, isMouseEnter } = this.props
    return (
      <DownloadBox onMouseEnter={() => { isMouseEnter(true) }} onMouseLeave={() => { isMouseEnter(false) }} href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
        <CSSTransition
          in={isDownloadHover}
          timeout={400}
          classNames="slide"
        >
          <Qrcode className={isDownloadHover ? '' : ' dn'}>
            <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="download" />
          </Qrcode>
        </CSSTransition>
        <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="download" />
        <div className="info" >
          <div className="title">
            下载简书手机APP<i className="iconfont">&#xe6c7;</i>
          </div>
          <div className="description">随时随地发现和创作内容</div>
        </div>
      </DownloadBox>
    )
  }
}

const mapState = (state) => ({
  isDownloadHover: state.getIn(['home', 'isDownloadHover'])
})
const mapDispatch = (dispatch) => ({
  isMouseEnter(flag) {
    if (flag) {
      console.log('in')
      dispatch(actionCreators.toggleQrcodeShow(true))
    } else {
      console.log('out')
      dispatch(actionCreators.toggleQrcodeShow(false))
    }
  }
})
export default connect(mapState, mapDispatch)(Download)