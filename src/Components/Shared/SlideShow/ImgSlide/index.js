import React from 'react'

const ImgSlide = (props) => {
    return (
        <div className={`carousel-item ${props.active===props.id&&"active"}`}  >
            <img src={props.src} alt="slide" style={{width:"100%"}}/>
        </div>
    )
}

export default ImgSlide
