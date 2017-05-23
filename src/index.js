import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'
import { Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { syncHistoryWithStore } from 'mobx-react-router'
import {
  AuthStore,
  HintStore,
  RouterStore,
} from './stores'
import { App } from './containers'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const stores = {
  routing: routingStore,
  authStore: new AuthStore(),
  hintStore: new HintStore(),
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
