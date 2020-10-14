import React from 'react'
import { Link } from 'react-router-dom'

const ProductRelated = (props) => {
    return (
            <div className="col-3 mt-3">
                    <div className="card cart-product" style={{ width: "105%",minHeight:"407px" }}>
                        <img src={props.infoProduct.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.infoProduct.name}</h5>
                                <p className="card-text">{props.infoProduct.price} VND</p>
                                <Link to={`/product/${props.infoProduct.id}`} className="btn btn-primary button-mua">Mua Ngay</Link>
                            </div>
                    </div>
                </div>
    )
}

export default ProductRelated
