import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store/index'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path='/' exact render={() => <div>HOME</div>}></Route>
              <Route path='/detail' exact render={() => <div>Detail</div>}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App;
