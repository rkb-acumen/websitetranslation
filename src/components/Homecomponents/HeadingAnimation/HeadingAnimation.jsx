import gsap from 'gsap/all';
import React, { useEffect } from 'react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HeadingAnimation = (className) => {
    useGSAP(() => {

        const elements = document.querySelectorAll(`.${className}`);

        // elements.forEach((element) => {
        //     const splitText = new SplitType(element, { types: 'chars' });
        //     const letters = splitText.chars;

        //     gsap.fromTo(letters,
        //         {
        //             opacity: 0,
        //             y: 20,
        //             scale: 0.8,
        //         },
        //         {
        //             opacity: 1,
        //             y: 0,
        //             scale: 1,
        //             duration: 0.8,
        //             stagger: 0.05,
        //             ease: 'power3.out',
        //             scrollTrigger: {
        //                 trigger: element,
        //                 start: 'top 85%',
        //                 end: 'top 75%',
        //                 toggleActions: 'play none none reverse',
        //                 markers: true, // Set to true if you want to see scroll trigger markers
        //             },
        //         }
        //     );
        // });

        // elements.forEach((element) => {
        //     const splitText = new SplitType(element, { types: 'chars' });
        //     const letters = splitText.chars;

        //     gsap.fromTo(letters,
        //         {
        //             opacity: 0,
        //             x: -100,  
        //             rotation: -15,  
        //         },
        //         {
        //             opacity: 1,
        //             x: 0,   
        //             rotation: 0,   
        //             duration: 0.7,
        //             stagger: 0.08,
        //             ease: 'power4.out',   
        //             scrollTrigger: {
        //                 trigger: element,
        //                 start: 'top 85%',
        //                 end: 'bottom 15%',
        //                 toggleActions: 'play none none reverse',

        //             },
        //         }
        //     );
        // });

        // elements.forEach((element) => {
        //     const splitText = new SplitType(element, { types: 'chars' });
        //     const letters = splitText.chars;

        //     gsap.fromTo(letters,
        //         {
        //             opacity: 0,
        //             y: -20,  // Start above the final position
        //             rotation: -30,  // Start with a backward tilt
        //         },
        //         {
        //             opacity: 1,
        //             y: 0,  // Ends at the original position
        //             rotation: 0,  // Ends with no rotation
        //             duration: 0.9,
        //             stagger: 0.06,
        //             ease: 'sine.inOut',  // Smooth swaying motion
        //             scrollTrigger: {
        //                 trigger: element,
        //                 start: 'top 80%',
        //                 end: 'bottom 20%',
        //                 toggleActions: 'play none none reverse',
        //                 markers: false, // Set to true if you want to see scroll trigger markers
        //             },
        //         }
        //     );
        // });

        // elements.forEach((element) => {
        //     const splitText = new SplitType(element, { types: 'chars' });
        //     const letters = splitText.chars;

        //     gsap.fromTo(letters,
        //         {
        //             opacity: 0,
        //             y: -50,  // Start above the final position
        //             rotationX: 90,  // Start flipped upside down
        //         },
        //         {
        //             opacity: 1,
        //             y: 0,  // Ends at the original position
        //             rotationX: 0,  // Ends with no rotation
        //             duration: 0.8,
        //             stagger: 0.05,
        //             ease: 'elastic.out(1, 0.5)',  // Creates a soft bounce effect
        //             scrollTrigger: {
        //                 trigger: element,
        //                 start: 'top 85%',
        //                 end: 'bottom 15%',
        //                 toggleActions: 'play none none reverse',
        //                 markers: false, // Set to true if you want to see scroll trigger markers
        //             },
        //         }
        //     );
        // });

        // elements.forEach((element) => {
        //     const splitText = new SplitType(element, { types: 'chars' });
        //     const letters = splitText.chars;

        //     gsap.fromTo(letters,
        //         {
        //             opacity: 0,
        //             y: 60,  // Start slightly below the final position
        //             scale: 0.9,  // Start slightly smaller
        //         },
        //         {
        //             opacity: 1,
        //             y: 0,  // Ends at the original position
        //             scale: 1,  // Ends at the original size
        //             duration: 0.6,
        //             stagger: 0.07,
        //             ease: 'circ.out',  // Soft, smooth easing for a gentle effect
        //             scrollTrigger: {
        //                 trigger: element,
        //                 start: 'top 90%',
        //                 end: 'bottom 10%',
        //                 toggleActions: 'play none none reverse',
        //                 markers: false, // Set to true if you want to see scroll trigger markers
        //             },
        //         }
        //     );
        // });

        elements.forEach((element) => {
            const splitText = new SplitType(element, { types: 'chars' });
            const letters = splitText.chars;

            gsap.fromTo(letters,
                {
                    opacity: 0,
                    x: -10,  // Start 30 pixels to the left of the final position
                    filter: 'blur(4px)',  // Start with a slight blur
                },
                {
                    opacity: 1,
                    x: 0,  // End at the original position
                    filter: 'blur(0px)',  // Remove the blur for a sharp appearance
                    duration: 0.6,
                    stagger: 0.05,
                    ease: 'power2.out',  // Smooth easing for a gentle entrance
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 95%',
                        end: 'bottom 70%',
                        toggleActions: 'play none none reverse',
                        
                    },
                }
            );
        });


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [className]);
}

export default HeadingAnimation;