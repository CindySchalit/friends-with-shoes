import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import styles from './styles/navBar.css'

const NavBar = () => {
  return(
    <ul className="ul-NavBar">
      <li className="li-NavBar">
        <nav className="nav-NavBar">
          <Link className="link-NavBar" to="/">Home</Link>
        </nav>
      </li>
      <li className="li-NavBar">
        <nav className="nav-NavBar">
          <Link className="link-NavBar" to="/about">About</Link>
        </nav>
      </li>
      <li className="li-NavBar">
        <nav className="nav-NavBar">
          <Link className="link-NavBar" to="/shoes">Shoes</Link>
        </nav>
      </li>
    </ul>
  )
}

export default NavBar
