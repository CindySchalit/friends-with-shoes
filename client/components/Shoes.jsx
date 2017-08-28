import React from 'react'
import { Col } from 'react-bootstrap'

const Shoes = (props) => {
  const shoes = props && props.shoes

  console.log('shoes:\n', shoes)

  return(
    <div>
      <h1>Shoes Page</h1>
      <ul>
      {
        shoes.map(shoe =>
          <Col key={shoe.id}>
            {shoe.shoeBrand}
          </Col>
        )
      }
      </ul>
    </div>
  )
}

export default Shoes
