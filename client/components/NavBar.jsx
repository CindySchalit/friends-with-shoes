import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/navBar.css'

const NavBar = () => {
  return(
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
    </div>
  )
}

export default NavBar
