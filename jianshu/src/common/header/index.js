import React, {Component} from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
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
          <NavItem className='fr'>Aa</NavItem>
          <NavSearch />
          <Addition>
            <Button className='writting'>写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header