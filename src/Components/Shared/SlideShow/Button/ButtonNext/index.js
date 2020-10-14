import React from 'react'

const ButtonNext = (props) => {
    return (
        <p className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={()=>props.onchange(1)}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </p>
    )
}

export default ButtonNext
