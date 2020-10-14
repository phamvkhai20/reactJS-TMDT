import React from 'react'

const ButtonPrev = (props) => {
    return (
        <p className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={()=>props.onchange(-1)}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
        </p>
    )
}

export default ButtonPrev
