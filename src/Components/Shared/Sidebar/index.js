import React from 'react'
import { Link } from 'react-router-dom'
import {categories} from '../../../dataFake/category/category'
const SidebarMenu = () => {
    // const [getcategories, setCategory] = useState(categories)
    // console.log(categories)
    return (
        <div className="sidebar-menu">
            <ul className="option__filter">     
                {categories.map((item)=>
                    <Link to={`/products/category/${item.id}`} key={item.id}><li>{item.nameCategory}</li></Link> )
                }
            </ul>
        </div>
    )
}

export default SidebarMenu
