"use client"
import React from 'react';
import about from '@/AboutUs/OurMission/assets/img1.svg'
import about1 from '@/AboutUs/OurMission/assets/img2.svg'
import about2 from '@/AboutUs/OurMission/assets/img3.svg'
import Image from 'next/image';
import './ourmission.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
+
    gsap.registerPlugin(ScrollTrigger);
const OurMission = ({
    mission_vision_content
}) => {
    useGSAP(() => {
        gsap.utils.toArray('.fade-in-down').forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: -200,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    end: 'top 60%',
                    toggleActions: 'play none none none',
                },
            });
        });
    }, []);
    return (
        <>
            <div className='bg-[#131313] text-white OurMissition  '>
                <div className='pb-20'>
                    {/* <div className='flex lg:justify-evenly px-3 md:px-10 lg:px-24 md:pt-28 pt-20 vertical-warapper'>
                        <div className='hidden lg:w-[30%] lg:flex items-center place-content-center'>
                            <h2 className='text-[30px] font-[600] fade-in-down'>Our Mission</h2>
                        </div>
                        <div className='lg:w-[30%] w-[20%] lg:flex lg:items-center lg:place-content-center vertical-border'>

                            <Image
                                src={about}
                                alt='about'
                                width={200}
                                height={200}
                                className='lg:w-[60px] lg:h-[60px] w-[45px] h-[45px] object-cover  fade-in-down'
                            />
                        </div>
                        <div className='lg:w-[40%] w-[80%] lg:flex lg:items-center lg:place-content-center'>
                            <h2 className='text-[20px] pb-3 font-[600] lg:hidden fade-in-down'>Our Mission</h2>
                            <p className='text-[14px] lg:text-[17px] lg:leading-7 leading-5 font-light fade-in-down '>To revolutionize legacy data utilization (providing gold standard solutions- on-premises, public, and private environments), by transforming and leveraging best in class AI methodologies/ products to enhance data utilization, data quality and unlock effective decision-making for our customers.</p>
                        </div>

                    </div>
                    <div className='flex lg:justify-evenly px-3 md:px-10 lg:px-24 lg:pt-28 pt-20 vertical-warapper'>
                        <div className='hidden lg:w-[30%] lg:flex items-center place-content-center'>
                            <h2 className='text-[30px] font-[600] fade-in-down'>Differentiation</h2>
                        </div>
                        <div className='lg:w-[30%] w-[20%] lg:flex lg:items-center lg:place-content-center vertical-border'>

                            <Image
                                src={about1}
                                alt='about'
                                width={200}
                                height={200}
                                className='lg:w-[60px] lg:h-[60px] w-[45px] h-[45px] object-cover fade-in-down '
                            />
                        </div>
                        <div className='lg:w-[40%] w-[80%] lg:flex lg:items-center lg:place-content-center'>
                            <h2 className='text-[20px] pb-3 font-[600] lg:hidden fade-in-down'>Differentiation</h2>
                            <p className='text-[14px] lg:text-[17px] lg:leading-7 leading-5 font-light  fade-in-down'>
                                Grounded in data and engineering. Focussed on building high-performing data systems. Our commitment to excellence in everything we do following the principles of truth, honesty and integrity is a source of strength and our guiding light. We prioritize people, process, and performance, ensuring customer delight in every endeavor.
                            </p>
                        </div>

                    </div>
                    <div className='flex lg:justify-evenly px-3 md:px-10 lg:px-24 lg:pt-28 pt-20 pb-20 vertical-warapper'>
                        <div className='hidden lg:w-[30%] lg:flex items-center place-content-center'>
                            <h2 className='text-[30px] font-[600] fade-in-down'>Our Vision</h2>
                        </div>
                        <div className='lg:w-[30%] w-[20%] lg:flex lg:items-center lg:place-content-center vertical-border'>

                            <Image
                                src={about2}
                                alt='about'
                                width={200}
                                height={200}
                                className='lg:w-[60px] lg:h-[60px] w-[45px] h-[45px] object-cover fade-in-down '
                            />
                        </div>
                        <div className='lg:w-[40%] w-[80%] lg:flex lg:items-center lg:place-content-center'>
                            <h2 className='text-[20px] pb-3 font-[600] lg:hidden'>Our Vision</h2>
                            <p className='text-[14px] lg:text-[17px] lg:leading-7 leading-5 font-light fade-in-down '>
                                Our vision is to create significant value by growing our people, delivering exceptional results for our customers, and fostering fulfillment beyond material wealth. We aim to be competitive in our industry, constantly learning, and adapting to anticipate and meet customer needs proactively.</p>
                        </div>

                    </div> */}
                    {mission_vision_content.map((section, index) => (
                        <div key={index} className='flex lg:justify-evenly px-3 md:px-10 lg:px-24 pt-20 vertical-warapper'>
                             
                            <div className='hidden lg:w-[30%] lg:flex items-center place-content-center'>
                                <h2 className='text-[30px] font-[600] fade-in-down'>{section.mission__vision_title}</h2>
                            </div>

                            
                            <div className='lg:w-[30%] w-[20%] lg:flex lg:items-center lg:place-content-center vertical-border'>
                                <Image
                                    src={section.mission_vision_icon?.url}
                                    alt={section.mission_vision_icon?.alt}
                                    width={200}
                                    height={200}
                                    className='lg:w-[60px] lg:h-[60px] w-[45px] h-[45px] object-cover fade-in-down'
                                />
                            </div>

                           
                            <div className='lg:w-[40%] w-[80%] lg:flex lg:items-center lg:place-content-center'>
                               
                                <h2 className='text-[20px] pb-3 font-[600] lg:hidden fade-in-down'>{section.mission__vision_title}</h2>
                                <div className='text-[14px] lg:text-[17px] lg:leading-7 leading-5 font-light fade-in-down' dangerouslySetInnerHTML={{ __html: section?.mission_vision_description	}}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default OurMission;
