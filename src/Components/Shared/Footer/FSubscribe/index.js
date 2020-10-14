import React from 'react'
import ContentTextSubcribe from './ContentSubscribe'
import FormSubscribe from './FormSubscribe'

const FSubscriber = () => {
    return (
        <div className="subscriber__form_main">
            <div className="form-row align-items-center box__subscriber_">
                <ContentTextSubcribe />
                <FormSubscribe />
            </div>
        </div>
    )
}

export default FSubscriber
