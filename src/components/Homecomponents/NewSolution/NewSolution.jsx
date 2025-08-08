"use client"
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import "./NewSolution.css"
import HeadingAnimation from '../HeadingAnimation/HeadingAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const NewSolution = ({ section_two_title,
    section_two_content, hrefData}) => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleImageClick = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    HeadingAnimation("text-animation");
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".clrchange",
                start: "top 10%",
                end: "bottom 0%",
                // markers: true, // Keep for debugging
                onEnter: () => gsap.to("body", { duration: 1.0, backgroundColor: "#dcdcdc" }),
                onEnterBack: () => gsap.to("body", { duration: 1.0, backgroundColor: "#dcdcdc" }),
                onLeave: () => gsap.to("body", { duration: 1.0, backgroundColor: "#dbd3ee" }),
                onLeaveBack: () => gsap.to("body", { duration: 1.0, backgroundColor: "#fff" }),
            });

            ScrollTrigger.refresh(); // Ensure ScrollTrigger updates properly
        });

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <>
            <div className='clrchange'>
                <div id='OURSOLUTION' className={`OURSOLUTION relative  sm:pt-[100px]`}>


                    <div className=''>
                        <div className={`pl-[15px] pr-[15px] sm:pl-[60px] sm:pr-[60px] mb-[30px] sm:mb-[30px]`}>
                            {/* <h2 className='font-40 opacity-80 font-normal text-animation uppercase text_left '>{section_two_title}</h2> */}
                            <h2 className='font-40 opacity-80 font-normal uppercase text_left '>{section_two_title}</h2>
                            
                        </div>

                        <div className={` `}>

                            <Swiper
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.1,
                                        spaceBetween: 20,
                                        slidesOffsetBefore: 15,
                                        slidesOffsetAfter: 15,
                                    },
                                    450: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 25,
                                        slidesOffsetBefore: 15,
                                        slidesOffsetAfter: 15,
                                    },
                                    590: {
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
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                        slidesOffsetBefore: 60,
                                        slidesOffsetAfter: 60,
                                    },
                                    1200: {
                                        slidesPerView: 4.5,
                                        spaceBetween: 30,
                                        slidesOffsetBefore: 60,
                                        slidesOffsetAfter: 60,
                                    },
                                    1600: {
                                        slidesPerView: 4.2,
                                        spaceBetween: 30,
                                        slidesOffsetBefore: 60,
                                        slidesOffsetAfter: 60,
                                    },
                                    2000: {
                                        slidesPerView: 5.2,
                                        spaceBetween: 30,
                                        slidesOffsetBefore: 60,
                                        slidesOffsetAfter: 60,
                                    },
                                    2500: {
                                        slidesPerView: 8,
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
                                className="NewSolution newsolution_slider_container"
                            >
                                {
                                    section_two_content?.map((val,i) => {
                                        console.log(hrefData[i]?.solutions_link,'gfhftgh');
                                        
                                        // const content = val?.section_two_tabs_content || '';
                                        // const cutoffIndex = content.indexOf(' ', 100);
                                        // const truncatedContent = cutoffIndex !== -1 ? content.substring(0, cutoffIndex) + '...' : content;

                                        const content = val?.section_two_tabs_content || '';
                                        const cutoffIndex = content.indexOf(' ', 100);
                                        const truncatedContent = cutoffIndex !== -1
                                            ? content.substring(0, cutoffIndex) + ''
                                            : content;

                                        const handleImageClick = () => {
                                            if (val?.solutions_video_link) {
                                                setPopupOpen(val.solutions_video_link);
                                            }
                                        };

                                        const getYouTubeVideoId = (url) => {
                                            if (!url) return ""; // Handle empty URL case
                                            const match = url.match(
                                                /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
                                            );
                                            return match ? match[1] : "";
                                        };

                                        return (
                                            <>
                                                <SwiperSlide>
                                                    <div className='brd-insid'>
                                                        <div id='hover-div' className='brd1 rounded-[25px]   grid grid-rows-2  '>
                                                            <div className=''>
                                                                <div className='p-2 rounded-2xl relative'>

                                                                    <div className="relative cursor-pointer">
                                                                        <Image
                                                                            src={`https://img.youtube.com/vi/${getYouTubeVideoId(val?.solutions_video_link)}/maxresdefault.jpg`}
                                                                            alt={"youtupevideo"}
                                                                            height={800}
                                                                            width={800}
                                                                            className="rounded-[20px] max-w-[380px] ourservice-img w-full mx-auto object-cover cursor-pointer overlay_apply brightness-75"
                                                                            onClick={handleImageClick}
                                                                        />
                                                                        <div
                                                                            className="absolute inset-0 flex items-center justify-center"
                                                                            onClick={handleImageClick}
                                                                        >
                                                                            <Image
                                                                                src={'/Playicon/acumenvelocity_play_button_icon.svg'}
                                                                                alt="video"
                                                                                width={60}
                                                                                height={60}
                                                                                className="playicon-homepage-service w-[30px] h-[30px] cursor-pointer"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Link href={hrefData[i]?.solutions_link}>
                                                                <div className='text-black px-5  pt-[10px] text-left'>
                                                                    <div className='font-20-title pt-5' >
                                                                        <p className='underline_css'>{val?.section_two_tab_title}</p>
                                                                    </div>
                                                                    <div className='font-14 pt-5'>
                                                                        <p>{truncatedContent}</p>
                                                                    </div>
                                                                

                                                                <div><p className='font-14 pt-2'>More...</p></div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                }
                                <div className='service-custom-nav'>

                                    <div className="swiper-button-prev "></div>
                                    <div className="swiper-button-next"></div>
                                </div>
                            </Swiper>

                        </div>


                    </div>
                </div>

                {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 px-5 md:px-0">
                        <div className="relative bg-white rounded-lg  md:w-[600px] md:h-[400px] h-[300px]">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`${isPopupOpen}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <button
                                className="absolute -top-2 -right-2 bg-white rounded-full p-2"
                                onClick={() => setPopupOpen(null)}
                            >
                                <Image
                                    src={'/services/videoicon/close.svg'}
                                    alt="img-popup"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default NewSolution;
