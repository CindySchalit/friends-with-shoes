import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import store, { history } from './store'
import App from './components/App.jsx'

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
