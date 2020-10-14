import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RelatedProducts from '../../components/pageProducts/RelatedProducts'
import { listProduct } from '../../dataFake/listProduct'

const SingleProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(0)
    const  [idProduct, setIdProduct] = useState("")
    useEffect(() => {
        const findProduct =listProduct.find(item=>item.id==id);
        setIdProduct(id)
        setProduct(findProduct)
    }, [])
    useEffect(() => {
        setIdProduct(id)
        const findProduct =listProduct.find(item=>item.id==id);
        setProduct(findProduct)
    }, [id])
    return (
       <>
        <div className="container bg-light box__single_product">
            <div className="row mt-3">
                <div className="col-6">
                    <img src={product.image} />
                </div>
                <div className="col-6">
                <h5 className="product__name">{product.name}</h5>
                <p className="product__price">{product.price} VNĐ</p>
                </div>
            </div>
        </div>
        {product&&<RelatedProducts category={product.category} idProduct={idProduct} listProduct={listProduct}/>}
       </>
    )
}

export default SingleProduct
