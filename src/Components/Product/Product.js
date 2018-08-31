import React from 'react'
import '../../App.css'

function Product (props) {
   let {productName, price, imageURL} = props

    return (
        <div >
            <div>
               <img 
                    className = 'product_image'
                    src={imageURL} />
                <h2>{productName}</h2>
                <h2>Price: ${price}</h2>  
            </div>
            {/* <div>
                <button>Edit Product</button>
            </div> */}
            <hr/>
        </div>
    )
}
export default Product