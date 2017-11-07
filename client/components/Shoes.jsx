import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

import styles from './styles/shoes.css'

class Shoes extends Component {
  render() {
    const shoes = this.props && this.props.shoes

    return(
      <div>
        <h1>Shoes Who Need Friends</h1>
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

                      <h4 className="header-Shoes">{shoe.shoeBrand}</h4>

                      <h5 className="header-Shoes italics-Shoes">{shoe.shoeName}</h5>

                      Gender: {shoe.gender}
                      <br />
                      Size: {shoe.size}
                      <br />
                      Color: {shoe.color}
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

export default Shoes
