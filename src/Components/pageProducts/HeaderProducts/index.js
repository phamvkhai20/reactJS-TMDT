import React from 'react'
import { Link } from 'react-router-dom'

function HeaderProducts() {
    return (
        <div className="card text-center header__product">
            <div className="card-header" style={{ border: 0 }}>
                <ul className="nav nav-tabs card-header-tabs">
                    <p style={{paddingTop:"8px",paddingRight:"10px"}}>Ưu tiên xem :</p>
                    <li className="nav-item">
                        <Link to="" className="nav-link actives" >Hàng Mới</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link" >Bán chạy</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link" >Giảm giá</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderProducts
