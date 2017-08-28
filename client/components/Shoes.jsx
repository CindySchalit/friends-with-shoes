import React from 'react'

const Shoes = (props) => {
  const shoes = props && props.shoes

  console.log('shoes:\n', shoes)

  return(
    <div>
      <h1>Shoes Page</h1>
      <ul>
      {
        shoes.map(shoe =>
          <li key={shoe.id}>
            {shoe.shoeBrand}
          </li>
        )
      }
      </ul>
    </div>
  )
}

export default Shoes
