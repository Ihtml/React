import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { DownloadBox } from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class Download extends PureComponent {
  render() {
    const {} = this.props
    return (
      <DownloadBox href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
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
})
const mapDispatch = (dispatch) => ({
})
export default connect(mapState, mapDispatch)(Download)