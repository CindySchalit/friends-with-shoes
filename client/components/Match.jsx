import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from './styles/match.css'

const Match = props => {
  console.log('props:', props)

  if (Object.keys(props.matchingShoe).length) {
    return (
      <div>
        <h2 className="h2-Match">Congratulations - how exciting! You found a match!</h2>
        <img className="img-Match" src={props.matchingShoe.image} alt="matching shoe"/>
      </div>
    )
  }

  return (
    <div className="noMatch">
      <h2 className="h2-Match">Womp womp ... No matches at this time.  Try again later!</h2>
      <img className="img-Match" src="../../public/robocat.png" alt="robocat"/>
    </div>
  )

}

export default withRouter(Match)
