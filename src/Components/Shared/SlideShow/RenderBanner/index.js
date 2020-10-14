import React from 'react'
import ImgSlide from '../ImgSlide'

const RenderBanner = (props) => {
    return (
            props.images.map((item, index) =>
            <ImgSlide src={item.img} id={index} key={index} active={props.numbers} /> )
    )
}

export default RenderBanner
