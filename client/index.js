import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Router, Route } from 'react-router-dom'

import App from './components/App.jsx'
import Home from './components/Home.jsx'

ReactDOM.render((
    <HashRouter>
      <Route path="/" component={ App } />
    </HashRouter>
  ),
  document.getElementById('root')
)
