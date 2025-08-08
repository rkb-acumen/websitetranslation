"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./OurClientSolutions.css";
import { Pagination } from "swiper/modules";
import HeadingAnimation from "@/components/Homecomponents/HeadingAnimation/HeadingAnimation";
import Image from "next/image";

const OurClientSolutions = ({
  services_section_4_title,
  services_section_4_client_details,
}) => {
  HeadingAnimation("text-clients");
  return (
    <div className="">
      <div className=" md:hidden">
        <h2 className="px-[15px] font-normal font-30 opacity-80  mb-[40px]">
          {" "}
          {services_section_4_title}{" "}
        </h2>
        <Swiper
          slidesPerView={1.15}
          spaceBetween={20}
          slidesOffsetBefore={15}
          slidesOffsetAfter={15}
          pagination={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          {services_section_4_client_details?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-[100%] h-[330px] border-[1px] border-black p-[15px] lg:p-[25px] rounded-[15px] flex flex-col mb-[20px] lg:mb-[40px] md:mr-[40px]">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center pb-[5px]">
                      <p className="text-[14px] font-medium lg:text-[24px]">
                        {item?.services_section_4_client_name}
                      </p>
                      <p className="text-[8px] pt-[4px] pl-[2px] lg:text-[14px] lg:pl-[5px]">
                        {item?.services_section_4_client_designation}
                      </p>
                    </div>
                    <div>
                      <svg
                        className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1560_90)">
                          <path
                            d="M14.7441 0H1.25594C0.562304 0 0 0.562304 0 1.25594V14.7441C0 15.4377 0.562304 16 1.25594 16H14.7441C15.4377 16 16 15.4377 16 14.7441V1.25594C16 0.562304 15.4377 0 14.7441 0Z"
                            fill="#0E76A8"
                          />
                          <path
                            d="M3.89834 11.8304H5.5396V6.35962H3.89834V11.8304ZM10.2928 6.17013C9.49633 6.17013 8.78359 6.46099 8.27793 7.10319V6.34164H6.63055V11.8304H8.27793V8.86222C8.27793 8.23484 8.85255 7.62307 9.5724 7.62307C10.2923 7.62307 10.4697 8.23504 10.4697 8.847V11.83H12.111V8.72488C12.111 6.56809 11.0898 6.17032 10.2927 6.17032L10.2928 6.17013ZM4.71146 5.81287C5.16515 5.81287 5.53328 5.44474 5.53328 4.99105C5.53328 4.53736 5.16515 4.16943 4.71146 4.16943C4.25778 4.16943 3.88965 4.53756 3.88965 4.99125C3.88965 5.44494 4.25778 5.81287 4.71146 5.81287Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1560_90">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={item?.services_section_4_rating?.url}
                      width={140}
                      height={140}
                      alt="rating"
                      className="client-start"
                    />
                  </div>
                </div>
                <div className="relative top-[50px]">
                  <div className="pb-[10px] lg:pb-[20px]">
                    <Image
                      src={item?.services_section_4_client_logo?.url}
                      width={100}
                      height={100}
                      alt="logo"
                      className="client-logo w-[100px] h-[27px] lg:w-[126px] "
                    />
                  </div>
                  <div>
                    <p className="text-[14px] text-justify lg:text-[16px] font-light">
                      {item?.services_section_4_client_content}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="px-[20px] lg:px-[60px] lg:py-[40px] hidden md:flex md:flex-col">
        {/*<h2 className="font-normal font-30 opacity-80 text-clients">*/}
        <h2 className="font-normal font-30 opacity-80">
          {" "}
          {services_section_4_title}{" "}
        </h2>
        <div className="pt-[20px] lg:pt-[40px]">
          <div className="lg:grid grid-cols-2 gap-8">
            {services_section_4_client_details?.map((item, index) => (
              <div
                key={index}
                className="w-[100%]  border-[1px] border-black p-[15px] md:p-[25px] rounded-[15px] flex flex-col mb-[20px] md:mb-[40px] md:mr-[40px]"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center pb-[5px]">
                      <p className="text-[14px] font-medium md:text-[24px]">
                        {item?.services_section_4_client_name}
                      </p>
                      <p className="text-[8px] pt-[4px] pl-[2px] md:text-[14px] md:pl-[5px]">
                        {item?.services_section_4_client_designation}
                      </p>
                    </div>
                    <div>
                      <svg
                        className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1560_90)">
                          <path
                            d="M14.7441 0H1.25594C0.562304 0 0 0.562304 0 1.25594V14.7441C0 15.4377 0.562304 16 1.25594 16H14.7441C15.4377 16 16 15.4377 16 14.7441V1.25594C16 0.562304 15.4377 0 14.7441 0Z"
                            fill="#0E76A8"
                          />
                          <path
                            d="M3.89834 11.8304H5.5396V6.35962H3.89834V11.8304ZM10.2928 6.17013C9.49633 6.17013 8.78359 6.46099 8.27793 7.10319V6.34164H6.63055V11.8304H8.27793V8.86222C8.27793 8.23484 8.85255 7.62307 9.5724 7.62307C10.2923 7.62307 10.4697 8.23504 10.4697 8.847V11.83H12.111V8.72488C12.111 6.56809 11.0898 6.17032 10.2927 6.17032L10.2928 6.17013ZM4.71146 5.81287C5.16515 5.81287 5.53328 5.44474 5.53328 4.99105C5.53328 4.53736 5.16515 4.16943 4.71146 4.16943C4.25778 4.16943 3.88965 4.53756 3.88965 4.99125C3.88965 5.44494 4.25778 5.81287 4.71146 5.81287Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1560_90">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={item?.services_section_4_rating?.url}
                      width={140}
                      height={140}
                      alt="rating"
                    />
                  </div>
                </div>
               
                {(item?.services_section_4_client_logo?.url || item?.services_section_4_client_logo?.url) && (
                    <div className='pb-[10px] md:pb-[20px] md:pt-[60px]'>
                    <Image
                      src={item?.services_section_4_client_logo?.url}
                      width={100}
                      height={100}
                      alt='logo'
                    />
                  </div>
                  )}
                  <div  className='pb-[10px]'>
                    <p className="text-[14px] text-justify md:text-[15px] font-light leading-6">
                      {item?.services_section_4_client_content}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientSolutions;
