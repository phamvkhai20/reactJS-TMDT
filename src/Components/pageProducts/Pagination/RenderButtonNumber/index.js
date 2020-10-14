import React from 'react'

const RenderButtonNumber = (props) => {
    return (
        props.totalPages&&props.totalPages.map((item,index)=>
            <li key={index} className={props.numberActive==item?"page-item active":"page-item"} onClick={()=>props.setNumberActive(item)}><a className="page-link" href="#">{item}</a></li>
        )
    )
}

export default RenderButtonNumber
