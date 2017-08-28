import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import store from './store'
import App from './components/App.jsx'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'))
