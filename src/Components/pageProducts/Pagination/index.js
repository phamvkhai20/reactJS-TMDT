import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ButtonNext from './ButtonNext';
import ButtonPrev from './ButtonPrev';
import RenderButtonNumber from './RenderButtonNumber';

const Pagination = (props) => {
    const [numberActive, setNumberActive] = useState(1);
    const [listProduct1Page, setListProduct1Page] = useState(props.numberProduct1page)
    const [items, setItems] = useState(props.arrProductList)
    const [totalPages, setTotalPages] = useState(0)
    const [listProductNew, setListProductNew] = useState(0)
    useEffect(() => {
        const CountProduct=items.length;
        if(CountProduct>listProduct1Page){
            const getProduct1Page = items.filter((item,index)=>
                ((0+numberActive-1)*listProduct1Page)<index&&(((0+numberActive-1)*listProduct1Page+1)+listProduct1Page)>index
            )
            numberPagination(Math.ceil(CountProduct/listProduct1Page))
            setListProductNew(getProduct1Page)
        }
    }, [numberActive])

    useEffect(() => {
            props.getProductPagination(listProductNew)
    }, [listProductNew])

    const numberPagination = (totalPage)=>{
        var arr = [];
        for (var i = 1; i <= totalPage; i++) {
            arr.push(i);
        }
        setTotalPages(arr)
    }
    const setNumber = (number) =>{
        setNumberActive(number)
    }
    return (
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <ButtonPrev numberActive={numberActive} disabled={numberActive==1?"disabled" :""} setNumberActive={setNumber} />
                <RenderButtonNumber totalPages={totalPages} numberActive={numberActive} setNumberActive={setNumber}/>
                <ButtonNext  numberActive={numberActive} setNumberActive={setNumber} disabled={numberActive<(totalPages.length+1)?"disabled" :""} />
            </ul>
        </nav>
    )
}

export default Pagination
