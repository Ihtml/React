import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  render () {
    const {focused, list, page, mouseIn, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave} = this.props
    const newList = list.toJS() //把immutable对象转化成普通对象,才能newList[i]
    const pageList = []
    for (let i = (page -1) * 10; i < page * 10; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='fl active'>首页</NavItem>
          <NavItem className='fl'>下载App</NavItem>
          <NavItem className='fr'>登录</NavItem>
          <NavItem className='fr'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={400}
              classNames="slide"
            >
              <NavSearch 
              className={focused ? 'focused' : ''} 
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
            <SearchInfo className={focused || mouseIn ? '' : 'dn'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                {pageList}
              </SearchInfoList>
            </SearchInfo>
          </SearchWrapper>
          <Addition>
            <Button className='writting'>
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}


// 把store里的数据通过props传递给组件
const mapStateToProps = (state) => {
  return {
    // focused: state.header.get('focused') //header是immutable
    // 使用redux-immutable后，现在state也是immutable对象
    focused: state.getIn(['header', 'focused']),
    // focused: state.get('header').get('focused') 和上面的写法作用一样
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.getSearchFocusAction())
      // ajax发送请求获取推荐数据
      dispatch(actionCreators.getList())
    },
    handleInputBlur () {
      const action = actionCreators.getSearchBlurAction()
      dispatch(action)
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header)