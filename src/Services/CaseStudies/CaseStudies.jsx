"use client"
import React from 'react'
import CaseStudiesSlider from './CaseStudiesSlider'
import "./CaseStudies.css"
import HeadingAnimation from '@/components/Homecomponents/HeadingAnimation/HeadingAnimation'


const CaseStudies = ({ api }) => {
  HeadingAnimation("text-case");
  return (
    <>
      <div className='mt-[100px]'></div>
      {(api?.title?.rendered || api?.title?.rendered?.length) && (

        <div className='Casestudies-sec  Case-Study'>
          <div className='Casestudies-inner-title-div'>
            <h2 className='font-30 text-[#000000] opacity-80 text-case' > Case Studies</h2>
          </div>
          <div className='casestudies-slider-div'>
            <CaseStudiesSlider api={api} />
          </div>
        </div>

      )}

    </>
  )
}

export default CaseStudies