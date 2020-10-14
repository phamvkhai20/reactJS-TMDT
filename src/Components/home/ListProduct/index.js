import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FillterProduct from './FillterProduct'
import RenderProductList from './RenderProductList'

const ListProduct = (props) => {
    const [valueSearch, setvalueSearch] = useState({ nameProduct: "", category: "" })
    const [fillters, setFillters] = useState()
    const [isFillter, setIsFillter] = useState(false)
    //Lọc sản phẩm theo category
    useEffect(() => {
        const filterProduct = props.arrProduct.filter((item) => Number(valueSearch.category) === Number(item.category));
        setIsFillter(true);
        (isFillter && valueSearch.category !== "0") ? setFillters(filterProduct) : setFillters(props.arrProduct)
    }, [valueSearch.category])
    //Lọc sản phẩm theo tên
    useEffect(() => {
        const nameP = valueSearch.nameProduct.toLowerCase();
        const filterProduct2 = props.arrProduct.filter(item => item.name.toLowerCase().indexOf(nameP) >= 0);
        setIsFillter(true);
        return setFillters(filterProduct2);
    }, [valueSearch.nameProduct])

    const handleChangeFillter = (infoProduct) => {
        setvalueSearch(infoProduct)
    }
    return (
        <div className="container mt-5">
            <h4>Sản phẩm <Link to="/products"><button className="btn btn-success" style={{borderRadius:"20px",marginLeft:"20px"}}>Xem thêm</button></Link> </h4>
            <FillterProduct fillterProduct={handleChangeFillter} />
                {fillters ? <RenderProductList arrProductList={fillters}/>:<RenderProductList arrProductList={props.arrProduct}/> }
        </div>
    )
}

export default ListProduct
