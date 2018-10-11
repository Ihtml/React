import React, { PureComponent, Fragment } from 'react'
import {RecoWriterTitle,WriterSwitch,WriterList,WriterItem,MoreWriter} from '../style'

class Writer extends PureComponent {
  render() {
    return (
      <Fragment>
        <RecoWriterTitle>
          推荐作者
          <WriterSwitch>
            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
            换一批
          </WriterSwitch>
        </RecoWriterTitle>
        <WriterList>
          <WriterItem>
            <a className="avatar" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">
              <img alt="avatar" src="https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></img>
            </a>
            <a className="follow" >
            <i className="iconfont ic-follow">&#xeaf3;</i>
            关注
            </a>
            <a className="name" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">王诗翔</a>
            <div className="info">写了428.6k字 · 1.6k喜欢</div>
          </WriterItem>
          <WriterItem>
            <a className="avatar" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">
              <img alt="avatar" src="https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></img>
            </a>
            <a className="follow" >
            <i className="iconfont ic-follow">&#xeaf3;</i>
            关注
            </a>
            <a className="name" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">王诗翔</a>
            <div className="info">写了428.6k字 · 1.6k喜欢</div>
          </WriterItem>
          <WriterItem>
            <a className="avatar" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">
              <img alt="avatar" src="https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></img>
            </a>
            <a className="follow" >
            <i className="iconfont ic-follow">&#xeaf3;</i>
            关注
            </a>
            <a className="name" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">王诗翔</a>
            <div className="info">写了428.6k字 · 1.6k喜欢</div>
          </WriterItem>
          <WriterItem>
            <a className="avatar" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">
              <img alt="avatar" src="https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></img>
            </a>
            <a className="follow" >
            <i className="iconfont ic-follow">&#xeaf3;</i>
            关注
            </a>
            <a className="name" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">王诗翔</a>
            <div className="info">写了428.6k字 · 1.6k喜欢</div>
          </WriterItem>
          <WriterItem>
            <a className="avatar" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">
              <img alt="avatar" src="https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></img>
            </a>
            <a className="follow" >
            <i className="iconfont ic-follow">&#xeaf3;</i>
            关注
            </a>
            <a className="name" target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/u/b6608e27dc74?utm_source=desktop&utm_medium=index-users">王诗翔</a>
            <div className="info">写了428.6k字 · 1.6k喜欢</div>
          </WriterItem>
          <MoreWriter target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users">查看全部<i className="iconfont">&#xe6c7;</i></MoreWriter>
        </WriterList>
      </Fragment>
    )
  }
}

export default Writer