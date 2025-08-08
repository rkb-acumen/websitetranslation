"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import "./MobileService.css";



const MobileService = ({ section_two_content }) => {
  return (

    <>
      <div className='ourservices_mobile_slider_bg'>

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              // loop: true,
              autoHeight: true,
              scrollbar: {
                dragSize: 50,
                spaceBetween: 20,
              },
            },
            590: {
              // loop: true,
              slidesPerView: 1,
              spaceBetween: 20,
            },

            750: {
              slidesPerView: 1,
              spaceBetween: 20,

            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 20,

            },
          }}




          pagination={{
            el: ".swiper-pagination1",

            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="ourservices_mobile_slider_container"
        >

          {/* <SwiperSlide>
            <div className='ourservices_mobile_item h-[80vh]'>
              <div className='servicesmobile rounded-[27px]'>
                <div className='p-2'>
                  <Image
                    src={section_two_content[0]?.section_two_tab_image?.url}
                    alt='service'
                    width={500}
                    height={500}
                    className='w-[19rem] h-auto rounded-[20px]'
                  />

                </div>
              </div>
              <h2 className='servicesmobile-title'>{section_two_content[0]?.section_two_tab_title}</h2>
              <p className='servicesmobile-para'>{section_two_content[0]?.section_two_tabs_content}</p>

            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className='ourservices_mobile_item'>
              <div className='servicesmobile rounded-[27px]'>
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
              <h2 className='servicesmobile-title'>Document Translation</h2>
              <p className='servicesmobile-para'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>

            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className='ourservices_mobile_item'>
              <div className='servicesmobile rounded-[27px]'>
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
              <h2 className='servicesmobile-title'>Document Translation</h2>
              <p className='servicesmobile-para'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>

            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className='ourservices_mobile_item'>
              <div className='servicesmobile rounded-[27px]'>
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
              <h2 className='servicesmobile-title'>Document Translation</h2>
              <p className='servicesmobile-para'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ourservices_mobile_item'>
              <div className='servicesmobile rounded-[27px]'>
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
              <h2 className='servicesmobile-title'>Document Translation</h2>
              <p className='servicesmobile-para'>Acumen Velocity, a Google cloud partner based out of Orange County, CA – is proud to assist Google Cloud customers with onboarding.</p>

            </div>
          </SwiperSlide> */}
          {section_two_content.map((content, index) => (
            <SwiperSlide key={index}>
              <div className='ourservices_mobile_item h-[80vh] '>
                <div className='servicesmobile rounded-[27px]'>
                  <div className='p-2'>
                    <Image
                      src={content?.section_two_tab_image?.url}
                      alt='service'
                      width={500}
                      height={500}
                      className='w-[19rem] h-auto rounded-[20px]'
                    />
                  </div>
                </div>
                <h2 className='servicesmobile-title'>{content?.section_two_tab_title}</h2>
                <p className='servicesmobile-para'>{content?.section_two_tabs_content}</p>
              </div>
            </SwiperSlide>
          ))}



          <div className="swiper-pagination swiper-pagination1"></div>

        </Swiper>
      </div>

    </>

  );
}
export default MobileService