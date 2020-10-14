import React from 'react'
import ButtonCart from './Cart'
import FormSearch from './FormSearch'
import LogoWeb from './Logo'
import  '../../../assets/sass/header.scss'
import '../../../assets/css/style.css'
const Header = () => {
    return (
            <div className=" header" style={{height:"80px"}}>
                <div className="row">
                    <div className="col-3 order-first ">
                        <LogoWeb />
                    </div>
                    <div className="col-6">
                        <FormSearch />
                    </div>
                    <div className="col-3 order-last">
                        <ButtonCart />
                    </div>
                </div>
            </div>
    )
}

export default Header
