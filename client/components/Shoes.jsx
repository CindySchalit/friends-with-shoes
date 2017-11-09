import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

import { getShoesThunk } from '../actions'
import styles from './styles/shoes.css'

class Shoes extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(getShoesThunk())
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location !== this.props.location) {
      console.log('nextProps:', nextProps)
    }
  }

  render() {
    const shoes = this.props && this.props.shoes

    return(
      <div>
        <h2>Lonely Shoes</h2>
        <div className="Grid-Container-Shoes">
          <Grid fluid={true} className="Grid-Shoes">
            {
              shoes.map((row, index) =>
                <Row key={index}>{
                  row.map(shoe =>
                    <Col className="Col-Shoes" key={shoe.id} md={3} mdOffset={3}>

                      <div className="Image-Container">
                        <Image className="Image-Shoes" src={shoe.image} rounded responsive={true}/>
                      </div>

                      <h4 className="brand-Shoes">{shoe.shoeBrand}</h4>

                      <h4 className="name-Shoes">{shoe.shoeName}</h4>

                      <div className="shoesWrapper">
                        <div className="shoesLeft">
                          Gender: {shoe.gender}
                          <br />
                          Size: {shoe.size}
                        </div>
                        <div className="shoesRight">
                          Color: {shoe.color}
                          <br />
                          Foot: {shoe.foot}
                        </div>
                      </div>

                    </Col>
                  )
                }
                </Row>
              )
            }
          </Grid>
        </div>
      </div>
    )
  }
}

export default withRouter(Shoes)
