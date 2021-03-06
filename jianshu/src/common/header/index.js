import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
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
  render() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      login,
      logout,
      handleInputFocus,
      handleInputBlur,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props
    const newList = list.toJS() //把immutable对象转化成普通对象,才能newList[i]
    const pageList = []
    // ajax获取到数据后，才做渲染
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <Link to="/">
          <NavItem className='fl active'>首页</NavItem>
          </Link>
          <NavItem className='fl'>下载App</NavItem>
          {
            login ? <NavItem className='fr' onClick={logout}>退出</NavItem> :
              <Link to="/login"><NavItem className='fr'>登录</NavItem></Link>
          }
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
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
            <SearchInfo className={focused || mouseIn ? '' : 'dn'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}>
                  <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
                  换一批
                </SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                {pageList}
              </SearchInfoList>
            </SearchInfo>
          </SearchWrapper>
          <Addition>
            <Link to="/write">
              <Button className='writting'>
                <i className="iconfont">&#xe615;</i>
                写文章
            </Button>
            </Link>
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
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      dispatch(actionCreators.getSearchFocusAction());
      // list为空时才发送请求
      (list.size === 0) && actionCreators.getList()(dispatch)
    },
    handleInputBlur() {
      const action = actionCreators.getSearchBlurAction()
      dispatch(action)
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      // 除了数字以外的字符串替换成空
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        // 字符串以十进制转换为数字
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      // 使用js原生方法改变样式
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)' // 字符串拼接
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)