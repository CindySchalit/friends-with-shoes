import React from 'react'
import { connect } from 'react-redux'

import Shoes from '../components/Shoes.jsx'

const mapStateToProps = state => {
  return {
    shoes: state.shoes
  }
}

export default connect(mapStateToProps)(Shoes)