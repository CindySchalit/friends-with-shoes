import React from 'react'
import { HashRouter, Link, Route } from 'react-router-dom'
import styles from './styles/navBar.css'

const NavBar = () => {
  return(
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
  )
}

export default NavBar
