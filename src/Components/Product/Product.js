import React from 'react'

function Product (props) {
   let {key, productName, price, imageURL} = props

    return (
        <div key = {key}>
            <img src={imageURL} alt="Baby Grand Piano"/>
            <h2>{productName}</h2>
            <h2>Price: ${price}</h2>
        </div>
    )
}
export default Product