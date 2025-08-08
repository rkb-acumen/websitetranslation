"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image"; 

const Mobilesslidersolutions = ({
  services_section_2_title,
  services_section_2_grid,
}) => {
  return (
    <>
      <div className="Industry-Swiper  pt-[40px] relative  ">
        <Swiper
          slidesPerView={4}
          breakpoints={{
            0: {
              // when window width is >= 320px
              slidesPerView: 0,
              spaceBetween: 20,
              slidesOffsetBefore: 15,
              slidesOffsetAfter: 15,
            },
            320: {
              // when window width is >= 320px
              slidesPerView: 1.2,
              spaceBetween: 20,
              slidesOffsetBefore: 15,
              slidesOffsetAfter: 15,
            },
            400: {
              // when window width is >= 320px
              slidesPerView: 1.5,
              spaceBetween: 20,
              slidesOffsetBefore: 15,
              slidesOffsetAfter: 15,
            },
            500: {
              // when window width is >= 320px
              slidesPerView: 1.6,
              spaceBetween: 20,
              slidesOffsetBefore: 15,
              slidesOffsetAfter: 15,
            },
            600: {
              // when window width is >= 320px
              slidesPerView: 1.8,
              spaceBetween: 20,
              slidesOffsetBefore: 15,
              slidesOffsetAfter: 15,
            },
            640: {
              // when window width is >= 640px
              slidesPerView: 2.5,
              spaceBetween: 20,
              slidesOffsetBefore: 15,
              slidesOffsetAfter: 15,
            },
            768: {
              // when window width is >= 768px (tablet)
              slidesPerView: 2.5,
              spaceBetween: 20,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60,
            },
            1024: {
              // when window width is >= 1024px (desktop)
              slidesPerView: 3.5,
              spaceBetween: 20,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60,
            },
            1224: {
              // when window width is >= 1024px (desktop)
              slidesPerView: 4.2,
              spaceBetween: 30,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60,
            },
            1700: {
              // when window width is >= 1024px (desktop)
              slidesPerView: 5,
              spaceBetween: 30,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60,
            },
            2000: {
              // when window width is >= 1024px (desktop)
              slidesPerView: 5.5,
              spaceBetween: 30,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60,
            },
            2500: {
              // when window width is >= 1024px (desktop)
              slidesPerView: 6.5,
              spaceBetween: 30,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60,
            },
          }}
          spaceBetween={0}
          freeMode={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper Industry "
        >
          {services_section_2_grid?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="Cards border-[2px] md:w-[350px] md:h-[450px] h-[320px] rounded-3xl flex flex-col justify-center md:gap-12 gap-5">
                <div className="flex justify-center items-center">
                  <div className="w-[100px]">
                    <Image
                      src={item?.services_section_2_sub_icon?.url}
                      alt="icons"
                      height={50}
                      width={50}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="text-center md:px-10 px-5">
                  <div className="font-20-title py-5">
                    <p>{item?.services_section_2_sub_title}</p>
                  </div>
                  <div className="font-14">
                    <p>{item?.services_section_2_sub_description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='industry-custom-nav'>
          <div className="swiper-button-prev "></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </>
  );
};

export default Mobilesslidersolutions;
