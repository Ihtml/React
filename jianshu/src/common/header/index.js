import React, {Component} from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  render() {
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
            <NavSearch />
            <i className="iconfont">&#xe614;</i>
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

export default Header