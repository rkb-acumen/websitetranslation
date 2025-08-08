"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Industry.css";
import Image from "next/image";
import Mobileslider from "./Mobileslider/Mobileslider";
// import { useGSAP } from '@gsap/react';
// import MediaQuery from 'react-responsive';
import HeadingAnimation from '@/components/Homecomponents/HeadingAnimation/HeadingAnimation';

gsap.registerPlugin(ScrollTrigger);
const Industry = ({ services_section_2_title, services_section_2_grid }) => {
  HeadingAnimation("text-industry");
  // const horizontalScrollContainer = useRef(null);

  // useGSAP(() => {

  //     let ctx = gsap.context(() => {

  //         const initGSAPAnimation = (xPercent) => {
  //             const sections = gsap.utils.toArray('.Cards');

  //             gsap.to(sections, {
  //                 xPercent: -xPercent * (sections.length - 1),
  //                 ease: 'none',
  //                 scrollTrigger: {
  //                     trigger: horizontalScrollContainer.current,
  //                     start: "top top",
  //                     end: "bottom center",
  //                     pin: true,
  //                     scrub: 1,
  //                     end: () => `+=${horizontalScrollContainer.current?.offsetWidth || 0}`,
  //                 },
  //             });
  //         };

  //         const isDesktop = window.matchMedia('(min-width: 1268px)').matches;
  //         const isTablet = window.matchMedia('(min-width: 1024px) and (max-width: 1267px)').matches;

  //         if (isDesktop) {
  //             initGSAPAnimation(29);
  //         } else if (isTablet) {
  //             initGSAPAnimation(35);
  //         }
  //     }, horizontalScrollContainer);

  //     return () => {
  //         ctx.revert();
  //     };
  // }, []);
  return (
    <>
      <div className="Industry    lg:py-[30px] overflow-hidden  ">
        <div className="Industry-heading  md:p-[60px] p-[15px] ">
          {/*<h2 className="font-30-bold opacity-80 font-normal text-industry">
            {" "}
            {services_section_2_title}{" "}
          </h2>*/}
          <h2 className="font-30-bold opacity-80 font-normal">
            {" "}
            {services_section_2_title}{" "}
          </h2>
        </div>

        {/* <div className='pl-16   gap-5 xl:w-[200vw] lg:w-[250vw] lg:flex hidden horizontal-scroll-container '>
                    {services_section_2_grid?.map((item, index) => (
                        <div
                            key={index}
                            className="Cards border-[2px] md:w-[350px] md:h-[450px] w-[250px] h-[360px] rounded-3xl flex flex-col justify-center md:gap-28 gap-5"
                        >
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
                    ))}
                </div> */}

        {/* <div className='lg:hidden block'> */}
        <Mobileslider
          services_section_2_title={services_section_2_title}
          services_section_2_grid={services_section_2_grid}
        />
        {/* </div> */}
      </div>
    </>
  );
};

export default Industry;
