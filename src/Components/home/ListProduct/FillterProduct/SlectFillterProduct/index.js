import React from 'react'

const SelectFillterProduct = (props) => {
    return (
        <div className="form-group col-md-2">
            <select className="form-control input__filter_product" onChange={(e)=>props.PropOnchange(e)} name="category" id="exampleFormControlSelect1 ">
                <option value="0">Tất cả sản phẩm</option>
                <option value="1">Điện thoại</option>
                <option value="2">Đồng hồ thông minh</option>
                <option value="3">Loa bluetooth</option>
                <option value="4">Laptop</option>
                <option value="5">Tai nghe bluetooth</option>
                <option value="6">Sạc dự phòng</option>
            </select>
        </div>
    )
}

export default SelectFillterProduct
