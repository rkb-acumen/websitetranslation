import React, { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Accordian({ id, title, description, isOpen, toggleAccordion }) {
   
    // useEffect(() => {
    //     const element = document.querySelector(`.accordion-content-${id}`);

    //     if (isOpen) {
    //         gsap.fromTo(
    //             element,
    //             { height: 0 },  
    //             {
    //                 height: 'auto',
    //                 duration: 0.4,  
    //                 ease: 'elastic.out(0.5, 0.5)', // Elastic easing for smooth spring effect
    //                 onStart: () => {
    //                     element.style.height = `${element.scrollHeight}px`;
    //                 },
    //                 onComplete: () => {
    //                     element.style.height = 'auto'; // Ensure height is auto after the animation
    //                 },
    //                 clearProps: 'height' // Reset the height property to avoid conflict in the future
    //             }
    //         );
    //     } else {
    //         gsap.to(element, {
    //             height: 0,
    //             duration: 0.4,
    //             ease: 'power2.inOut', // Faster close animation with a smoother ease
    //             onComplete: () => {
    //                 element.style.height = '0'; // Make sure height is 0 after animation
    //             }
    //         });
    //     }
    // }, [isOpen, id]);


    return (
        <div className=' '>
            <div   className={`  lg:h-auto md:rounded-2xl sm:rounded-2xl rounded-xl mx-auto  bg-[#FAF8F7]  text-[ #191919 ]  lg:grid lg:grid-cols-2 items-start lg:py-0 py-5 my-10  px-[15px]  `}>
                <div className='lg:py-12 lg:px-16'>
                    <div className='font-30-bold  ' dangerouslySetInnerHTML={{ __html: title }}></div>
                </div>
                <div className={`bg-[#FAF8F7] text-black `}  >
                    <div className='lg:py-12 py-[20px] xl:w-[85%]   relative  '>
                        <div className='text-justify font-16 ' dangerouslySetInnerHTML={{__html: description }}></div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import Link from 'next/link';

// export default function Accordian({ id, title, description, isOpen, toggleAccordion }) {
   
//     useEffect(() => {
//         const element = document.querySelector(`.accordion-content-${id}`);

//         if (isOpen) {
//             gsap.fromTo(
//                 element,
//                 { height: 0 },  
//                 {
//                     height: 'auto',
//                     duration: 0.4,  
//                     ease: 'elastic.out(0.5, 0.5)', // Elastic easing for smooth spring effect
//                     onStart: () => {
//                         element.style.height = `${element.scrollHeight}px`;
//                     },
//                     onComplete: () => {
//                         element.style.height = 'auto'; // Ensure height is auto after the animation
//                     },
//                     clearProps: 'height' // Reset the height property to avoid conflict in the future
//                 }
//             );
//         } else {
//             gsap.to(element, {
//                 height: 0,
//                 duration: 0.4,
//                 ease: 'power2.inOut', // Faster close animation with a smoother ease
//                 onComplete: () => {
//                     element.style.height = '0'; // Make sure height is 0 after animation
//                 }
//             });
//         }
//     }, [isOpen, id]);


//     return (
//         <div className=' '>
//             <div onClick={() => toggleAccordion(id)} className={`  lg:h-auto md:rounded-2xl sm:rounded-2xl rounded-xl mx-auto ${isOpen ? 'bg-[#fff]' : 'bg-[#191919]'} text-[${isOpen ? '#191919' : '#fff'}] ${isOpen ? '' : ' hover:bg-[#292929]'} lg:grid lg:grid-cols-2 items-start lg:py-0 py-5 my-10  px-[15px] cursor-pointer`}>
//                 <div className='lg:py-12 lg:px-16'>
//                     <div className='font-30-bold  ' dangerouslySetInnerHTML={{ __html: title }}></div>
//                 </div>
//                 <div className={`bg-${isOpen ? '#faf8f7' : '#191919'}   ${isOpen ? "text-black" : "text-[#191919]"} accordion-content accordion-content-${id}  `} style={{ height: 0, overflow: 'hidden' }}>
//                     <div className='lg:pt-12 pt-[20px] xl:w-[85%]   relative  '>
//                         <div className='text-justify font-16 ' dangerouslySetInnerHTML={{__html: description }}></div>
//                         {/* <div className="ss1-btn-div-about relative  top-0 left-0">
//                             <Link href={"/contact"}>
//                                 <button className="ss1-btn-about">Let's Talk!</button>
//                             </Link>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
