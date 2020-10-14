import React from 'react'

const FormSearch = () => {
    return (
        <div className="input-group md-form form-sm form-2 pl-0 formSearch">
            <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Tìm kiếm" aria-label="Search" />
            <div className="input-group-append" >
                <span className="input-group-text amber lighten-3" id="basic-text1">
                    <i className="fas fa-search text-grey" aria-hidden="true">
                    </i>
                </span>
            </div>
        </div>
    )
}

export default FormSearch
