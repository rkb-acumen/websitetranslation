"use client"
import React, { useState, useEffect } from 'react'
import Accordian from './Accordian/Accordian';
import HeadingAnimation from '@/components/Homecomponents/HeadingAnimation/HeadingAnimation';
import "./OurHigh.css"

const OurHighlight = ({
    section_two_title,
    section_two_sub_section
}) => {
    HeadingAnimation("text-our");

   
    // const [openAccordionIds, setOpenAccordionIds] = useState([]);

    // useEffect(() => {
        
    //     const allAccordionIds = section_two_sub_section.map(item => item.section_two_id);
    //     setOpenAccordionIds(allAccordionIds);
    // }, [section_two_sub_section]);

    // const handleToggleAccordion = (id) => {
    //     if (openAccordionIds.includes(id)) {
            
    //         setOpenAccordionIds(openAccordionIds.filter(openId => openId !== id));
    //     } else {
            
    //         setOpenAccordionIds([...openAccordionIds, id]);
    //     }
    // };

    return (
        <div className="bg-[#131313] lg:px-[60px] sm:px-[30px] px-[15px] OurHighlight">
            <div className='text-[#fff] font-30 opacity-80 md:py-[60px] py-[30px]'>
                <h2 className=''>{section_two_title}</h2>
            </div>
            <div className='pb-10'>
                {section_two_sub_section.map((item) => (
                    <Accordian
                        key={item.section_two_id} 
                        id={item.section_two_id}
                        title={item.section_two_sub_title}
                        description={item.section_two_sub_content}
                        // isOpen={openAccordionIds.includes(item.section_two_id)}
                        // toggleAccordion={() => handleToggleAccordion(item.section_two_id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default OurHighlight;

// "use client"
// import React, { useState } from 'react'
// import Accordian from './Accordian/Accordian';
// import HeadingAnimation from '@/components/Homecomponents/HeadingAnimation/HeadingAnimation';
// import "./OurHigh.css"

// const OurHighlight = ({
//     section_two_title,
//     section_two_sub_section
// }) => {
//     HeadingAnimation("text-our");
//     const [openAccordionId, setOpenAccordionId] = useState(1);

//     const handleToggleAccordion = (id) => {
//         if (openAccordionId === id) {
//             setOpenAccordionId(null);
//         } else {
//             setOpenAccordionId(id);
//         }
//     };

//     return (
//         <>
//             <div className="  bg-[#131313] lg:px-[60px] sm:px-[30px] px-[15px] OurHighlight  ">
//                 <div className='text-[#fff] font-30 opacity-80   md:py-[60px] py-[30px]   '>
//                     <h2 className='text-our'>{section_two_title}</h2>
//                 </div>
//                 <div className='pb-10'>
//                     {section_two_sub_section.map((item, index) => (
//                         <Accordian
//                             id={item?.section_two_id}
//                             title={item?.section_two_sub_title}
//                             description={item?.section_two_sub_content}
//                             isOpen={openAccordionId === item?.section_two_id}
//                             toggleAccordion={handleToggleAccordion}
//                         />
//                     ))}

//                 </div>
//             </div>
//         </>
//     )
// }

// export default OurHighlight;



{/* <Accordian
                        id={1}
                        title={"Purpose"}
                        description={`We exist to provide innovative solutions that address unmet needs, delivering solutions that positively impact our customers' bottom line. Our agility, past experiences, and commitment to delivering on time and budget with exceptional quality is a habit.`}
                        isOpen={openAccordionId === 1}
                        toggleAccordion={handleToggleAccordion}
                    />
                    <Accordian
                        id={2}
                        title={`Future Society <br/> Envisioned`}
                        description={`We exist to provide innovative solutions that address unmet needs, delivering solutions that positively impact our customers' bottom line. Our agility, past experiences, and commitment to delivering on time and budget with exceptional quality is a habit.`}
                        isOpen={openAccordionId === 2}
                        toggleAccordion={handleToggleAccordion}
                    />
                    <Accordian
                        id={3}
                        title={"Ultimate Production & <br/> Success Criteria"}
                        description={`We exist to provide innovative solutions that address unmet needs, delivering solutions that positively impact our customers' bottom line. Our agility, past experiences, and commitment to delivering on time and budget with exceptional quality is a habit.`}
                        isOpen={openAccordionId === 3}
                        toggleAccordion={handleToggleAccordion}
                    /> */}
