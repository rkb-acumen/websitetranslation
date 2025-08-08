"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import Image from 'next/image';
import "./CommonBlog.css"
import Link from 'next/link';


const CommonBlog = ({slug , blogapi,rawBlogData}) => {

    // if (!slug || !blogapi || blogapi.map((val)=>{val?._embedded?.['wp:term']?.[1]?.map((elem) => elem.lenght == 0 )})) {
    //     return null;
    // }

        // Validate slug and blogapi
        if (!slug || !blogapi || blogapi.length === 0) {
            return null;
        }
    
        // Filter blog posts based on slug
        const filteredBlogs = blogapi.filter((val,i) =>
            rawBlogData[i]?._embedded?.['wp:term']?.[1]?.some((elem) => elem?.slug === slug)
        );
    
        // Return null if no matching blogs
        if (filteredBlogs.length === 0) {
            return null;
        }


    return (
        <>
            <div className="Insight pb-16 relative ">

                    <div className="flex justify-between">
                        <div className="lg:px-[60px] lg:py-[30px] md:p-[30px] p-[15px]">
                            <h2 className="font-30 text-[#000000] opacity-80 text-animation">Insights</h2>
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
                        className="commonblog_slider_container"
                    >
                       


                    
                        {
                            blogapi.map((val,i) => {   
                                if (rawBlogData[i]?._embedded?.['wp:term']?.[1]?.map((elem) => elem?.slug )?.includes(slug)) {
                                    return (<>
                                        <SwiperSlide>
                                            <div className='brd_section rounded-2xl p-3'>
                                                <Link href={`/blog/${rawBlogData[i].slug}`}>
                                                    <div >
                                                        <div className='inslghts-title-main'>
                                                            <div className='common-title-div common-title-div-bg1 bg-[#460073] p-5 rounded-2xl h-[35vh] relative flex flex-col justify-between'>
                                                                <div className='flex gap-2 '>
                                                                    <div>
                                                                        <Image
                                                                            src={val.acf.user_image.url}
                                                                            alt={val.acf.user_image.alt}
                                                                            width={300}
                                                                            height={300}
                                                                            className='common-client-img'
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

                    <div className="common-custom-nav-blog">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>

                    </Swiper>
                </div>
            </div >
        </>
    );
}

export default CommonBlog;
