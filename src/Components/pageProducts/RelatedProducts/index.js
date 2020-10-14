import React, { useEffect, useState } from 'react'
import ProductRelated from './ProductRelated'
const RelatedProducts = (props) => {
 
    const [itemRelatedProduct, setItemRelatedProduct] = useState("")
    useEffect(() => {
        console.log(props.idProduct)
       const getRelatedProduct = props.listProduct.filter((item)=>props.category===item.category)
       setItemRelatedProduct(getRelatedProduct.filter((item)=>Number(props.idProduct)!==Number(item.id)))
    }, [props.idProduct])


    return (
        itemRelatedProduct.length>0&&<div className="container">
            <h3 className="mt-3">Sản phẩm liên quan</h3>
            <div className="row">
                {itemRelatedProduct.map((item, index )=><ProductRelated key={index} infoProduct={item}/>)}
            </div>
        </div>
    )
}
export default RelatedProducts
