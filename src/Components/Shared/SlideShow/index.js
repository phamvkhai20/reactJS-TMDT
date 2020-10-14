import React, { useState } from 'react'
import ButtonNext from './Button/ButtonNext'
import ButtonPrev from './Button/ButtonPrev'
import RenderBanner from './RenderBanner'
import {imagesSlideShow} from '../../../dataFake/imagesSlideShow'

const SlideShow = () => {

    const imgLenth = imagesSlideShow.length
    const [numbers, setNumber] = useState(0)
    const OnChange = (p) => {
        if (numbers === 0 && p < 0) {
            changeSlide(imgLenth, p)
        } else if (Number(numbers) === imgLenth - 1 && p > 0) {
            changeSlide(0, 0)
        }
        else {
            changeSlide(numbers, p)
        }
    }
    const changeSlide = (int, p) => {
        setNumber(int + p)
    }

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
            <div className="carousel-inner">
                <RenderBanner images={imagesSlideShow} numbers={numbers} />
            </div>
            
            <ButtonPrev onchange={OnChange} />
            <ButtonNext onchange={OnChange} />
        </div>
    )
}

export default SlideShow
