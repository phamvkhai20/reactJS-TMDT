import React from 'react'
import { listProduct } from '../../dataFake/listProduct'
import ListProduct from '../../components/home/ListProduct'
import SidebarMenu from '../../components/shared/Sidebar'
import SlideShow from '../../components/shared/SlideShow'
import ProductNew from '../../components/home/ProductNew'

const PageHome = () => {
    return (
        <>
            <div className="container header2 mt-3">
                <div className="row">
                    <div className="col-3">
                        <SidebarMenu />
                    </div>
                    <div className="col-9">
                        <SlideShow />
                    </div>
                </div>
                <ProductNew />
            </div>
            <ListProduct arrProduct={listProduct} />
        </>
    )
}

export default PageHome
