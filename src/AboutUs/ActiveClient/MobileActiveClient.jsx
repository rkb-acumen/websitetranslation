"use client"
import React, { useMemo } from 'react';
import CountUp from 'react-countup';

function MobileActiveClient({
  counter_content,
}) {
  return (
    <div className='px-[15px] '>
        <div className='bg-white rounded-[20px]'>
      <div className='bg-color mb-[20px] rounded-[20px] flex p-[20px] justify-between items-center'>
        <div dangerouslySetInnerHTML={{__html: counter_content[0]?.counter_text}}></div>
        <CountUp
        className='text-[20px] font-[400]'
        end={25}
        suffix='+'
        enableScrollSpy/>
      </div>
      </div>
      <div className='bg-white rounded-[20px]'>
      <div className='bg-color mb-[20px] rounded-[20px] flex p-[20px] justify-between items-center'>
        <div dangerouslySetInnerHTML={{__html: counter_content[1]?.counter_text}}></div>
        <CountUp
        className='text-[20px] font-[400]'
        end={300}
        suffix='+'
        enableScrollSpy/>
      </div>
      </div>
      <div className='bg-white rounded-[20px]'>
      <div className='bg-color mb-[20px] rounded-[20px] flex p-[20px] justify-between items-center'>
        <div dangerouslySetInnerHTML={{__html: counter_content[2]?.counter_text}}></div>
        <CountUp
        className='text-[20px] font-[400]'
        end={15}
        suffix='+'
        enableScrollSpy/>
      </div>
      </div>
    </div>
  )
}

export default MobileActiveClient
