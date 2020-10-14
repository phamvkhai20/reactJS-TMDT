import React from 'react'

const ButtonPrev = (props) => {
    return (
        props.disabled ?
        <li className="page-item disabled" >
            <a className="page-link" href="#"  aria-disabled="true" >Previous</a>
        </li>:
        <li className="page-item"
        onClick={()=>props.setNumberActive(props.numberActive-1)}>
        <a className="page-link" href="#"  aria-disabled="true" >Previous</a>
        </li>
    )
}

export default ButtonPrev
