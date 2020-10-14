import React from 'react'

const ButtonNext = (props) => {
    return (
        <li className="page-item" onClick={()=>props.setNumberActive(props.numberActive+1)}>
            <a className="page-link" href="#">Next</a>
        </li>
    )
}

export default ButtonNext
