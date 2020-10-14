import React from 'react'

const InputFillterName = (props) => {
    return (
        <div className="form-group col-md-2">
            <input type="text" onChange={(e)=>props.PropOnchange(e)} name="nameProduct" className="form-control input__filter_product"  placeholder="Tên Sản Phẩm"/>
        </div>
                    
    )
}

export default InputFillterName
