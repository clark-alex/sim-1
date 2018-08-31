import React from 'react'
import '../../App.css'

function Product (props) {
   let {productName, price, imageURL} = props

    return (
        <div >
            <img 
            className = 'product_image'
            src={imageURL} />
            <h2>{productName}</h2>
            <h2>Price: ${price}</h2>
        </div>
    )
}
export default Product