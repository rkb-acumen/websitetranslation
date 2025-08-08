"use client"
import styles from './OurService.module.css'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Ourservices.css"
import HeadingAnimation from '../HeadingAnimation/HeadingAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import Link from 'next/link';




const OurServices = ({
    section_two_title,
    section_two_content,
    hrefData
}) => {
    HeadingAnimation("text-animation");


    // const [selectedService, setSelectedService] = useState(1); 
    // useGSAP(() => {
    //     if (isDesktop) {
    //         const ctx = gsap.context(() => {
    //             const heights = {
    //                 1: 0,
    //                 2: 251.3,
    //                 3: 458.3,
    //                 4: 700.3,
    //                 5: 930.3,
    //                 6: 1160.3,
    //                 7: 1400.3,
    //                 8: 1652.3
    //             };

    //             const updateAnimation = (selectedService) => {
    //                 const height = heights[selectedService] || 0;

    //                 gsap.to('#path', {
    //                     duration: 0.5, 
    //                     height: height,
    //                     ease: 'power2.out'
    //                 });
    //             };

    //             updateAnimation(selectedService);
    //         });

    //         return () => {
    //             ctx.revert();
    //         };
    //     }
    // }, [isDesktop, setSelectedService]);
    // useGSAP(() => {
    //     const ctx = gsap.context(() => {
    //         const heights = {
    //             1: 0,
    //             2: 251.3,
    //             3: 458.3,
    //             4: 700.3,
    //             5: 930.3,
    //             6: 1160.3,
    //             7: 1400.3,
    //             8: 1652.3
    //         };

    //         const updateAnimation = (selectedService) => {
    //             const height = heights[selectedService] || 0;

    //             gsap.to('#path', {
    //                 duration: 0.5,
    //                 height: height,
    //                 ease: 'power2.out'
    //             });
    //         };

    //         updateAnimation(selectedService);
    //     });

    //     return () => {
    //         ctx.revert();
    //     };

    // }, [selectedService]);

    // useGSAP(() => {

    //     gsap.fromTo('.service-content',
    //         {
    //             opacity: 0,
    //             y: 50   
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,   
    //             duration: 0.5,
    //             stagger: 0.2
    //         }
    //     );
    // }, [selectedService]);


    // useGSAP(() => {
    //     gsap.fromTo(
    //         '#mask-rect',
    //         { y: '-100%' },  
    //         {
    //             y: '100%',  
    //             ease: 'none',
    //             scrollTrigger: {
    //                 trigger: '#Layer_1',
    //                 start: 'top top',
    //                 end: 'bottom bottom',
    //                 scrub: true,
    //             }
    //         }
    //     );
    // }, []);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".clrchangetwo",
                start: "top 10%",
                end: "bottom 0%",
                // markers: true, // Keep for debugging
                onEnter: () => gsap.to("body", { duration: 1.0, backgroundColor: "#dbd3ee" }),
                onEnterBack: () => gsap.to("body", { duration: 1.0, backgroundColor: "#dbd3ee" }),
                onLeave: () => gsap.to("body", { duration: 1.0, backgroundColor: "#fff" }),
                onLeaveBack: () => gsap.to("body", { duration: 1.0, backgroundColor: "#dcdcdc" }),
            });

            ScrollTrigger.refresh(); // Ensure ScrollTrigger updates properly
        });

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <>
        <div className='clrchangetwo'>
            <div id='OURSERVICE' className={`OURSERVICE relative pt-[60px] sm:pt-[100px] ${styles.dot_service_parttern}`}>


                <div className=''>
                    <div className={`pl-[15px] pr-[15px] sm:pl-[60px] sm:pr-[60px] mb-[30px] sm:mb-[30px]`}>
                        {/* <h2 className='font-40 opacity-80 font-normal text-animation text_left'>{section_two_title} </h2> */}
                        <h2 className='font-40 opacity-80 font-normal text_left'>{section_two_title} </h2>
                    </div>

                    <div className={`${styles.service_bg} pb-[100px]  `}>

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
                            className=" Service service_slider_container"
                        >
                            {
                                section_two_content?.map((val,i) => {                                    
                                    const content = val?.section_two_tabs_content || '';

                                    // Find the index of the first space after 100 characters
                                    const cutoffIndex = content.indexOf(' ', 100);

                                    // Truncate the content at that position and add an ellipsis if necessary
                                    const truncatedContent = cutoffIndex !== -1 ? content.substring(0, cutoffIndex) + '...' : content;
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <Link href={hrefData[i]?.service_link}>
                                                    <div className='brd-insid'>
                                                        <div id='hover-div' className='brd1 rounded-[25px]   grid grid-rows-2  '>
                                                            <div className=' ' >
                                                                <div className=' p-2 rounded-2xl relative  '>
                                                                    <Image src={val?.section_two_tab_image?.url} alt={val?.section_two_tab_image?.alt} height={800} width={800} className='rounded-[20px] max-w-[380px] ourservice-img   w-full mx-auto   object-cover' />
                                                                </div>
                                                                <div id='hover-show' className='relative  '>
                                                                    <div className='absolute -top-11 left-[42%]'>
                                                                        <svg width="51" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <circle cx="30.5" cy="30.5" r="29.5" fill="white" stroke="black" stroke-width="2" />
                                                                            <path d="M38.7669 39.3099C38.7677 39.3099 38.7686 39.3099 38.7695 39.3099L40.3757 39.3239L40.4251 39.3243L40.471 39.3059L40.3779 39.0739C40.471 39.3059 40.4711 39.3059 40.4711 39.3059L40.4712 39.3058L40.4715 39.3058L40.4719 39.3056L40.4729 39.3052L40.4751 39.3043L40.4804 39.302C40.4819 39.3013 40.4835 39.3006 40.4852 39.2998C40.4881 39.2985 40.4913 39.297 40.4949 39.2952C40.5053 39.2901 40.5216 39.2815 40.5395 39.2692C40.5552 39.2584 40.5855 39.236 40.6123 39.1997C40.6363 39.1673 40.6696 39.1062 40.6655 39.0266L40.7892 19.8481L40.7896 19.7826L40.7578 19.7253L40.5392 19.8465L40.7578 19.7252L40.7577 19.7252L40.7577 19.725L40.7575 19.7247L40.7571 19.724L40.7562 19.7224L40.7539 19.7185L40.7473 19.7076C40.7423 19.6996 40.7344 19.6876 40.7241 19.6744C40.715 19.6626 40.6977 19.6417 40.6729 19.6214C40.6548 19.6066 40.5936 19.5589 40.5013 19.5591L40.5006 19.5591L21.3108 19.6495L21.2631 19.6497L21.2188 19.6674L21.312 19.8995C21.2188 19.6674 21.2188 19.6675 21.2187 19.6675L21.2186 19.6675L21.2184 19.6676L21.2179 19.6678L21.217 19.6682L21.2148 19.6691L21.2095 19.6714C21.2055 19.6731 21.2006 19.6754 21.195 19.6781C21.1846 19.6833 21.1683 19.6919 21.1503 19.7042C21.1346 19.7149 21.1044 19.7374 21.0775 19.7737C21.0533 19.8065 21.0195 19.8687 21.0245 19.9498L21.0384 21.548L21.0389 21.6115L21.0697 21.6671L21.2884 21.5459L21.0698 21.6671L21.0698 21.6672L21.0699 21.6674L21.0701 21.6677L21.0705 21.6684L21.0713 21.67L21.0736 21.6739L21.0802 21.6848C21.0853 21.6928 21.0932 21.7048 21.1034 21.718C21.1126 21.7297 21.1299 21.7507 21.1547 21.771C21.1727 21.7857 21.2334 21.833 21.3248 21.8333C21.3253 21.8333 21.3258 21.8333 21.3263 21.8333L28.7269 21.871L28.7269 21.8711L28.7331 21.8709C30.8309 21.8293 32.1685 21.4605 33.5358 20.6352C34.1584 20.2612 34.9842 20.3064 35.5261 20.8483C36.1653 21.4875 36.23 22.4956 35.58 23.1455C35.2 23.5255 30.8182 27.9136 26.5316 32.2064L20.6849 38.0617L18.7752 39.9743L18.2417 40.5085L18.1013 40.6491L18.0654 40.6851L18.0563 40.6943L18.054 40.6965L18.0534 40.6971C18.0534 40.6971 18.0534 40.6972 18.0543 40.6981L18.0534 40.6972C17.9396 40.811 17.9384 40.9943 18.0533 41.1091L19.2433 42.2992L19.2797 42.3356L19.3275 42.3546L19.4201 42.1224L19.3276 42.3546L19.3277 42.3547L19.3279 42.3547L19.3282 42.3549L19.329 42.3552L19.3308 42.3559L19.3353 42.3576L19.3481 42.3621C19.3576 42.3652 19.3722 42.3697 19.3898 42.3735C19.4052 42.3768 19.4344 42.3822 19.4696 42.3809C19.497 42.3799 19.5808 42.3735 19.6511 42.3032L19.6512 42.3031L37.1777 24.7516C37.1778 24.7515 37.1778 24.7515 37.1779 24.7515C37.8397 24.0898 38.6894 24.1957 39.2793 24.6877C39.8728 25.1828 40.1495 26.0255 39.6724 26.8025L39.6724 26.8026C38.8122 28.205 38.4225 29.5905 38.4102 31.8606L38.4102 31.8644L38.4816 39.025L38.4822 39.0883L38.513 39.1437L38.7316 39.0225M38.7669 39.3099L38.7691 39.0599C38.7524 39.06 38.7316 39.0225 38.7316 39.0225M38.7669 39.3099C38.6761 39.3092 38.6158 39.2623 38.5979 39.2476C38.5731 39.2273 38.5558 39.2064 38.5467 39.1946C38.5364 39.1814 38.5285 39.1694 38.5235 39.1614L38.5169 39.1505L38.5146 39.1466L38.5137 39.145L38.5133 39.1443L38.5131 39.144L38.513 39.1438L38.513 39.1438L38.7316 39.0225M38.7669 39.3099L38.7316 39.0225" fill="black" stroke="black" stroke-width="0.5" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='text-black px-5  pt-[10px] text-left'>
                                                                <div className='font-20-title pt-5' >
                                                                    <p>{val?.section_two_tab_title}</p>
                                                                </div>
                                                                <div className='font-14 pt-5'>
                                                                    <p>{truncatedContent}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
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
            </div>
        </>
    );
}

export default OurServices;
