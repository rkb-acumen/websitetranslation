"use client"
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Success.css";
import { Pagination, EffectCoverflow, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import HeadingAnimation from '../HeadingAnimation/HeadingAnimation';

const Success = (
    {
        section_three_title,
        our_sucess_story_slider
    }
) => {
    HeadingAnimation("text-animation");
    const [dragSize, setDragSize] = useState(50);

    useEffect(() => {
        // Accessing the element and its data attribute without jQuery
        const element = document.querySelector('.swiper-scrollbar');
        if (element) {
            const dragSizeValue = element.getAttribute('data-drag-size');
            if (dragSizeValue) {
                setDragSize(parseInt(dragSizeValue, 10));
            }
        }
    }, []);
    return (
        <>
            <div id='SuccessID' className='Success   '>
                <div className='text-[#000] font-35 opacity-80 success-container    '>
                    {/* <h2 className='font-40 text-animation'>{section_three_title}</h2> */}
                    <h2 className='font-40'>{section_three_title}</h2>
                </div>

                <div className='success-story-slider  max-w-[1200px] w-full mx-auto'>
                    <Swiper
                        grabCursor={true}
                        effect="coverflow"
                        freeMode={true}
                        centeredSlides={true}
                        initialSlide={2}
                        direction='horizontal'
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 417,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 2999,
                            disableOnInteraction: false,
                        }}
                        scrollbar={{
                            draggable: true,
                            dragSize: 55,
                        }}

                        modules={[EffectCoverflow, Autoplay, Scrollbar]}
                        className="mySwiper success  "
                        breakpoints={{

                            0: {
                                slidesPerView: 1.1,
                                spaceBetween: 10,
                                coverflowEffect:{
                                    
                                    stretch: 100,
                                    
                                }
                            
                            },
                            500: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 1.8,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {our_sucess_story_slider.map((story, index) => (
                            <SwiperSlide key={index}>
                                <div className='brd2 sm:rounded-3xl p-3'>
                                    <div>
                                        <div className='rounded-[2rem] sm:h-[50vh] h-[30vh] relative'>
                                            <Image
                                                src={story?.our_sucess_stories_client_image?.url}
                                                alt='client image'
                                                width={500}
                                                height={500}
                                                className='w-full h-full sm:rounded-[1rem] rounded-[1rem] object-cover'
                                            />
                                        </div>
                                        <div className='text-[#454545] font-14 py-4 px-4 text-left card-btm'>
                                            <div className='py-2'>
                                                <Image
                                                    width={100}
                                                    height={100}
                                                    src={story?.our_sucess_stories_client_logo?.url}
                                                    alt='client logo'
                                                    className='success-client-logo'
                                                />
                                            </div>
                                            <p>{story?.our_sucess_stories_client_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Success;
