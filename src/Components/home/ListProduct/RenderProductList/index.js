import React from 'react'
import Product from '../Product'

const RenderProductList = (props) => {
    return (
        <div className="row mb-5">
            {props.arrProductList.map((item, index) =>
            <Product infoProduct={item} key={index} />
            )}
        </div>
        
    )
}

export default RenderProductList
