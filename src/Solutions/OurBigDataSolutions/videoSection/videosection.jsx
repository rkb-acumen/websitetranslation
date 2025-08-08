"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import './Video.css'

const VideoSection = ({ url, video }) => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isVideoAvailable, setIsVideoAvailable] = useState(false);

    

    const handleVideoClick = () => {
   
        if (video) {
            setIsTransitioning(true);
            setIsPopupVisible(true);
          
        }
    };

    const closePopup = () => {
        setIsTransitioning(false);
        setTimeout(() => setIsPopupVisible(false), 300);  // Delay to match the transition duration
    };

    useEffect(() => {
        if (isPopupVisible) {
            const timer = setTimeout(() => setIsTransitioning(true), 10);
            return () => clearTimeout(timer);
        }
        setIsVideoAvailable(video)
    }, [isPopupVisible]);

    const videoId = video?.split('/embed/')[1]?.split('?')[0];
    const fallbackThumbnail = url;  
    const thumbnailUrl = videoId 
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` 
        : fallbackThumbnail;

    return (
        <>
            <div className='section-img-div'>
                <div className='inline relative'>
                    {/* <Image
                        src={url} https://img.youtube.com/vi/<VIDEO_ID>/default.jpg
                        alt='services'
                        width={400}
                        height={400}
                        className='object-cover rounded-[30px]  w-full mx-auto cursor-pointer  '
                        onClick={isVideoAvailable ? handleVideoClick : null}
                    /> */}
                     <Image
                        src={`${thumbnailUrl}`}
                        alt='services'
                        width={400}
                        height={400}
                        className='object-cover rounded-[30px]  w-full mx-auto cursor-pointer  '
                        onClick={isVideoAvailable ? handleVideoClick : null}
                    />
                     {video && (
                          <Image
                          src={'/services/videoicon/play-button.svg'}
                          alt='video'
                          width={300}
                          height={300}
                          className='playicon w-[60px] h-[60px] object-cover cursor-pointer'
                          onClick={isVideoAvailable ? handleVideoClick : null}
                      />
                     )}
                  
                </div>
            </div>
            {video && isPopupVisible && (
              <div className={`popup-overlay  ${isTransitioning ? 'visible' : ''}`}>
              <div className="popup-content ">
                  <iframe
                      className='rounded-xl'
                      width="600"
                      height="400"
                      src={video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen></iframe>
                  <button onClick={closePopup} className="close-button">
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
}

export default VideoSection;
