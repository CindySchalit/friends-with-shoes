import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Shoes from './Shoes.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/shoes" component={ Shoes } />
        </Switch>
      </div>
    </div>
  )
}

export default App
