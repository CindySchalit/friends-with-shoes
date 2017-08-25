import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getShoes } from '../actions'
import Shoes from '../components/Shoes.jsx'

const mapStateToProps = state => {
  return {
    shoes: state.shoes
  }
}

export default withRouter(connect(mapStateToProps)(Shoes))
