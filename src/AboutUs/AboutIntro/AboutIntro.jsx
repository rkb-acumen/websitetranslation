"use client"
import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';


gsap.registerPlugin(ScrollTrigger);
function AboutIntro({
    section_one_title,
    section_one_image,
    section_one_para	
}) {
    useGSAP(() => {
        gsap.fromTo(
            ".about-heading",
            { y: 50, opacity: 0, filter: "blur(10px)" },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.5,
                ease: "power3.out",
            }
        );
        // const image = document.querySelector('.animated-image');


        // gsap.set(image, {
        //     width: '80%',
        //     marginLeft: "auto",
        //     marginRight: "auto",
        //     marginTop: '30px',
        //     margin: '0 auto',
        //     borderRadius: "30px"
        // });


        // gsap.to(image, {
        //     width: '100%',
        //     marginTop: 0,
        //     duration: 1,
        //     ease: 'power2.inOut',

        // });
        const elements = document.querySelectorAll('.animated-paragraph');

        elements.forEach((element) => {

            const splitText = new SplitType(element, { types: 'words' });
            const lines = splitText.words;


            gsap.fromTo(lines, {
                opacity: 0.5,
                fontWeight: 'normal',
            }, {
                opacity: 1,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    scrub: true,

                },
                stagger: 0.2,
                duration: 0.5,
                ease: 'power2.inOut',
            });
        });

    }, [])
    return (
        <div className='px-[15px] md:px-[60px]  '> 
        {/* pb-[50px] md:pb-[100px] */}
            <div className='border-t-[1px] pt-[40px]'>
                <h1 className='font-50 color-black about-heading'>{section_one_title}</h1>
                <div className='pt-[30px] rounded-[30px] animated-image'>
                    <Image
                        src={section_one_image?.url}
                        width={1000}
                        height={1000}
                        priority
                        className='w-[100%] object-cover h-[314px] md:h-[550px] rounded-[30px] object-top '
                    />
                </div>
                <div>
                    <div className='py-[80px] text-justify font-[300] text-[18px] md:leading-[2rem] leading-[1.5rem] animated-paragraph' dangerouslySetInnerHTML={{__html: section_one_para}}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro
