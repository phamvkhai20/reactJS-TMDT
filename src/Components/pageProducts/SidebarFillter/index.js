import React from 'react'
import {categories} from '../../../dataFake/category/category'
import FilterCategory from './FilterCategory'
import FilterPrice from './FilterPrice'
const SidebarFillter = () => {
    return (
        <div className="mt-3 sidebar__fillter">
            <FilterCategory categories={categories}/>
            <FilterPrice />
            <button className="btn btn-primary button__filter_price">ok</button>
        </div>
    )
}

export default SidebarFillter
