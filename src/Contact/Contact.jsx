"use client"
import React from 'react'
import "./Contact.css";
import Image from 'next/image';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import AcumenForm from './acumenForm';

gsap.registerPlugin(ScrollTrigger);
const Contact = ({
    section_one_title_desktop,
    section_one_title_mobile,
    section_one_content,
    section_one_image,
    section_one_,
    section_email_id,
    section_phone_number,
    language
}) => {
    useGSAP(() => {
        gsap.fromTo(
            ".contact-heading",
            { y: 50, opacity: 0, filter: "blur(10px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }
        );
        gsap.from('.constact-para', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out"
        });

        const elements = document.querySelectorAll(`.contact-head`);
        elements.forEach((element) => {
            const splitText = new SplitType(element, { types: 'chars' });
            const letters = splitText.chars;

            gsap.fromTo(letters,
                {
                    opacity: 0,
                    x: -40,  // Start 30 pixels to the left of the final position
                    filter: 'blur(4px)',  // Start with a slight blur
                },
                {
                    opacity: 1,
                    x: 0,  // End at the original position
                    filter: 'blur(0px)',  // Remove the blur for a sharp appearance
                    duration: 1,
                    stagger: 0.05,
                    ease: 'power2.out',  // Smooth easing for a gentle entrance

                }
            );
        });


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [])
    return (
        <>
            <div className='Contact-BgPattern'> 
                <div className='con-sec1-inner'>
                    <div className='custom-row'>
                        <div className='custom-con-col-7'>
                            <div className='con-head-padd'>
                                <div className='custom-con-head-div'>
                                    <h1 className='font-50 contact-heading conDesktop' dangerouslySetInnerHTML={{ __html: section_one_title_desktop }}></h1>
                                    <h1 className='font-50 contact-heading conMobile' dangerouslySetInnerHTML={{ __html: section_one_title_mobile }}></h1>
                                </div>
                            </div>



                        </div>
                        <div className='custom-con-col-5'>
                            <div className='con-content-padd'>
                                <p className='constact-para'>{section_one_content}</p>
                            </div>
                        </div>
                        <div className='custom-con-col-padd'>

                        </div>
                    </div>

                    <div className='custom-row'>
                        <div className='custom-con-img-col'>
                            <div className='con-img-div'>
                                <Image width={300} height={300} src={section_one_image?.url} />
                            </div>

                        </div>
                        <div className='custom-con-address-col'>
                            <div className='custom-con-address'>
                                <p className='font-14'><span className='con-dot-gradiant'></span><span className='con-dot-gradiant con-dot-rightmargin'></span>Address</p>
                                <div className='con-address-div'>
                                    <p className='font-14'>{section_one_}</p>
                                    <a className='get-direction'>Get direction</a>
                                </div>
                            </div>
                            <div className='custom-con-email'>
                                <p className='font-14'><span className='con-dot-gradiant'></span><span className='con-dot-gradiant con-dot-rightmargin'></span>Email</p>
                                <div className='con-address-div'>
                                    <p className='font-14 text-lowercase'>{section_email_id}</p>

                                </div>
                            </div>
                            <div className='custom-con-phone'>
                                <p className='font-14'><span className='con-dot-gradiant'></span><span className='con-dot-gradiant con-dot-rightmargin'></span>Phone</p>
                                <div className='con-address-div'>
                                    <p className='font-14'>{section_phone_number}</p>

                                </div>
                            </div>

                        </div>
                        <div className='custom-con-form-col'>
                            <div className='con-form-title'>
                                <p className='font-14'><span className='con-dot-gradiant'></span><span className='con-dot-gradiant con-dot-rightmargin'></span>Contact Form</p>
                            </div>
                           
                            <AcumenForm language={language}/>
                        </div>
                        <div className='custom-con-col-padd'>

                        </div>



                    </div>
                </div> 
            </div>
        </>
    )
}

export default Contact
