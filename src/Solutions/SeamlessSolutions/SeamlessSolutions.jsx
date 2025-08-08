import Image from "next/image";
import React from "react";
import "./SeamlessSolution.css";
import Link from "next/link";

const SeamlessSolutions = ({
  services_section_5_title,
  services_section_5_content,
  services_section_5_button,
}) => {
  return (
    <div className=" Seamless px-[15px] pt-[50px] pb-[40px] lg:px-[60px]    ">
      <div className="bg-[#1B0600] rounded-[30px] w-[100%]    py-[50px]">
        <div className="lg:px-[60px]">
          <div className="w-full">
            <Image
              src={"/Seamless/Fire.jpg"}
              width={800}
              height={800}
              alt="fire"
              className="object-cover w-full"
            />
          </div>
          <div className="text-center pb-[10px]">
            <h2
              className="text-white text-[22px]  leading-[32.64px] md:text-[40px] md:leading-[46px] lg:text-[60px] lg:leading-[70px] font-[400]"
              dangerouslySetInnerHTML={{ __html: services_section_5_title }}
            ></h2>
          </div>
          <div className="text-center max-w-[600px] mx-auto mb-[20px]">
            <p className="text-white text-[12px] mx-[10px] leading-[21px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[23px] font-[300]">
              {services_section_5_content}
            </p>
          </div>
          <div className="text-center">
            <Link href={services_section_5_button}>
              <button className="text-white foot-button">Let's Talk!</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className='bg-[#1B0600] rounded-[30px] w-[100%] h-auto py-[50px]'>
                <div className=' px-[60px]'>
                    <div>
                        <Image src={"/Seamless/Fire.png"}
                        width={1500}
                        height={1000}
                        alt='fire'
                        className='object-cover w-full h-auto'
                        />
                    </div>
                    <div className='text-center pb-[10px]'>
                        <h2 className='text-white text-[60px] font-normal leading-[70px]'>Start Your Seamless <br></br> Translation Journey Today!</h2>
                    </div>
                    <div className='text-center max-w-[600px] mx-auto mb-[20px]'>
                        <p className='text-white text-[18px] leading-[23px]'>Don’t let the deprecation of Google’s Translation Hub hinder your business. Switch to Acumen Translation Hub and enjoy uninterrupted, efficient, and reliable document translation services.</p>
                    </div>
                    <div className='text-center'>
                    <button className='text-white foot-button'>Let's Talk!</button>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default SeamlessSolutions;
