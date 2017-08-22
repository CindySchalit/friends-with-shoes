import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Home from './Home.jsx'
import About from './About.jsx'
import Shoes from './Shoes.jsx'

const App = () => {
  return (
    <div>
      <ul>
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
      <Redirect to="/home" push />
      <Route path="/home" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/shoes" component={ Shoes } />
    </div>
  )
}

export default App
