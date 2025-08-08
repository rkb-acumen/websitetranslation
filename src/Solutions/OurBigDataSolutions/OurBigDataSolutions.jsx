"use client";
import HeadingAnimation from "@/components/Homecomponents/HeadingAnimation/HeadingAnimation";
import VideoSection from "@/Services/OurBigDataService/VideoSection/VideoSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const OurBigDataSolutions = ({
  services_section_3_title,
  services_section_3_sub_title,
  banner_data_counter_3_contents,
  services_section_3_image,
  video
}) => {
  HeadingAnimation("text-dataservice");
  return (
    <>
      <div className="md:relative ">
        <div className="md:px-[60px] md:py-[90px] pt-[0px] pb-[90px] px-[15px]">
          <h2 className="font-30  opacity-80 font-normal ">
            {services_section_3_title}
          </h2>
          <div className="max-w-[1800px] mx-auto">
            <div className="md:pt-[60px] pt-[40px] md:flex justify-evenly ">
              <div className="md:block ">
                {/* <Image
                  src={services_section_3_image?.url}
                  alt="services"
                  width={400}
                  height={400}
                  className="object-cover rounded-[30px] w-full mx-auto  sticky top-[3rem]"  
                /> */}
                <VideoSection
                  url={services_section_3_image?.url}
                  video={video}
                />
              </div>
              <div className="z-50  ">
                {/* <div className='flex gap-9'>
                                <div>
                                    <button className='border border-[#F54D28] px-5 py-3 text-[14px]'>01 Familiar Workflow</button>
                                </div>
                                <div>
                                    <button className='border border-[#D7D7D7] text-[#7C7C7C] px-5 py-3 text-[14px]'>02 Verified Functionality</button>
                                </div>
                                <div>
                                    <button className='border border-[#D7D7D7] text-[#7C7C7C] px-5 py-3 text-[14px]'>03 Consistent Performance</button>
                                </div>
                                <div>
                                    <button className='border border-[#D7D7D7] text-[#7C7C7C] px-5 py-3 text-[14px]'>04 Seamless Operations</button>
                                </div>
                            </div> */}
                <div>
                  <div>
                    <div>
                      <div className="  md:px-12">
                        <h2 className="md:text-[24px] text-[18px] max-w-[650px]">
                          {services_section_3_sub_title}
                        </h2>
                        <div className="max-w-[700px] pt-5 leading-6 md:leading-7 font-[300] text-justify">
                          {
                            banner_data_counter_3_contents.map((val) => {
                              return (
                                <>
                                  <div className='border border-x-0 py-3'>
                                    <div>
                                      <p className="font-medium">{val?.services_section_3_sub_contents_title}</p>
                                    </div>
                                    <div>
                                      <div dangerouslySetInnerHTML={{ __html: val?.services_section_3_sub_contents_para }}></div>
                                    </div>
                                  </div>
                                </>
                              )
                            })
                          }
                          {/* <div
                            dangerouslySetInnerHTML={{
                              __html: services_section_3_sub_content,
                            }}
                          ></div> */}
                        </div>
                        <div className="text-center md:text-left pt-7 md:pt-0">
                          <Link href={"/contact"}>
                            <button className="data-service   text-white ">
                              <span className="bg-black px-6 py-3">
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
  );
};

export default OurBigDataSolutions;
