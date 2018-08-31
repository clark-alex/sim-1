import React from 'react'
import '../../App.css'

function Product (props) {
   let {key, productName, price, imageURL} = props

    return (
        <div key = {key}>
            <img 
            className = 'product_image'
            src={imageURL} alt="Where did my image go?"/>
            <h2>{productName}</h2>
            <h2>Price: ${price}</h2>
        </div>
    )
}
export default Product