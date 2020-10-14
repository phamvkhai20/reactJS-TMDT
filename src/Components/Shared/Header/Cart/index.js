import React from 'react'

const ButtonCart = () => {
    return (
        
            <div className="cart">
                <a href="http://localhost:3000/" className="nav-link">
                    <i className="fas fa-shopping-cart" aria-hidden="true" style={{fontSize:"20px"}}></i>
                    <span >Giỏ hàng</span>
                </a>
                <div className="dropdown-content " >
                <div className="arrow-up"></div>

                    <div className="product-cart">
                        <img src="https://bucket.nhanh.vn/store2/70513/ps/20200826/ASUS%20ROG%20Strix%20G%20G531GT_thumb.jpg" alt="asdas"/>
                        <p><span>Giày thể thao</span>x<span>3</span></p>
                    </div>
                    <div className="product-cart">
                        <img src="https://bucket.nhanh.vn/store2/70513/ps/20200826/ASUS%20ROG%20Strix%20G%20G531GT_thumb.jpg" alt="asdas"/>
                        <p><span>Giày thể thao</span> <br></br>
                        <span>3</span></p>
                    </div>
                    <div className="product-cart">
                        <img src="https://bucket.nhanh.vn/store2/70513/ps/20200826/ASUS%20ROG%20Strix%20G%20G531GT_thumb.jpg" alt="asdas"/>
                        <p><span>Giày thể thao</span>x<span>3</span></p>
                    </div>

                    <button   type="button" className="btn btn-warning button__order_cart">
                            Đặt Hàng
                    </button>
                </div>
            </div>

    )
}

export default ButtonCart
