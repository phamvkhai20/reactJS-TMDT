import React from 'react'
import { ProductSale } from '../../../dataFake/home/ProductSale'
import RenderProductSaleNew from './RenderProductSaleNew'

const ProductNew = () => {
    
    return (
        <div className="row mt-3">
           <RenderProductSaleNew  data={ProductSale}/>
        </div>
    )
}

export default ProductNew
