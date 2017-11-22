import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { findShoeThunk } from '../actions'
import FindShoe from '../components/FindShoe.jsx'

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findShoeThunk }, dispatch)
}

export default connect(null, { findShoeThunk })(FindShoe)
