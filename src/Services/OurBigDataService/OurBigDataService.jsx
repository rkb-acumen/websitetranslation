"use client"
import HeadingAnimation from '@/components/Homecomponents/HeadingAnimation/HeadingAnimation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import "./BigData.css"
import VideoSection from './VideoSection/VideoSection';

const OurBigDataService = (
    {
        services_section_3_title,
        services_section_3_sub_title,
        banner_data_counter_3_contents,
        services_section_3_image,
        video,
    }
) => {
    HeadingAnimation("text-dataservice");
    const [data] = useState(banner_data_counter_3_contents);

    return (
        <>
            {data.length > 0 ? (
                <>
                    <div className='md:relative '>
                        <div className='md:px-[60px] md:py-[90px] pt-[110px] pb-[90px] px-[15px]'>
                            {/*<h2 className='font-30-bold  opacity-80 font-normal text-dataservice'>
                                {services_section_3_title}
                            </h2>*/}
                            <h2 className='font-30-bold  opacity-80 font-normal'>
                                {services_section_3_title}
                            </h2>
                            <div className='max-w-[1800px] mx-auto'>
                                <div className='md:pt-[60px] pt-[40px] md:flex justify-evenly '>
                                    <div className='md:block '>
                                        <VideoSection 
                                        url={services_section_3_image?.url}
                                        video={video}
                                        />
                                    </div>
                                    <div className='z-50 md:pr-5' >
                                        <div >
                                            <div>
                                                <div>
                                                    <div className='  md:px-12'>
                                                        <p>
                                                            <h2 className='font-30-bold max-w-[650px]'>
                                                                {services_section_3_sub_title}
                                                            </h2>
                                                        </p>
                                                        <div className='max-w-[700px] pt-5 leading-6 md:leading-7 font-[300] text-justify'>
                                                            {data.length > 0 ? (
                                                                data.map((val, index) => (
                                                                    <div key={index} className="border border-x-0 py-3">
                                                                        <div>
                                                                            <p className="font-medium py-2">{val?.services_section_3_sub_contents_title}</p>
                                                                        </div>
                                                                        <div>
                                                                            <div dangerouslySetInnerHTML={{ __html: val?.services_section_3_sub_contents_para }}></div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <> </>
                                                            )}

                                                            {/* {

                                                        data?.map((val) => {
                                                            return (
                                                                <>
                                                                    <div className='border border-x-0 py-3'>
                                                                        <div>
                                                                            <p className="font-medium py-2">{val?.services_section_3_sub_contents_title}</p>
                                                                        </div>
                                                                        <div>
                                                                            <div dangerouslySetInnerHTML={{ __html: val?.services_section_3_sub_contents_para }}></div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                    } */}
                                                        </div>
                                                        <div className='text-center md:text-left pt-7 md:pt-0'>
                                                            <Link href={"/contact"}>
                                                                <button className='data-service   text-white '>
                                                                    <span className='bg-black px-6 py-3'>
                                                                        Let's Talk!
                                                                    </span>
                                                                </button>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div className='absolute right-0 bottom-0'>
                    <Image
                        src={'/services/bigdata.png'}
                        alt='service'
                        width={500}
                        height={500}
                        className='w-[400px] h-full object-cover rotate-180 -z-50'
                    />
                </div> */}
                    </div>
                </>
            )
                :
                (
                    <>

                    </>
                )}

        </>
    );
}

export default OurBigDataService;
