import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import store from './store'
import App from './components/App.jsx'

ReactDOM.render((
    <HashRouter>
      <Route path="/" component={ App } />
    </HashRouter>
  ),
  document.getElementById('root')
)
