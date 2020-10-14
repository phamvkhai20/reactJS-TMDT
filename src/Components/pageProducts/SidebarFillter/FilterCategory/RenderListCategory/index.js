import React from 'react'
import { NavLink } from 'react-router-dom'

const RenderListCategory = (props) => {
    return (
        props.categories.map((item)=>
                    <NavLink to={`/products/category/${item.id}`} 
                    activeStyle={{ fontWeight: "bold", color: "red" }} 
                    key={item.id}><li>{item.nameCategory}</li>
                    </NavLink> 
                    )
    )
}

export default RenderListCategory
