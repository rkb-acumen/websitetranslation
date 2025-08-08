import React from 'react'
import "@/app/cookie-policy/Cookie/Legal.css"

const Terms = ({val}) => {
    return (
        <div className='Privacy'>
            <div className='PrivacyInner'>
                <div className='Privacytitle'>
                    <p className='font-50' >{val?.title?.rendered}</p>
                </div>
                <div className='Privacy-div' dangerouslySetInnerHTML={{ __html: val?.content?.rendered }}></div>
            </div>
        </div>
    )
}

export default Terms