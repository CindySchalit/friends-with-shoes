import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/navBar.css'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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
}
