"use client"
import React from 'react';
import InsightsSlider from './InsightsSlider/InsightsSlider';
import "./Insights.css";
import HeadingAnimation from '../HeadingAnimation/HeadingAnimation';

const Insights = ({api}) => {
    HeadingAnimation("text-animation")
    return (
        <>
            <div className='home_insights'>
                <div className=''>
                    {/*<h2 className='font-40 text-[#000000] opacity-80 text-animation'>Insights</h2>*/}
                    <h2 className='font-40 text-[#000000] opacity-80'>INSIGHTS</h2>
                </div>
                <div className='home_insights_inner_div'>
                    <div className='flex justify-between'>
                    </div>

                </div>
                <>
                    <div className='insight-slider-div'> 
                        <InsightsSlider api={api} /> 
                    </div>
                </>

            </div>
        </>
    );
}

export default Insights;
