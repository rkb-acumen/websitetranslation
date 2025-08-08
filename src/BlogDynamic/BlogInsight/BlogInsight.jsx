"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import Image from 'next/image';
import "./BlogInsight.css"
import Link from 'next/link';

const BlogInsight = ({ api, find, rawAllBlogs }) => {
    return (
        <>
            <div className="Insight pb-16 relative ">
                <div className='flex justify-between'>
                    <div className='lg:p-[60px] md:p-[30px] p-[15px]   '>
                        <h2 className='font-30 text-[#000000] opacity-80 text-animation '>More Insights</h2>
                    </div>
                </div>
                <div>
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
                                spaceBetween: 30,
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
                        className="insights_slider_container"
                    >
 
                         
 
                        {
                            api.map((val,i) => {   //.[1]?.name?.includes("Home") val?._embedded['wp:term']['0']?.[1]?.name
                                if (val?._embedded?.['wp:term']?.[0]?.map((elem) => elem?.name )?.includes(find?._embedded['wp:term']['0']?.[1]?.name)) {
                                    return (<>
                                        <SwiperSlide>
                                            <div className='brd rounded-2xl p-3'>
                                                <Link href={`/blog/${rawAllBlogs[i].slug}`}>
                                                    <div >
                                                        <div className='inslghts-title-main'>
                                                            <div className='insights-title-div insights-title-div-bg1 bg-[#460073] p-5 rounded-2xl h-[35vh] relative'>
                                                                <div className='flex gap-2 '>
                                                                    <div>
                                                                        <Image
                                                                            src={val.acf.user_image.url}
                                                                            alt={val.acf.user_image.alt}
                                                                            width={300}
                                                                            height={300}
                                                                            className='insights-client-img'
                                                                        />
                                                                    </div>
                                                                    <div className='flex justify-center items-center'>
                                                                        <div>
                                                                            <p className='text-[#FFF0F3] font-12'>{val?.acf?.user_name}</p>
                                                                            <p className='text-[#FFF0F3] font-12'>{val?.date.split('T')[0]}</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className='font-20 insight-title text-left text-white'>
                                                                    <p>{val?.title?.rendered}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='text-[#454545] font-14 py-7 px-4 md:text-left text-justify'>
                                                            <div dangerouslySetInnerHTML={{ __html: val?.excerpt?.rendered }}></div>
                                                        </div>
 
                                                    </div>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    </>)
                                }
                            })
                        }

                        {/* <SwiperSlide>
                            <div className='brd rounded-2xl p-3'>
                                <div >
                                    <div className='inslghts-title-main'>
                                        <div className='insights-title-div insights-title-div-bg1 bg-[#E2072E] p-5 rounded-2xl h-[35vh] relative'>
                                            <div className='flex gap-2 '>
                                                <div>
                                                    <Image
                                                        src={'/insights/logo.png'}
                                                        width={300}
                                                        height={300}
                                                        className='insights-client-img'
                                                    />
                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    <div>
                                                        <p className='text-[#FFF0F3] font-12'>Isabella Olivia</p>
                                                        <p className='text-[#FFF0F3] font-12'>May 23, 2024</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='font-20 insight-title text-left text-white'>
                                                <p>What is Cloud Migration? <br />Strategy, Process, and Tools</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-[#454545] font-14 py-7 px-4 md:text-left text-justify'>
                                        <p>Cloud migration is the process of moving a company's digital assets, services, databases, IT resources, and applications, either partially </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='brd rounded-2xl p-3'>
                                <div >
                                    <div className='inslghts-title-main'>
                                        <div className='insights-title-div insights-title-div-bg1 bg-[#0041F0] p-5 rounded-2xl h-[35vh] relative'>
                                            <div className='flex gap-2 '>
                                                <div>
                                                    <Image
                                                        src={'/insights/logo.png'}
                                                        width={300}
                                                        height={300}
                                                        className='insights-client-img'
                                                    />
                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    <div>
                                                        <p className='text-[#FFF0F3] font-12'>Isabella Olivia</p>
                                                        <p className='text-[#FFF0F3] font-12'>May 23, 2024</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='font-20 insight-title text-left text-white'>
                                                <p>What is Cloud Migration? <br />Strategy, Process, and Tools</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='text-[#454545] font-14 py-7 px-4 md:text-left text-justify'>
                                        <p>Cloud migration is the process of moving a company's digital assets, services, databases, IT resources, and applications, either partially </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='brd rounded-2xl p-3'>
                                <div>
                                    <div className='inslghts-title-main'>
                                        <div className='insights-title-div insights-title-div-bg1 bg-[#FFBA40] p-5 rounded-2xl h-[35vh] relative'>
                                            <div className='flex gap-2 '>
                                                <div>
                                                    <Image
                                                        src={'/insights/logo.png'}
                                                        width={300}
                                                        height={300}
                                                        className='insights-client-img'
                                                    />
                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    <div>
                                                        <p className='text-[#FFF0F3] font-12'>Isabella Olivia</p>
                                                        <p className='text-[#FFF0F3] font-12'>May 23, 2024</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='font-20 insight-title text-left text-white'>
                                                <p>What is Cloud Migration? <br />Strategy, Process, and Tools</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-[#454545] font-14 py-7 px-4 md:text-left text-justify'>
                                        <p>Cloud migration is the process of moving a company's digital assets, services, databases, IT resources, and applications, either partially </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> */}
                        <div className='insights-custom-nav-blog'>

                            <div className="swiper-button-prev "></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </Swiper>
                </div>
            </div >
        </>
    )
}

export default BlogInsight
