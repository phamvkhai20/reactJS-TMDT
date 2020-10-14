import React from 'react'
const RenderProductSaleNew = (props) => {
    return (
        props.data.map((item,index)=>
        <div className="col-4">
            <img src={item.image} alt="gg" style={{width:"100%"}}/>
        </div>
        )
    )
}

export default RenderProductSaleNew
