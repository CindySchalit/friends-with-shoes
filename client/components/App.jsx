import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home.jsx'
import About from './About.jsx'
import Shoes from './Shoes.jsx'

import styles from '../../public/styles/navBar.css'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </li>
        <li>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </li>
        <li>
          <nav>
            <Link to="/shoes">Shoes</Link>
          </nav>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/shoes" component={ Shoes } />
      </Switch>
    </div>
  )
}

export default App
