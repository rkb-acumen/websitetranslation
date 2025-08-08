"use client"
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import "./Clients.css";
import HeadingAnimation from '../HeadingAnimation/HeadingAnimation';

const Clients = ({
    our_partners_title,
    our_parners_logos
}) => {
    HeadingAnimation("text-animation");
    return (
        <>
        <div className='bg-change'>
            <div className="Clients_Marquee">
                <div className=" client-inner-div">
                    <div className='clients-title-div'>
                        {/*<h2 className='font-40 text-[#000000] opacity-80 text-animation'>{our_partners_title}</h2> */}
                        <h2 className='font-40 text-[#000000] opacity-80'>{our_partners_title}</h2>
                    </div>
                    <Marquee loop={0}>

                        {our_parners_logos.map((logo, index) => (
                            <div key={index} className="mx-4">
                                <div className='client-logo-div'>
                                    <Image
                                        width={100}
                                        height={40}
                                        src={logo?.pay_only_for_utilization_what_you_use_and_for_how_long_updates_support_and_security_included?.url}
                                        alt={`Partner logo ${index + 1}`}
                                    />
                                </div>
                            </div>
                        ))}
 
                    </Marquee>

                </div>
            </div>
            </div>
        </>
    )
}

export default Clients
