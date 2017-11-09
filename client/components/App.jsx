import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { render } from 'react-dom'

import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Shoes from '../containers/Shoes.jsx'
import Footer from './Footer.jsx'

import styles from './styles/app.css'

const App = () => {
  return (
    <div className="app">
      <NavBar />

      <Switch>
        <Route exact path="/" component={ About } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/shoes" render={ () => <Shoes /> } />
        <Route exact path="/matches" render={ () => <Shoes /> } />
      </Switch>

      <Footer />
    </div>
  )
}

export default App
