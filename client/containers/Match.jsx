import React from 'react'
import { connect } from 'react-redux'

import Match from '../components/Match.jsx'

const mapStateToProps = state => {
  return {
    matchingShoe: state.matchingShoe
  }
}

export default connect(mapStateToProps)(Match)
