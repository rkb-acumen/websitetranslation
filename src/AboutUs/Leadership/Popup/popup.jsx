"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import './pop.css';

const Popup = ({ open, onclose, section_three_leaders }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            const lenis = new Lenis({
                lerp: 0.1,
                smooth: true,
                direction: 'vertical',
                wrapper: contentRef.current,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
            return () => {
                lenis.destroy();
            };
        }
    }, []);

    return (
        <>
            <div className={`md:flex hidden w-full cpopup-wrapper ${open ? "" : "cpop-close"}`} >
                <div className='overlayclass w-[50vw] bg-transparent' onClick={onclose}></div>
                <div className='w-[50vw] overflow-y-auto' ref={contentRef}>
                    <div className="cpopup-clr">
                        <div className="bg-white p-5 rounded-2xl relative" >
                            <div className="absolute left-4 cursor-pointer" onClick={onclose}>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1576_1139)">
                                        <path
                                            d="M13.7214 12.0005L12.001 10.2801L2.0655 0.344585C1.59239 -0.128533 0.818191 -0.128533 0.345073 0.344585C-0.128045 0.817703 -0.128045 1.5919 0.345073 2.06502L10.2806 12.0005L0.345073 21.936C-0.128045 22.4091 -0.128045 23.1833 0.345073 23.6564C0.818191 24.1295 1.59239 24.1295 2.0655 23.6564L12.001 13.7209L21.9365 23.6564C22.4096 24.1295 23.1838 24.1295 23.6569 23.6564C24.13 23.1833 24.13 22.4091 23.6569 21.936L13.7214 12.0005Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M23.6571 2.06453C24.1302 1.59141 24.1302 0.817215 23.6571 0.344097C23.184 -0.129022 22.4098 -0.129022 21.9366 0.344097L12.8184 9.46238L14.5388 11.1828L23.6571 2.06453Z"
                                            fill="black"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1576_1139">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                {section_three_leaders.slice(0, 1).map((leader, index) => (
                                    <React.Fragment key={index}>
                                        <div className='pt-6'></div>
                                        <div>
                                            <p className='text-[22px] text-center py-2'>
                                                {leader?.leader_name}{' '}
                                                <a
                                                    href={leader?.leader_linked_in_url}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='social-icon-link'
                                                >
                                                    <Image
                                                        width={100}
                                                        height={100}
                                                        className='leadership-social-icon'
                                                        src='/Missionvision/linkedin-icon.svg'
                                                        alt='LinkedIn'
                                                    />
                                                </a>
                                            </p>
                                        </div>
                                        <Image
                                            width={600}
                                            height={600}
                                            src={leader?.leader_desktop_image?.url}
                                            alt={leader?.leader_name}
                                            className="w-full object-cover rounded-2xl"
                                        />
                                        <div className="text-justify py-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: leader?.leader_description }}></div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
