import React from 'react'

const FilterPrice = () => {
    return (
        <>
            <h5 className="category_product">Giá</h5>
            <div className="row" style={{margin:"0px 5px 0 5px"}}>
                <div className="col">
                <input type="number" className="form-control input__price" placeholder="min" />
                </div>
                <span style={{paddingTop:"5px"}}>-</span>
                <div className="col">
                <input type="number" className="form-control" placeholder="max" />
                </div>
            </div>
        </>
    )
}

export default FilterPrice
