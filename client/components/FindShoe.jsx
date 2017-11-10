import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

import styles from './styles/findShoe.css'

class FindShoe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shoeBrand: '',
      shoeName: '',
      gender: '',
      size: '',
      color: '',
      foot: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('form submitted')
  }

  validateForm() {
    return true
  }

  render() {
    return (
      <div className="findShoe">
        <h2 className="h2-findShoe">Give me some info and I'll give you a shoe.</h2>

        <form onSubmit={ this.handleSubmit }>
          <FormGroup controlId="shoeBrand" bsSize="large">
            <ControlLabel className="control-label-findShoe">Brand</ControlLabel>
            <FormControl
              className="form-control-findShoe"
              type="text"
              value={this.state.shoeBrand}
              placeholder="Nike"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="shoeName" bsSize="large">
            <ControlLabel className="control-label-findShoe">Name</ControlLabel>
            <FormControl
              className="form-control-findShoe"
              type="text"
              value={this.state.shoeName}
              placeholder="Air Jordan"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="gender" bsSize="large">
            <ControlLabel className="control-label-findShoe">Gender</ControlLabel>
            <FormControl
              className="form-control-findShoe"
              type="text"
              value={this.state.gender}
              placeholder="Men's"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="size" bsSize="large">
            <ControlLabel className="control-label-findShoe">Size</ControlLabel>
            <FormControl
              className="form-control-findShoe"
              type="text"
              value={this.state.size}
              placeholder="7.5"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="color" bsSize="large">
            <ControlLabel className="control-label-findShoe">Color</ControlLabel>
            <FormControl
              className="form-control-findShoe"
              type="text"
              value={this.state.color}
              placeholder="Black"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="foot" bsSize="large">
            <ControlLabel className="control-label-findShoe">Foot</ControlLabel>
            <FormControl
              className="form-control-findShoe"
              type="text"
              value={this.state.foot}
              placeholder="left"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button
            className="findButton"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Go find me a shoe!
          </Button>
        </form>
      </div>
    )
  }
}

export default withRouter(FindShoe)
