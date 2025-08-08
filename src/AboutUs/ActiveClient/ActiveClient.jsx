"use client"

import MobileActiveClient from './MobileActiveClient'
import "./ActiveClient.css"
import CountUp from 'react-countup';
import React, { useMemo } from 'react';

function ActiveClient({
  counter_content,
  counter_number,
}) {
    const countUpComponent = useMemo(() => (
        <CountUp
          start={0}
          end={15}
          useEasing={true}
          enableScrollSpy
        />

        
      ), []);

      const countUpComponent1 = useMemo(() => (
        <CountUp
          start={0}
          end={300}
          useEasing={true}
          enableScrollSpy
        />      
      ), []);

      const countUpComponent2 = useMemo(() => (
        <CountUp
          start={0}
          end={25}
          useEasing={true}
          enableScrollSpy
        />      
      ), []);
    return (
        <div className='pt-[50px] pb-[100px] md:pt-[100px] md:pb-[100px]'>
            <div className='md:hidden'>
                <MobileActiveClient 
                counter_content={counter_content}
                counter_number={counter_number}
                />
            </div>
            <div className='md:mx-[60px] bg-white rounded-[30px]  hidden md:block'>
                <div className='flex py-[60px] w-[100%] bg-color rounded-[30px]'>
                    <div className='w-[33.3%] flex justify-center md:pr-[40px] lg:pr-[100px] xl:pr-[170px]'>
                    <div className=''>
                        <div className='text-[20px] font-[400] leading-6 pb-[15px]' dangerouslySetInnerHTML={{__html: counter_content[0]?.counter_text}}></div>
                        <div className='flex items-center'>
                        <p className='text-[40px] lg:text-[40px] font-[400] text-left w-[45px] '>{countUpComponent2}</p>
                        <span className='text-[40px] lg:text-[40px] font-[400]'>+</span>
                        </div>
                    </div>
                    </div>
                    <div className='w-[33.3%] flex justify-center'>
                    <div className=' '>
                        <div className='text-[20px] font-[400] leading-6 pb-[15px]' dangerouslySetInnerHTML={{__html: counter_content[1]?.counter_text}}></div>
                        <div className='flex items-center'>
                        <p className='text-[40px] lg:text-[40px] font-[400] text-left w-[70px]'>{countUpComponent1}</p>
                        <span className='text-[40px] lg:text-[40px] font-[400]'>+</span>
                        </div>
                    </div>
                    </div>
                    <div className='w-[33.3%] flex justify-center md:pl-[40px] lg:pl-[100px] xl:pl-[170px]'>
                    <div className=''>
                        <div className='text-[20px] font-[400] leading-6 pb-[15px] 'dangerouslySetInnerHTML={{__html: counter_content[2]?.counter_text}}></div>
                        <div className='flex items-center'>
                        <p className='text-[40px] lg:text-[40px] font-[400] text-left w-[45px]'>{countUpComponent}</p>
                        <span className='text-[40px] lg:text-[40px] font-[400]'>+</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveClient
