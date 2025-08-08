"use client"
import React, { useState } from 'react';
import Colorfillsvg from '../Colorfillsvg/Colorfillsvg';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(useGSAP, ScrollTrigger);
const OurServiceanimi = ({
    service_bg,
}) => {


    const [selectedService, setSelectedService] = useState(1);

    const handleClick = (index) => {
        setSelectedService(index);
    };

    useGSAP(() => {

        if (window.innerWidth >= 1024) {
            let ctx = gsap.context(() => {
                gsap.to('#OURSERVICE', {
                    scrollTrigger: {
                        trigger: '#OURSERVICE',
                        start: 'top top',
                        end: '+=1000%',
                        pin: true,
                        scrub: true,
                        markers: true,
                    }
                });
            });

            return () => {
                ctx.revert();
            };
        }
    }, []);
    return (
        <>
            <div id='OURSERVICE' className='OURSERVICE'>
                <div className={` pl-[60px] pr-[60px] pt-10`}>
                    <h2 className='font-30 opacity-80 font-normal'>Our Services</h2>
                </div>
                <div className='mt-24'></div>
                <div className={`${service_bg} pb-[200px]`}>
                    <div className='grid grid-cols-3 '>
                        <div className='flex mx-auto'>
                            <div className='w-[0.55rem] '>
                                <Colorfillsvg />
                                {/* <svg
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    viewBox="0 0 53.5 2407.2"
                                    height={430}
                                >
                                    <defs>
                                        <style>
                                            {`
          .cls-1 {
            fill: url(#linear-gradient);
          }

          .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6 {
            stroke-width: 0px;
          }

          .cls-7 {
            fill: #6e6e6e;
            stroke: #6e6e6e;
          }

          .cls-2 {
            fill: #232323;
          }

          .cls-3 {
            fill: url(#linear-gradient-4);
          }

          .cls-4 {
            fill: url(#linear-gradient-2);
          }

          .cls-5 {
            fill: url(#linear-gradient-3);
          }

          .cls-6 {
            fill: url(#linear-gradient-5);
          }
        `}
                                        </style>
                                        <linearGradient
                                            id="linear-gradient"
                                            x1="35.3"
                                            y1="2120.5"
                                            x2="35.3"
                                            y2="2629.5"
                                            gradientTransform="translate(-8.4 2632.8) scale(1 -1)"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0" stopColor="#f2361e" stopOpacity=".1" />
                                            <stop offset=".5" stopColor="#f54d28" />
                                            <stop offset="1" stopColor="#ffaf52" />
                                        </linearGradient>
                                        <linearGradient
                                            id="linear-gradient-2"
                                            y1="1652.5"
                                            y2="2161.5"
                                            xlinkHref="#linear-gradient"
                                        />
                                        <linearGradient
                                            id="linear-gradient-3"
                                            x1="35.3"
                                            y1="1184.4"
                                            x2="35.3"
                                            y2="1693.4"
                                            xlinkHref="#linear-gradient"
                                        />
                                        <linearGradient
                                            id="linear-gradient-4"
                                            y1="709.7"
                                            y2="1218.8"
                                            xlinkHref="#linear-gradient"
                                        />
                                        <linearGradient
                                            id="linear-gradient-5"
                                            y1="237.9"
                                            y2="747"
                                            xlinkHref="#linear-gradient"
                                        />
                                    </defs>
                                    <path
                                        className="cls-1"
                                        d="M48.2,494c0,10.2-9.5,18.4-21.3,18.4h0c-11.7,0-21.3-8.2-21.3-18.4V21.7c0-10.2,9.5-18.4,21.3-18.4h0c11.7,0,21.3,8.2,21.3,18.4v472.3Z"
                                    />
                                    <path
                                        className="cls-4"
                                        d="M48.2,962c0,10.2-9.5,18.4-21.3,18.4h0c-11.7,0-21.3-8.2-21.3-18.4v-472.3c0-10.2,9.5-18.4,21.3-18.4h0c11.7,0,21.3,8.2,21.3,18.4v472.3Z"
                                    />
                                    <path
                                        className="cls-5"
                                        d="M48.2,1430.1c0,10.2-9.5,18.4-21.3,18.4h0c-11.7,0-21.3-8.2-21.3-18.4v-472.3c0-10.2,9.5-18.4,21.3-18.4h0c11.7,0,21.3,8.2,21.3,18.4v472.3Z"
                                    />
                                    <path
                                        className="cls-3"
                                        d="M48.2,1904.7c0,10.2-9.5,18.4-21.3,18.4h0c-11.7,0-21.3-8.2-21.3-18.4v-472.3c0-10.2,9.5-18.4,21.3-18.4h0c11.7,0,21.3,8.2,21.3,18.4v472.3Z"
                                    />
                                    <path
                                        className="cls-6"
                                        d="M48.2,2376.5c0,10.2-9.5,18.4-21.3,18.4h0c-11.7,0-21.3-8.2-21.3-18.4v-472.3c0-10.2,9.5-18.4,21.3-18.4h0c11.7,0,21.3,8.2,21.3,18.4v472.3Z"
                                    />
                                    <path
                                        className="cls-2"
                                        d="M26.8,0C41.6,0,53.6,12,53.6,26.8v2353.6c0,14.8-12,26.8-26.8,26.8s-26.8-12-26.8-26.8V26.8C0,12,12,0,26.8,0ZM26.8,2400.5c11.1,0,20.1-9,20.1-20.1V26.8c0-11.1-9-20.1-20.1-20.1S6.7,15.7,6.7,26.8v2353.6c0,11.1,9,20.1,20.1,20.1h0Z"
                                    />
                                    <path
                                        className="cls-7 cursor-pointer "
                                        onClick={() => handleClick(1)}
                                        d="M26.8,2407.1h0c-12.9,0-23.4-10.5-23.4-23.4h0c0-12.9,10.5-23.4,23.4-23.4h0c12.9,0,23.4,10.5,23.4,23.4h0c0,12.9-10.5,23.4-23.4,23.4Z"
                                    />
                                    <path
                                        className="cls-7 cursor-pointer"
                                        onClick={() => handleClick(2)}
                                        d="M26.8,1932.7h0c-12.9,0-23.4-10.5-23.4-23.4h0c0-12.9,10.5-23.4,23.4-23.4h0c12.9,0,23.4,10.5,23.4,23.4h0c0,12.9-10.5,23.4-23.4,23.4Z"
                                    />
                                    <path
                                        className="cls-7 cursor-pointer"
                                        onClick={() => handleClick(3)}
                                        d="M26.8,1460.7h0c-12.9,0-23.4-10.5-23.4-23.4h0c0-12.9,10.5-23.4,23.4-23.4h0c12.9,0,23.4,10.5,23.4,23.4h0c0,12.9-10.5,23.4-23.4,23.4Z"
                                    />
                                    <path
                                        className="cls-7 cursor-pointer"
                                        onClick={() => handleClick(4)}
                                        d="M26.8,986.2h0c-12.9,0-23.4-10.5-23.4-23.4h0c0-12.9,10.5-23.4,23.4-23.4h0c12.9,0,23.4,10.5,23.4,23.4h0c0,12.9-10.5,23.4-23.4,23.4Z"
                                    />
                                    <path
                                        className="cls-7 cursor-pointer"
                                        onClick={() => handleClick(5)}
                                        d="M26.8,518.7h0c-12.9,0-23.4-10.5-23.4-23.4h0c0-12.9,10.5-23.4,23.4-23.4h0c12.9,0,23.4,10.5,23.4,23.4h0c0,12.9-10.5,23.4-23.4,23.4Z"
                                    />
                                    <path
                                        className="cls-7 cursor-pointer"
                                        onClick={() => handleClick(6)}
                                        d="M26.8,50.2h0c-12.9,0-23.4-10.5-23.4-23.4h0C3.3,13.8,13.8,3.3,26.8,3.3h0c12.9,0,23.4,10.5,23.4,23.4h0c0,12.9-10.5,23.4-23.4,23.4h0Z"
                                    />
                                </svg> */}
                            </div>
                            <div className='flex flex-col pl-6 text-[16px] text-[#949494]'>
                                <p className='cursor-pointer text-gray-500 hover:text-white transition-colors duration-200 ease-out' onClick={() => handleClick(1)}>Document Translation</p>
                                <div className='mt-14'></div>
                                <p className='cursor-pointer text-gray-500 hover:text-white transition-colors duration-200 ease-out' onClick={() => handleClick(2)}>Onboarding Services</p>
                                <div className='mt-[4rem]'></div>
                                <p className='cursor-pointer text-gray-500 hover:text-white transition-colors duration-200 ease-out' onClick={() => handleClick(3)}>Cloud Edw Management</p>
                                <div className='mt-[4rem]'></div>
                                <p className='cursor-pointer text-gray-500 hover:text-white transition-colors duration-200 ease-out' onClick={() => handleClick(4)}>Cloud Data Analytics</p>
                                <div className='mt-[4rem]'></div>
                                <p className='cursor-pointer text-gray-500 hover:text-white transition-colors duration-200 ease-out' onClick={() => handleClick(5)}>Applied Intelligence</p>
                                <div className='mt-[4.5rem]'></div>
                                <p className='cursor-pointer text-gray-500 hover:text-white transition-colors duration-200 ease-out' onClick={() => handleClick(6)}>Cybersecurity</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mx-auto'>
                            {selectedService === 1 && (
                                <div className='flex gap-6'>
                                    <div>
                                        <h2 className='text-[40px]'>Document Translation</h2>
                                        <div className='pt-3'>
                                            <p className='text-[#949494] text-[17px] leading-7'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={'/'}>
                                            <Image
                                                src={'/OurService/linksvg.svg'}
                                                alt='link'
                                                width={200}
                                                height={200}
                                                className='w-28'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {selectedService === 2 && (
                                <div className='flex gap-6'>
                                    <div>
                                        <h2 className='text-[40px]'>Onboarding Services</h2>
                                        <div className='pt-3'>
                                            <p className='text-[#949494] text-[17px] leading-7'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={'/'}>
                                            <Image
                                                src={'/OurService/linksvg.svg'}
                                                alt='link'
                                                width={200}
                                                height={200}
                                                className='w-28'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {selectedService === 3 && (
                                <div className='flex gap-6'>
                                    <div>
                                        <h2 className='text-[40px]'>Cloud Edw Management</h2>
                                        <div className='pt-3'>
                                            <p className='text-[#949494] text-[17px] leading-7'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={'/'}>
                                            <Image
                                                src={'/OurService/linksvg.svg'}
                                                alt='link'
                                                width={200}
                                                height={200}
                                                className='w-28'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {selectedService === 4 && (
                                <div className='flex gap-6'>
                                    <div>
                                        <h2 className='text-[40px]'>Cloud Data Analytics</h2>
                                        <div className='pt-3'>
                                            <p className='text-[#949494] text-[17px] leading-7'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={'/'}>
                                            <Image
                                                src={'/OurService/linksvg.svg'}
                                                alt='link'
                                                width={200}
                                                height={200}
                                                className='w-28'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {selectedService === 5 && (
                                <div className='flex gap-6'>
                                    <div>
                                        <h2 className='text-[40px]'>Applied Intelligence</h2>
                                        <div className='pt-3'>
                                            <p className='text-[#949494] text-[17px] leading-7'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={'/'}>
                                            <Image
                                                src={'/OurService/linksvg.svg'}
                                                alt='link'
                                                width={200}
                                                height={200}
                                                className='w-28'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {selectedService === 6 && (
                                <div className='flex gap-6'>
                                    <div>
                                        <h2 className='text-[40px]'>Cybersecurity</h2>
                                        <div className='pt-3'>
                                            <p className='text-[#949494] text-[17px] leading-7'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={'/'}>
                                            <Image
                                                src={'/OurService/linksvg.svg'}
                                                alt='link'
                                                width={200}
                                                height={200}
                                                className='w-28'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className={`flex justify-center items-center mx-auto `}>
                            {selectedService === 1 && (
                                <div className='services rounded-[27px]'>
                                    <div className='p-2'>
                                        <Image
                                            src={'/OurService/seviceslftimg.png'}
                                            alt='service'
                                            width={500}
                                            height={500}
                                            className='w-[19rem] h-auto rounded-[20px]'
                                        />
                                    </div>
                                </div>
                            )}
                            {selectedService === 2 && (
                                <div className='services rounded-[27px]'>
                                    <div className='p-2'>
                                        <Image
                                            src={'/OurService/seviceslftimg.png'}
                                            alt='service'
                                            width={500}
                                            height={500}
                                            className='w-[19rem] h-auto rounded-[20px]'
                                        />
                                    </div>
                                </div>
                            )}
                            {selectedService === 3 && (
                                <div className='services rounded-[27px]'>
                                    <div className='p-2'>
                                        <Image
                                            src={'/OurService/seviceslftimg.png'}
                                            alt='service'
                                            width={500}
                                            height={500}
                                            className='w-[19rem] h-auto rounded-[20px]'
                                        />
                                    </div>
                                </div>
                            )}
                            {selectedService === 4 && (
                                <div className='services rounded-[27px]'>
                                    <div className='p-2'>
                                        <Image
                                            src={'/OurService/seviceslftimg.png'}
                                            alt='service'
                                            width={500}
                                            height={500}
                                            className='w-[19rem] h-auto rounded-[20px]'
                                        />
                                    </div>
                                </div>
                            )}
                            {selectedService === 5 && (
                                <div className='services rounded-[27px]'>
                                    <div className='p-2'>
                                        <Image
                                            src={'/OurService/seviceslftimg.png'}
                                            alt='service'
                                            width={500}
                                            height={500}
                                            className='w-[19rem] h-auto rounded-[20px]'
                                        />
                                    </div>
                                </div>
                            )}
                            {selectedService === 6 && (
                                <div className='services rounded-[27px]'>
                                    <div className='p-2'>
                                        <Image
                                            src={'/OurService/seviceslftimg.png'}
                                            alt='service'
                                            width={500}
                                            height={500}
                                            className='w-[19rem] h-auto rounded-[20px]'
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurServiceanimi;
