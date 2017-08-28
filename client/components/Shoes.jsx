import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

import styles from './styles/shoes.css'

const Shoes = (props) => {
  const shoes = props && props.shoes
  console.log('shoes:\n', shoes)

  return(
    <div>
      <h1>Shoes Who Need Friends</h1>
      <br />
      <Grid>
        <Row className="show-grid">
        {
          shoes.map(shoe =>
            <Col className="Col-Shoes" key={shoe.id} xs={6} md={4}>
              <Image className="Image-Shoes" src={shoe.image} rounded xs={6} md={4} responsive />
              <br />
              Brand: {shoe.shoeBrand}
              <br />
              Style: {shoe.shoeName}
              <br />
              Gender: {shoe.gender}
              <br />
              Size: {shoe.size}
              <br />
              Color: {shoe.color}
            </Col>)
        }
        </Row>
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Shoes
