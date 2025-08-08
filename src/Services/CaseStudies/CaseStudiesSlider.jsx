"use client"

import "./CaseStudiesSlider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import Image from 'next/image';



import React from 'react'

const CaseStudiesSlider = ({ api }) => {
    return (
        <>

            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                        // loop: true,
                        autoHeight: true,
                        scrollbar: {
                            dragSize: 50,
                            spaceBetween: 20,
                            slidesOffsetBefore: 15,
                            slidesOffsetAfter: 15,
                        },
                    },
                    590: {
                        // loop: true,
                        slidesPerView: 1.8,
                        spaceBetween: 20,
                        slidesOffsetBefore: 15,
                        slidesOffsetAfter: 15,

                    },

                    750: {
                        slidesPerView: 2.4,
                        spaceBetween: 30,
                        slidesOffsetBefore: 60,
                        slidesOffsetAfter: 60,

                    },
                    1024: {
                        slidesPerView: 3.4,
                        spaceBetween: 30,
                        slidesOffsetBefore: 60,
                        slidesOffsetAfter: 60,

                    },
                }}

                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{

                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[FreeMode, Navigation]}
                className="casestudies_slider_container"
            >
                {
                    api.map((val) => {
                        if (val?._embedded['wp:term']['0']?.[0]?.name?.includes("Big Data Solutions Case")) {
                            return (<>

                                <SwiperSlide>

                                    <div className='casestudies-brd rounded-2xl p-3'>
                                        <div >

                                            <div className='casestudies-title-main'>
                                                <div className='casestudies-title-div casestudies-title-div-bg1   p-5 rounded-2xl h-[35vh] relative bigdatacolor'>

                                                    <div className='font-20 casestudies-title text-left text-white'>
                                                        <p>{val?.title?.rendered}</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </SwiperSlide>

                            </>)
                        }

                    })
                }

                {/* <SwiperSlide>
                    <div className='casestudies-brd rounded-2xl p-3'>
                        <div >
                           
                            <div className='casestudies-title-main'>
                        <div className='casestudies-title-div casestudies-title-div-bg1 bg-[#e2072e] p-5 rounded-2xl h-[35vh] relative'>
          
                            <div className='font-20 casestudies-title text-left text-white'>
                                <p>Enabling scientists to do real-time<br/> genomic data exploration</p>
                            </div>
                        </div>
                        </div>
                        
                        
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='casestudies-brd rounded-2xl p-3'>
                        <div >
                           
                            <div className='casestudies-title-main'>
                        <div className='casestudies-title-div casestudies-title-div-bg1 bg-[#0041f0] p-5 rounded-2xl h-[35vh] relative'>
          
                            <div className='font-20 casestudies-title text-left text-white'>
                                <p>Detecting Alzheimer’s disease<br/> earlier with big data</p>
                            </div>
                        </div>
                        </div>
                        
                        
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='casestudies-brd rounded-2xl p-3'>
                        <div >
                           
                            <div className='casestudies-title-main'>
                        <div className='casestudies-title-div casestudies-title-div-bg1 bg-[#ffba40] p-5 rounded-2xl h-[35vh] relative'>
          
                            <div className='font-20 casestudies-title text-left text-white'>
                                <p>scientists to do real-time<br/> genomic data exploration</p>
                            </div>
                        </div>
                        </div>
                        
                        
                        </div>

                    </div>
                </SwiperSlide> */}
                <div className='casestudies-custom-nav'>

                    <div className="swiper-button-prev "></div>
                    <div className="swiper-button-next"></div>
                </div>
            </Swiper>

        </>
    )
}
export default CaseStudiesSlider