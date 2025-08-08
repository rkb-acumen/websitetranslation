"use client"
import React from 'react';
import Lenis from 'lenis';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Scroll = () => {
    useGSAP(() => {
        const lenis = new Lenis()

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 900)
        })

        gsap.ticker.lagSmoothing(0);

        window.scrollTo(0, 0);
    },[])
    return (
        <>


        </>
    )
}

export default Scroll;