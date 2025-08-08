import React from 'react';
import "./Legal.css";

const Cookiepolicy = ({ val }) => {
    return (
        <>
            <div className='CookiePolicy'>
                <div className='CookieInner'> 
                    <div className='cookietitle'>
                        <p className='font-50' >{val?.title?.rendered}</p>
                    </div>
                    <div className='cookie-div' dangerouslySetInnerHTML={{ __html: val?.content?.rendered }}></div>
                </div>
            </div>
        </>
    )
}

export default Cookiepolicy;