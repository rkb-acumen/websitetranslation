import React from "react";
import Image from "next/image";

function BlogDynamicIntro({ val }) {
  return (
    <div className=" lg:px-[60px] md:px-[30px] px-[15px] ">
      <div className="border border-t-[#D7D7D7] border-x-0 border-b-0 pt-[40px] ">
        <div className=" md:flex md:justify-between">
          <div className="">
            <h1 className='font-40-left max-w-[1080px]'>
              {/* Google Cloud <br/> Autoscaling Capabilities */}
              {val?.title?.rendered}
            </h1>
          </div>
          <div >
            <div className="flex gap-1 md:justify-end items-center lg:py-0 py-5">
              <div className="">
                <Image
                  src={val.acf.user_image.url}
                  alt={val.acf.user_image.alt}
                  width={130}
                  height={130}
                  className="rounded-full h-14 w-14 border-2 object-cover border-[#D6D6D6]"
                  priority
                />
              </div>
              <div className="text-[13px]">
                <p>{val?.acf?.user_name}</p>
                <p>{val?.date.split('T')[0]}</p>
              </div>
            </div>
            {/* 
            <div className="flex gap-6 md:pt-12 ">
            
             <button className="border border-[#D7D7D7] font-light px-3 py-[1px] text-[18px]  rounded-xl">Cloud and AI</button>
              <button className="border border-[#D7D7D7] font-light px-3 py-[1px] text-[18px]   rounded-xl">Open Source</button> 

            </div>
            */}
          </div>
        </div>
        {/* {val._embedded["wp:featuredmedia"][0]?.link && 
        <div className="py-14">
          <Image
            src={val._embedded["wp:featuredmedia"][0]?.link}
            width={1500}
            height={1500}
            className="h-[52vh] w-full object-cover object-center rounded-3xl"
            priority
          />
        </div>} */}
        {val._embedded?.["wp:featuredmedia"]?.[0]?.link && (
          <div className="py-14">
            <Image
              src={val._embedded["wp:featuredmedia"][0]?.link}
              width={1500}
              height={1500}
              className="h-[52vh] w-full object-cover object-center rounded-3xl"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogDynamicIntro;
