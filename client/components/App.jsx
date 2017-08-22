import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Shoes from './Shoes.jsx'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <nav>
            <Link to="/home">Home</Link>
          </nav>
        </li>
        <li>
          <nav>
            <Link to="/shoes">Shoes</Link>
          </nav>
        </li>
      </ul>
      <div>
        <Route path="/home" component={ Home } />
      </div>
      <div>
        <Route path="/shoes" component={ Shoes } />
      </div>
    </div>
  )
}

export default App
