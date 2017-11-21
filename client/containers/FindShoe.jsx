import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { findShoeThunk } from '../actions'
import FindShoe from '../components/FindShoe.jsx'

const mapStateToProps = state => {
  return { matchingShoe: state.matchingShoe }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findShoeThunk }, dispatch)
}

export default connect(mapStateToProps, { findShoeThunk })(FindShoe)
