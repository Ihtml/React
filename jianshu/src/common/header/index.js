import React, {Component} from 'react'
import { CSSTransition } from 'react-transition-group';
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
  constructor (props){
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  handleInputFocus () {
    this.setState(() => ({
      focused: true
    }))
  }
  handleInputBlur () {
    this.setState(() => ({
      focused: false
    }))
  }
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
            <CSSTransition
              in={this.state.focused}
              timeout={400}
              classNames="slide"
            >
              <NavSearch 
              className={this.state.focused ? 'focused' : ''} 
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
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