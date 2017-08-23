import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Shoes from './Shoes.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <br />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/shoes" component={ Shoes } />
      </Switch>
    </div>
  )
}

export default App
