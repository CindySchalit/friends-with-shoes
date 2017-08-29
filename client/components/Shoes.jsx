import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

import styles from './styles/shoes.css'

const Shoes = (props) => {
  const shoes = props && props.shoes

  return(
    <div className="Grid-Container-Shoes">
      <h1>Shoes Who Need Friends</h1>
      <br />
      <Grid fluid={true} className="Grid-Shoes">
        {
          shoes.map((row, index) =>
            <Row className="show-grid" key={index}>{
              row.map(shoe =>
                <Col className="Col-Shoes" key={shoe.id} xs={6} md={4} lg={4}>
                  <Image className="Image-Shoes" src={shoe.image} rounded responsive={true}/>
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
  )
}

export default Shoes
