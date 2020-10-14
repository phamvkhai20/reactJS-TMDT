import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import RenderListCategory from './RenderListCategory'

const FilterCategory = (props) => {
    return (
        <>
            <h5 className="category_product">Danh mục sản phẩm</h5>
            <ul className="option__filter">     
                    <NavLink to={`/products/category/0`} 
                    activeStyle={{ fontWeight: "bold", color: "red" }} 
                    ><li>Tất cả sản phẩm</li>
                    </NavLink>
                    <RenderListCategory categories={props.categories}/>
            </ul>
        </>
    )
}

export default FilterCategory
