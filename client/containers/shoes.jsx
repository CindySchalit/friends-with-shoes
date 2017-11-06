import React from 'react'
import { connect } from 'react-redux'
import { chunk } from 'lodash'

import Shoes from '../components/Shoes.jsx'

const mapStateToProps = state => {
  console.log('state in shoes container:', state)

  return {
    shoes: _.chunk(state.shoes, 3)
  }
}

export default connect(mapStateToProps)(Shoes)
