"use client";
import React, { useState } from "react";
import "./PartnerSolutionsSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";

const PartnerSolutionsSlider = ({ services_section_6_slider }) => {
  const [slide] = useState([services_section_6_slider]);
  return (
    <>
      <Swiper
        pagination={{
          el: ".swiper-pagination3",

          dynamicBullets: true,
          clickable: true,
        }}
        effect={"fade"}
        // autoplay={{
        //     delay : 2200
        // }}
        loop={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="parterslider"
      >
        {slide?.map((val) => {
          return (
            <>
              <SwiperSlide>
                <div className="relative bg-white">
                  <div>
                    <div className="border border-neutral-400 py-20  rounded-[3rem]">
                      <div className="text-center">
                        <Image
                          src={val?.services_section_6_logo?.url}
                          alt="partner"
                          width={200}
                          height={200}
                          className="object-cover max-w-36 mx-auto w-full h-16 "
                        />
                        <div className="pt-5">
                          <p className="max-w-72 text-center w-full mx-auto text-[14px] font-[300] leading-5">
                            {val?.services_section_6_content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute lg:top-0 lg:-left-80 -top-24 -left-0">
                    <Image
                      src={val?.services_section_6_float1_image?.url}
                      alt="services"
                      width={400}
                      height={400}
                      className="lg:max-w-28 max-w-20 h-8 lg:h-10 object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute lg:bottom-0 -bottom-36 sm:-left-16 lg:-left-56">
                    <div className="rounded-[100%] border border-[#9C9C9C] lg:w-36 lg:h-36 w-32 h-32 flex justify-center items-center">
                      <div>
                        <p className="lg:text-[25px] text-[20px]">
                          {val?.services_section_6_float3_title}
                        </p>
                        <p className="lg:text-[13px] text-[10px] font-[300]">
                          {val?.services_section_6_float3_content}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute lg:-top-20 lg:-right-56 -top-36 right-0">
                    <div className="rounded-[100%] border border-[#9C9C9C] w-32 h-32 flex justify-center items-center">
                      <div>
                        <p className="text-[25px]">
                          {val?.services_section_6_float2_title}
                        </p>
                        <p
                          className="text-[13px] font-[300]"
                          dangerouslySetInnerHTML={{
                            __html: val?.services_section_6_float2_title_copy,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute lg:bottom-0 lg:-right-96 -bottom-32 right-0">
                    <Image
                      src={val?.services_section_6_float4_image?.url}
                      alt="services"
                      width={400}
                      height={400}
                      className="lg:max-w-28 max-w-16 h-8 lg:h-10 object-cover rounded-[2rem]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
        {/* <SwiperSlide>
                <div className='relative'>
                        <div >
                            <div className='border border-neutral-400 py-20  rounded-[3rem]'>
                                <div className='text-center'>
                                    <Image
                                        src={'/services/partner/parter.svg'}
                                        alt='partner'
                                        width={200}
                                        height={200}
                                        className='object-cover max-w-36 mx-auto w-full h-16 '
                                    />
                                    <div className='pt-5'>
                                        <p className='max-w-72 text-center w-full mx-auto text-[14px] font-[300] leading-5'>
                                            Bringing together 65,000 dedicated professionals, the Accenture Microsoft Business Group—powered by Avanade empowers enterprises to thrive.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='absolute top-0 -left-80'>
                            <Image
                                src={'/services/partner/img1.jpeg'}
                                alt='services'
                                width={400}
                                height={400}
                                className='max-w-28 h-10 object-cover rounded-full'
                            />
                        </div>
                        <div className='absolute bottom-0 -left-56'>
                            <div className='rounded-[100%] border border-[#9C9C9C] w-36 h-36 flex justify-center items-center'>
                                <div>
                                    <p className='text-[25px]'>$10B+</p>
                                    <p className='text-[13px] font-[300]'>collective spending on innovation per month</p>
                                </div>

                            </div>
                        </div>
                        <div className='absolute -top-20 -right-56'>
                            <div className='rounded-[100%] border border-[#9C9C9C] w-32 h-32 flex justify-center items-center'>
                                <div>
                                    <p className='text-[25px]'>2-3x</p>
                                    <p className='text-[13px] font-[300]'>Probability to <br /> innovate</p>
                                </div>

                            </div>
                        </div>
                        <div className='absolute bottom-0 -right-96'>
                            <Image
                                src={'/services/partner/img2.png'}
                                alt='services'
                                width={400}
                                height={400}
                                className='max-w-28 h-10 object-cover rounded-[2rem]'
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative'>
                        <div >
                            <div className='border border-neutral-400 py-20  rounded-[3rem]'>
                                <div className='text-center'>
                                    <Image
                                        src={'/services/partner/parter.svg'}
                                        alt='partner'
                                        width={200}
                                        height={200}
                                        className='object-cover max-w-36 mx-auto w-full h-16 '
                                    />
                                    <div className='pt-5'>
                                        <p className='max-w-72 text-center w-full mx-auto text-[14px] font-[300] leading-5'>
                                            Bringing together 65,000 dedicated professionals, the Accenture Microsoft Business Group—powered by Avanade empowers enterprises to thrive.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='absolute top-0 -left-80'>
                            <Image
                                src={'/services/partner/img1.jpeg'}
                                alt='services'
                                width={400}
                                height={400}
                                className='max-w-28 h-10 object-cover rounded-full'
                            />
                        </div>
                        <div className='absolute bottom-0 -left-56'>
                            <div className='rounded-[100%] border border-[#9C9C9C] w-36 h-36 flex justify-center items-center'>
                                <div>
                                    <p className='text-[25px]'>$10B+</p>
                                    <p className='text-[13px] font-[300]'>collective spending on innovation per month</p>
                                </div>

                            </div>
                        </div>
                        <div className='absolute -top-20 -right-56'>
                            <div className='rounded-[100%] border border-[#9C9C9C] w-32 h-32 flex justify-center items-center'>
                                <div>
                                    <p className='text-[25px]'>2-3x</p>
                                    <p className='text-[13px] font-[300]'>Probability to <br /> innovate</p>
                                </div>

                            </div>
                        </div>
                        <div className='absolute bottom-0 -right-96'>
                            <Image
                                src={'/services/partner/img2.png'}
                                alt='services'
                                width={400}
                                height={400}
                                className='max-w-28 h-10 object-cover rounded-[2rem]'
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative'>
                        <div >
                            <div className='border border-neutral-400 py-20  rounded-[3rem]'>
                                <div className='text-center'>
                                    <Image
                                        src={'/services/partner/parter.svg'}
                                        alt='partner'
                                        width={200}
                                        height={200}
                                        className='object-cover max-w-36 mx-auto w-full h-16 '
                                    />
                                    <div className='pt-5'>
                                        <p className='max-w-72 text-center w-full mx-auto text-[14px] font-[300] leading-5'>
                                            Bringing together 65,000 dedicated professionals, the Accenture Microsoft Business Group—powered by Avanade empowers enterprises to thrive.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='absolute top-0 -left-80'>
                            <Image
                                src={'/services/partner/img1.jpeg'}
                                alt='services'
                                width={400}
                                height={400}
                                className='max-w-28 h-10 object-cover rounded-full'
                            />
                        </div>
                        <div className='absolute bottom-0 -left-56'>
                            <div className='rounded-[100%] border border-[#9C9C9C] w-36 h-36 flex justify-center items-center'>
                                <div>
                                    <p className='text-[25px]'>$10B+</p>
                                    <p className='text-[13px] font-[300]'>collective spending on innovation per month</p>
                                </div>

                            </div>
                        </div>
                        <div className='absolute -top-20 -right-56'>
                            <div className='rounded-[100%] border border-[#9C9C9C] w-32 h-32 flex justify-center items-center'>
                                <div>
                                    <p className='text-[25px]'>2-3x</p>
                                    <p className='text-[13px] font-[300]'>Probability to <br /> innovate</p>
                                </div>

                            </div>
                        </div>
                        <div className='absolute bottom-0 -right-96'>
                            <Image
                                src={'/services/partner/img2.png'}
                                alt='services'
                                width={400}
                                height={400}
                                className='max-w-28 h-10 object-cover rounded-[2rem]'
                            />
                        </div>
                    </div>
                </SwiperSlide> */}
        <div className="swiper-pagination swiper-pagination3"></div>
      </Swiper>
    </>
  );
};

export default PartnerSolutionsSlider;
