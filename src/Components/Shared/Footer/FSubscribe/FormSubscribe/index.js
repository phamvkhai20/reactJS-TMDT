import React from 'react'

const FormSubscribe = () => {
    return (
        <div className="col-auto subscriber__form">
            <label className="sr-only">Email</label>
            <div className="input-group mb-2">
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Email" />
                <div className="input-group-prepend" style={{marginLeft:"-30px",zIndex:"1"}}>
                    <div className="input-group-text" style={{borderRadius:"20px"}}>Đăng ký</div>
                </div>
            </div>
        </div>
    )
}

export default FormSubscribe
