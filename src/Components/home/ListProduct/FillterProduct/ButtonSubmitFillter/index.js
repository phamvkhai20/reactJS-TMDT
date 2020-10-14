import React from 'react'

const ButtonSubmitFillter = (props) => {
    return (
        <div className="form-group col-md-2">{props.active?
                    <button className="btn btn-primary input__filter_product" onClick={()=>props.handleSubmit(props.valueFillter)}>Lọc sản phẩm</button>:
                    <button className="btn btn-secondary input__filter_product">Lọc sản phẩm</button>}
        </div>
    )
}

export default ButtonSubmitFillter
