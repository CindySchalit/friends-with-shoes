import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home.jsx'
import About from './About.jsx'
import Shoes from './Shoes.jsx'

import styles from './styles/navBar.css'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <nav>
            <Link className="link" to="/">Home</Link>
          </nav>
        </li>
        <li>
          <nav>
            <Link className="link" to="/about">About</Link>
          </nav>
        </li>
        <li>
          <nav>
            <Link className="link" to="/shoes">Shoes</Link>
          </nav>
        </li>
      </ul>
      <br></br>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/shoes" component={ Shoes } />
      </Switch>
    </div>
  )
}

export default App
