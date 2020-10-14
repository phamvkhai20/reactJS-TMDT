import React, { useEffect, useState } from 'react'
import RenderProductList from '../../components/home/ListProduct/RenderProductList'
import { listProduct } from '../../dataFake/listProduct'
import '../../assets/sass/products/page-products.scss'
import SidebarFillter from '../../components/pageProducts/SidebarFillter'
import HeaderProducts from '../../components/pageProducts/HeaderProducts'
import { useParams } from 'react-router-dom'
import Pagination from '../../components/pageProducts/Pagination'

const Products = () => {
    const {idCategory} = useParams();
    const [itemFillter, setItemFillter] = useState(0)
    const [Product1PagePagination, setProduct1PagePagination] = useState(0)
    useEffect(() => {
        if(idCategory){
            if(idCategory=="0"){
                setItemFillter(listProduct)
            }else {
                const filterProductCategory = listProduct.filter((item)=>item.category===Number(idCategory));
                setItemFillter(filterProductCategory);
            }
        }
    }, [idCategory])

    const getProductPagination=(product)=>{
        setProduct1PagePagination(product)
    }

    useEffect(() => {
        Product1PagePagination&&setItemFillter(Product1PagePagination)
    }, [Product1PagePagination])
   

    return (
        itemFillter?
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <SidebarFillter />
                </div>
                <div className="col-9 mt-3 box__product" style={{ background: "#fff" }}>
                    <HeaderProducts />
                    <RenderProductList arrProductList={itemFillter} />
                    {itemFillter.length>=8&&<Pagination arrProductList={itemFillter}
                                getProductPagination={getProductPagination}
                                numberProduct1page={8}
                    />}
                </div>
            </div>
        </div>  : <div>Loading</div>
    )
}

export default Products
