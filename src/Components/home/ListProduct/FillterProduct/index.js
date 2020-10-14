import React, { useState } from 'react'
import ButtonSubmitFillter from './ButtonSubmitFillter';
import InputFillterName from './InputNameProduct';
import SelectFillterProduct from './SlectFillterProduct';

const FillterProduct = (props) => {
    const [valueFillter, setValueFillter] = useState({category:'',nameProduct:''})
    const [isActiveButton, setIsActiveButton] = useState(false)

    const handleChangeFillter = (e) => {
        setIsActiveButton(true)
        const { name, value } = e.target;
        setValueFillter({...valueFillter, [name]: value})
    }

    const handleSubmit = (valueFillter) => {
        props.fillterProduct(valueFillter)
    }

    return (
        <div className="filter__Product">
            <div className="row justify-content-end">
                <InputFillterName PropOnchange={handleChangeFillter} />
                <SelectFillterProduct PropOnchange={handleChangeFillter} active={isActiveButton}/>
                <ButtonSubmitFillter valueFillter={valueFillter} handleSubmit={handleSubmit} active={isActiveButton}/>
            </div>
        </div>
    )
}

export default FillterProduct
