"use client"
import React, { useEffect, useState } from 'react'
import OurServices from '../OurServices/OurServices';
import Success from '../Success/Success';
import OurProcess from '../OurProcess/OurProcess';
import KeyFeatures from '../KeyFeatures/KeyFeatures';
import Clients from '../Clients/Clients';
import Insights from '../Insights/Insights'; 
import NewSolution from '../NewSolution/NewSolution';

const Homescroll = ({ val }) => {
    // const [isScrolled, setIsScrolled] = useState(false);

    // const handleScroll = () => {

    //     if (window.scrollY > 0) {
    //         setIsScrolled(true);
    //     } else {
    //         setIsScrolled(false);
    //     }
    // };

    // useEffect(() => {

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
        <>
            {/* {
                isScrolled */}
                    {/* ? */}
                    <>
                     {/* {
                            (val?.acf?.solution_two_title || val?.acf?.solution_two_content) && (
                                <NewSolution
                                    section_two_title={val?.acf?.solution_two_title}
                                    section_two_content={val?.acf?.solution_two_content}
                                />
                            )
                        }
                        {
                            (val?.acf?.section_two_title || val?.acf?.section_two_content) && (
                                <OurServices
                                    section_two_title={val?.acf?.section_two_title}
                                    section_two_content={val?.acf?.section_two_content}
                                />
                            )
                        } */}
                        {
                            (val?.acf?.section_three_title || val?.acf?.our_sucess_story_slider) && (
                                <Success
                                    section_three_title={val?.acf?.section_three_title}
                                    our_sucess_story_slider={val?.acf?.our_sucess_story_slider}
                                />
                            )
                        }

                        {/* <div className='bg-change'> */}
                            {
                                (val?.acf?.our_process_title || val?.acf?.our_process_content) && (
                                    <OurProcess
                                        our_process_title={val?.acf?.our_process_title}
                                        our_process_content={val?.acf?.our_process_content}
                                    />
                                )
                            }
                       

                        {
                            (val?.acf?.engagement_models_title ||
                                val?.acf?.engagement_models_content ||
                                val?.acf?.engagement_models_time_management_content) && (
                                <KeyFeatures
                                    engagement_models_title={val?.acf?.engagement_models_title}
                                    engagement_models_content={val?.acf?.engagement_models_content}
                                    engagement_models_time_management_content={val?.acf?.engagement_models_time_management_content}
                                />
                            )
                        }
                         {/* </div>  */}
                        {
                            (val?.acf?.our_partners_title || val?.acf?.our_parners_logos?.length) && (
                                <Clients
                                    our_partners_title={val?.acf?.our_partners_title}
                                    our_parners_logos={val?.acf?.our_parners_logos}
                                />
                            )
                        }

                       
                    </>
                    {/* :
                    <div className="h-[450vh]"></div>
            } */}
        </>
    )
}

export default Homescroll;