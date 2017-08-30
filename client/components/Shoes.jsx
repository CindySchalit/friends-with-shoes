import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

import styles from './styles/shoes.css'

const Shoes = (props) => {
  const shoes = props && props.shoes

  return(
    <div>
      <h1>Shoes Who Need Friends</h1>
      <br />
      <div className="Grid-Container-Shoes">
        <Grid fluid={true} className="Grid-Shoes">
          {
            shoes.map(row =>
              <Row key={row.reduce((a, b) => a+b)}>{
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

export default Shoes
