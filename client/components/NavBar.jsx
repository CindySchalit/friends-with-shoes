import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import styles from './styles/navBar.css'
import shoeRackTrans from '../../public/shoeRackTrans.png'

const NavBar = () => {
  return(
    <div>

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
            <Link className="link-NavBar" to="/shoes">All the Shoes!</Link>
          </nav>
        </li>
        <li className="li-NavBar">
          <nav className="nav-NavBar">
            <Link className="link-NavBar" to="/matches">Find a Shoe</Link>
          </nav>
        </li>
      </ul>

      <div className="Image-NavBar">
        <h1 className="Header-NavBar">Friends with Shoes</h1>
      </div>

    </div>
  )
}

export default NavBar
