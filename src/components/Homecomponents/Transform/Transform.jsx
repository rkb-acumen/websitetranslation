
"use client"
import React, { useEffect, useState } from 'react';
import "./Transform.css";
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import CountUp from 'react-countup';
import Link from 'next/link';

const Transform = ({ data }) => {

  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     "#heading-animi",
  //     { y: 50, opacity: 0, filter: "blur(10px)" },
  //     { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" }
  //   );
  //   tl.from('#round-1', {
  //     x: 100, // Start position (from the right)
  //     opacity: 0, // Fade in
  //     duration: 0.4, // Reduced duration for a quicker start
  //     ease: 'power3.out' // Smoother easing function
  //   })
  //     .from('#round-2', {
  //       x: 100,
  //       opacity: 0,
  //       duration: 0.4, // Reduced duration
  //       ease: 'power3.out'
  //     }, '-=0.3')
  //     .from('#round-3', {
  //       x: 100,
  //       opacity: 0,
  //       duration: 0.5, // Reduced duration
  //       ease: 'power3.out'
  //     }, '-=0.3')
  //     .from('#round-4', {
  //       x: 100,
  //       opacity: 0,
  //       duration: 0.6, // Reduced duration
  //       ease: 'power3.out'
  //     }, '-=0.3');
  //   tl.from('#round-5', {
  //     x: 100, // From the right
  //     opacity: 0, // Fade in
  //     duration: 0.6, // Reduced duration
  //     ease: 'power3.out'
  //   }, '-=0.3'); 
  //   gsap.from('#intropara', {
  //     opacity: 0,
  //     y: 50, // Move 50px in the y-direction
  //     duration: 1, // Animation duration
  //     ease: "power2.out"
  //   }); 
  // }, []);
  useGSAP(() => {
    const tl = gsap.timeline();

    // Define the media query for screen sizes above 768px
    const mm = gsap.matchMedia();

    mm.add("(min-width: 320px)", () => {
      // The heading animation will only run if the screen width is 768px or above
      tl.fromTo(
        "#heading-animi",
        { y: 50, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      );
    });

    // tl.from('#round-1', {
    //   x: 100, // Start position (from the right)
    //   opacity: 0, // Fade in
    //   duration: 0.4, // Reduced duration for a quicker start
    //   ease: 'power3.out' // Smoother easing function
    // })
    //   .from('#round-2', {
    //     x: 100,
    //     opacity: 0,
    //     duration: 0.4, // Reduced duration
    //     ease: 'power3.out'
    //   }, '-=0.3')
    //   .from('#round-3', {
    //     x: 100,
    //     opacity: 0,
    //     duration: 0.5, // Reduced duration
    //     ease: 'power3.out'
    //   }, '-=0.3')
    //   .from('#round-4', {
    //     x: 100,
    //     opacity: 0,
    //     duration: 0.6, // Reduced duration
    //     ease: 'power3.out'
    //   }, '-=0.3');
    // tl.from('#round-5', {
    //   x: 100, // From the right
    //   opacity: 0, // Fade in
    //   duration: 0.6, // Reduced duration
    //   ease: 'power3.out'
    // }, '-=0.3');

    gsap.from('#intropara', {
      opacity: 0,
      y: 50, // Move 50px in the y-direction
      duration: 1, // Animation duration
      ease: "power2.out"
    });
  }, []);


  return (
    <>
      <div className="homsec1  home-sec1-bg ">
        <div id="mouse-containter" className="homsec1-inner  ">

          <div className="homesec1-rightcurve">
          </div>
          <div className='homesec1-col1'>
            <div className='homesec1-heading'>
              <h1 id="heading-animi" className='font-40 color-black' dangerouslySetInnerHTML={{ __html: data?.acf?.section_one_banner_title }} ></h1>
              {/* <h1 id="heading-animi" className='font-50 color-white'>
                <span className='line'>Transform</span> <br />
                <span className='line'>Your Business</span> <br />
                <span className='line'>With Google Cloud</span>
              </h1> */}
              {/* <h1 id="heading-animi" className='font-50 color-white'>
                <span>Transform</span> <br />
                <span>Your Business</span> <br />
                <span>With Google Cloud</span>
              </h1> */}
              <div className="ss1-btn-div-150px">
                  <Link href={"/blog/what-you-do-with-data-matters/"}>
                       <button className="ss1-btn-auto">Learn More</button>
                  </Link>
              </div>
            </div>
          </div>
          <div className='homesec1-col2'>
            <div className='homesec1-gird'>
              <Image 
              width={500} 
              height={500} 
              className="homesec1-img" 
              src={data?.acf?.section_one_banner_image?.url} 
              alt={data?.acf?.section_one_banner_image?.alt} 
              />
              <div className='homesec1-gird-p color-black'>
                <p>{data?.acf?.section_one_banner_image_content}</p>
              </div>
              
            </div>
          </div>
          <div className='homesec1-col3'>
            <div className='homesec1-count-text-wrap'>
              <div id='intropara' className='homesec1-count-description'>
                <p>{data?.acf?.section_one_banner_counter_description}</p>
              </div>
              <div className='homesec-count-grid'>

                <div className='homesec-count-grid-inner' >
                  <div className='homesec1-count-div'>
                    <img className="homesec1-count" src="/Transform/CUNT-01.svg" />
                    <div className='homesec1-counter'>
                      <p> 
                      <CountUp start={0} end={data?.acf?.section_one_banner_counter[0]?.section_one_banner_counter} />{data?.acf?.section_one_banner_counter[0].section_one_banner_counter_symbol}
                      </p>
                      </div>
                  </div>
                  <p className='homesec1-count-type'>{data?.acf?.section_one_banner_counter[0].section_one_banner_counter_text}</p>
                </div>
                <div className='homesec-count-grid-inner' >
                  <div className='homesec1-count-div'>
                    <img className="homesec1-count" src="/Transform/CUNT-01.svg" />
                    <div className='homesec1-counter'><p> <CountUp start={0} end={data?.acf?.section_one_banner_counter[1]?.section_one_banner_counter} duration={3} />{data?.acf?.section_one_banner_counter[1].section_one_banner_counter_symbol}</p></div>
                  </div>
                  <p className='homesec1-count-type'>{data?.acf?.section_one_banner_counter[1].section_one_banner_counter_text}</p>
                </div>
                <div className='homesec-count-grid-inner' >
                  <div className='homesec1-count-div'>

                    <img className="homesec1-count" src="/Transform/CUNT-01.svg" />
                    <div className='homesec1-counter'><p> <CountUp start={0} end={data?.acf?.section_one_banner_counter[2]?.section_one_banner_counter} decimals={1} /></p></div>


                  </div>
                  <p className='homesec1-count-type'>{data?.acf?.section_one_banner_counter[2].section_one_banner_counter_text}</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transform
