import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'
import { Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { syncHistoryWithStore } from 'mobx-react-router'
import {
  RouterStore,
  AuthStore,
  SmoochStore,
} from './stores'
import { App } from './containers'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const stores = {
  routing: routingStore,
  authStore: new AuthStore(),
  smoochStore: new SmoochStore(),
}

const history = syncHistoryWithStore(browserHistory, routingStore)

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
