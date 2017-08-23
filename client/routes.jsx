import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Shoes from './components/Shoes.jsx'

const Routes = () => {
  return(
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/shoes" component={ Shoes } />
      </Switch>
    </div>
  )
}

export default Routes
