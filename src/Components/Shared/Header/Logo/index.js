import React from 'react'
import { Link } from 'react-router-dom'
import imageLogo from '../../../../assets/logo/logo-shopee-la-gi.png'
const LogoWeb = () => {
    return (
        <>
        <Link to="/">
            <img className="logo" src={imageLogo} alt="slide" style={{width:"100px",margin:"20px"}}/>
        </Link>
        </>
    )
}

export default LogoWeb
