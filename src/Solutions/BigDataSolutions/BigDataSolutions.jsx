"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./BigDataSolutions.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import CountUp from "react-countup";
import Link from "next/link";

const BigDataSolutions = ({
  banner_title,
  banner_description,
  banner_happy_customers_tag,
  banner_data_counter_1_number,
  banner_data_counter_1_symbol,
  banner_data_counter_1_content,
  banner_data_counter_2_number,
  banner_data_counter_2_symbol,
  banner_data_counter_2_content,
  banner_data_counter_3_number,
  banner_data_counter_3_symbol,
  banner_data_counter_3_content,
  banner_data_right_content,
  banner_right_image_url,
  banner_right_image_alt,
  banner_video_section,
}) => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".data-heading",
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
        }
      );

      // tl.from("#round-1-data", {
      //   x: 100,
      //   opacity: 0,
      //   duration: 0.4,
      //   ease: "power3.out",
      // })
      //   .from(
      //     "#round-2-data",
      //     {
      //       x: 100,
      //       opacity: 0,
      //       duration: 0.4,
      //       ease: "power3.out",
      //     },
      //     "-=0.3"
      //   )
      //   .from(
      //     "#round-3-data",
      //     {
      //       x: 100,
      //       opacity: 0,
      //       duration: 0.5,
      //       ease: "power3.out",
      //     },
      //     "-=0.3"
      //   )
      //   .from(
      //     "#round-4-data",
      //     {
      //       x: 100,
      //       opacity: 0,
      //       duration: 0.6,
      //       ease: "power3.out",
      //     },
      //     "-=0.3"
      //   );

      gsap.from(".intropara", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // Clean up GSAP context on component unmount
  }, []);

  const handleImageClick = () => {
    if (banner_video_section[0].banner_video_link) {
      setPopupOpen(banner_video_section[0].banner_video_link);
    }
  };

  const getYouTubeVideoId = (url) => {
    const match = url?.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : "";
  };
  

  return (
    <>
      <div className="dataSoultions_grid_container">
        <div className="dataSoultions_grid_item">
          <div className="md:flex  md:justify-between">
            <div className="md:w-[50%]">
              <h1 className="font-50 color-black data-heading md:max-w-[500px] md:w-full">{banner_title}</h1>
              <p className="datasolutiions-description intropara ">
                {" "}
                {banner_description}{" "}
              </p>

              {(banner_title === 'Acumen Translation Hub (ATH)') &&
            <div className="max-w-[200px] w-full mb-5 md:mb-0">  
            {/* ss1-btn-div-200px */}
              <Link href={"https://api.acumenvelocity.com/wp-content/uploads/2024/11/ATH_One_Pager.pdf"} target="_blank" rel="noopener">
                <button className="ss1-btn-auto">Download One-pager</button>
              </Link>
            </div>
          }

              {(banner_title === 'Acumen Vega Iceberg') &&
            <div className="max-w-[200px] w-full mb-5 md:mb-0">  
            {/* ss1-btn-div-200px */}
              <Link href={"https://api.acumenvelocity.com/wp-content/uploads/2025/03/AcumenVega_One-Pager.pdf"} target="_blank" rel="noopener">
                <button className="ss1-btn-auto">Download One-pager</button>
              </Link>
            </div>
          }
              
            </div>
            <div className="md:w-[50%]">
            {banner_video_section?.[0]?.banner_video_link && (
              <div className="mb-5 md:mb-0 cursor-pointer relative max-w-[100%] md:max-w-[100%]">
                <Image
                  src={`https://img.youtube.com/vi/${getYouTubeVideoId(banner_video_section?.[0]?.banner_video_link)}/maxresdefault.jpg`}
                  // src={'https://img.youtube.com/vi/LBTcfq4JlBs/maxresdefault.jpg'}
                  alt={"youtupevideo"}
                  height={800}
                  width={800}
                  className="rounded-[20px]  w-full md:mx-auto object-cover cursor-pointer "
                  onClick={handleImageClick}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  onClick={handleImageClick}
                >
                  <Image
                    src={'/Playicon/acumenvelocity_play_button_icon.svg'}
                    alt="video"
                    width={60}
                    height={60}
                    className="w-[40px] h-[40px] cursor-pointer"
                  />
                </div>
              </div>)}
            </div>

          </div>

         

          {/* <div className="data-solutionbtn-outer">
            <div className="ss1-btn-div">
              <Link href={"/contact"}>
                <button className="ss1-btn">Let's Talk!</button>
              </Link>
            </div>

            <div className="happy-custom-div">
              <div>
                <div className="happy-custom-text">
                  <p> {banner_happy_customers_tag} </p>
                </div>
              </div>
              <div>
                <Image
                  id="round-1-data"
                  className="happy-img1 w-[50px] h-[50px]"
                  width={50}
                  height={50}
                  src="/Transform/button-icon1.png"
                />
                <Image
                  id="round-2-data"
                  className="happy-img2 w-[50px] h-[50px]"
                  width={50}
                  height={50}
                  src="/Transform/button-icon2.png"
                />
                <Image
                  id="round-3-data"
                  className="happy-img3 w-[50px] h-[50px]"
                  width={50}
                  height={50}
                  src="/Transform/button-icon3.png"
                />
                <Image
                  id="round-4-data"
                  className="happy-img4 w-[50px] h-[50px]"
                  width={50}
                  height={50}
                  src="/Transform/button-icon4.png"
                /> 
              </div>
            </div>
          </div> */}
        </div>
        <div className="dataSoultions_grid_item ">
          
          {/* <span className="data-count">
            <CountUp
              start={0}
              end={banner_data_counter_1_number}
              duration={3}
            />{" "}
            {banner_data_counter_1_symbol}{" "}
          </span>
          <p className="intropara"> {banner_data_counter_1_content} </p>
        </div>
        <div className="dataSoultions_grid_item">
          <span className="data-count">
            <CountUp
              start={0}
              end={banner_data_counter_2_number}
              duration={3}
            />{" "}
            {banner_data_counter_2_symbol}{" "}
          </span>
          <p className="intropara"> {banner_data_counter_2_content}</p>
        </div>
        <div className="dataSoultions_grid_item">
          <span className="data-count">
            {" "}
            {banner_data_counter_3_number} {banner_data_counter_3_symbol}
          </span> */}
          {/* KSR added below code */}
          <span className="data-count">
            <CountUp
              start={0}
              end={banner_data_counter_1_number}
              duration={3}
            />
            {banner_data_counter_1_symbol}
          </span>
          <p className="intropara font-14"> {banner_data_counter_1_content} </p>
        </div>
        <div className="dataSoultions_grid_item">
          <span className="data-count">
            <CountUp
              start={0}
              end={banner_data_counter_2_number}
              duration={3}
            />
            {banner_data_counter_2_symbol}
          </span>
          <p className="intropara font-14"> {banner_data_counter_2_content}</p>
        </div>
        <div className="dataSoultions_grid_item">
          <span className="data-count">
            <CountUp
              start={0}
              end={banner_data_counter_3_number}
              duration={3}
            />
            {banner_data_counter_3_symbol}
          </span>
          
          <p className="intropara"> {banner_data_counter_3_content}</p>
        </div>
        <div className="dataSoultions_grid_item">
          <div className="dataright-div">
            <p className="dataright-title data-heading">
              {banner_data_right_content}
            </p>
          </div>
          <Image
            className="data-img"
            width={400}
            height={400}
            src={banner_right_image_url}
            alt={banner_right_image_alt}
          />
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 px-5 md:px-0">
          <div className="relative bg-white rounded-lg  md:w-[600px] md:h-[400px] h-[300px]">
            <iframe
              width="100%"
              height="100%"
              src={`${isPopupOpen}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <button
              className="absolute -top-2 -right-2 bg-white rounded-full p-2"
              onClick={() => setPopupOpen(null)}
            >
              <Image
                src={'/services/videoicon/close.svg'}
                alt="img-popup"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BigDataSolutions;
