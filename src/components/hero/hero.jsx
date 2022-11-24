import React from "react";
import { motion } from 'framer-motion';
import './hero.css'

export const Hero = () => {

    return (
        <section id="hero" className="flex flex-col justify-center items-start min-h-screen sm:pb-[0px] pb-[10vh] sm:mt-0 mt-[50px] max-w-[1200px] relative top-[-50px]">
            <motion.h1 initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3, delay: 0.8}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}}  className="mt-[0px] mr-[0px] mb-[15px] font-light ml-[0px] font-mono text-[clamp(14px,_5vw,_16px)] text-[#1e1e1e]">Hi, my name is</motion.h1>
            <motion.h2 initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3, delay: 0.9}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}}  className="text-[black] font-bold font-sans text-[clamp(40px,_8vw,_140px)] leading-[1.1]">Liam Phillips.</motion.h2>
            <motion.h3 initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3, delay: 1}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}}  className="text-[#2E3134] font-sans mt-[10px] text-[clamp(30px,_5vw,_60px)] leading-[0.9]">I build web applications.</motion.h3>
            <motion.p initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3, delay: 1.1}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}}  className="text-[black] font-extralight font-mono text-[clamp(12px,_2vw,_16px)] mt-[18px] mx-[0px] max-w-[540px] leading-[1.7]">I'm a <span className="text-[black]">fullstack </span>developer specializing in crafting <span className="text-[black]">bespoke digital experiences</span>. I strive to provide value through my passion for programming.</motion.p>
            <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3, delay: 1.5}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}} className="w-[100%] flex flex-col justify-center items-center absolute bottom-[0px] gap-2">
                <div className="text-[black] font-mono text-[16px]">Scroll</div>
                <svg stroke="black" fill="black" strokeWidth="0" viewBox="0 0 16 16" className="text-lg animate-bounce" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
            </motion.div>
        </section>
    )
}