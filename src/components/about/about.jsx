import React, { useEffect } from "react";
import { motion } from "framer-motion";

export const About = () => {

    const skills = ['JavaScript (ES6+)', 'Jquery', 'PHP', 'MySQL', 'React', 'Bootstrap'];

    return (
        <section id="about" className="max-w-[1200px] md:mx-0 mx-[5px]">
            <motion.h2 initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .6}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(20px)'}}} className="flex font-sans font-bold items-center relative w-[100%] whitespace-nowrap mt-[10px] mr-[0px] mb-[40px] ml-[0px] text-[black] text-[clamp(20px,_3vw,_26px)] after:content-[''] after:block after:relative after:w-full after:ml-[20px] after:h-[1px] after:mt-[2px] after:bg-[rgba(0,_0,_0,_0.2)]">About Me</motion.h2>
            <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .6}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(20px)'}}} className="xl:grid flex flex-col grid-cols-[3fr_2fr] gap-[50px]">
                <div className="font-mono">
                    <div className="text-left text-[clamp(12px,_1vw,_22px)]">
                        <p className="mt-[0px] mr-[0px] mb-[15px] ml-[0px] leading-[1.7] text-[black]">
                            Hello! My name is Liam and I love to build applications for the web. My
                            interest in programming started back in 2008 when I decided to try creating a private server
                            for my favourite online game Runescape — it turns out object-oriented programming in Java is hard!
                        </p>
                        <p className="mt-[0px] mr-[0px] mb-[15px] ml-[0px] leading-[1.7]  text-[black]">
                            Fast-forward to today, and I’ve had the privilege of completing two Master's 
                            degrees, one in chemistry and the other in molecular biology. Although these accomplishments wouldn't
                            be considered part of the coders' conventional career path, they allowed me to develop an appreciation for hard work 
                            and the belief that if you are passionate about something anything is possible.
                        </p>
                        <p className="mt-[0px] mr-[0px] mb-[15px] ml-[0px] leading-[1.7]  text-[black]">
                           Now, having recently comepleted a six month coding traineeship with ITCareerSwitchUK, I am hoping to
                           bring my newly developed full-stack skillset to a professional environment to work on great projects
                           with even greater people.
                        </p>
                        <p className="mt-[0px] mr-[0px] mb-[15px] ml-[0px] leading-[1.7]  text-[black]">
                            Here are a few technologies I’ve been working with as part of the traineeship:
                        </p>
                    </div>
                    <ul className="grid grid-cols-[repeat(2,_minmax(140px,_240px))] gap-[0_10px] p-0 overflow-hidden list-none text-[black] mt-[20px]">
                        {skills && skills.map((skill, index) => <li className="text-left relative mb-[10px] pl-[20px] text-[clamp(12px,_1vw,_22px)] before:content-['▹'] before:absolute before:left-0 before:top-[2px] before:text-[black] before:text-[20px] before:leading-[12px]" key={index}>{skill}</li>)}
                    </ul>
                </div>
                <div className="relative flex items-start mr-auto mb-0 ml-auto w-[fit-content]">
                    <img src="../../src/assets/images/headshot.png" alt="headshot" className="border-2 border-black rounded-[6px] min-w-[100px] w-[600px] xl:min-w-[450px] 2xl:min-w-[600px] shadow-2xl xl:mb-[100px]" />
                </div>
            </motion.div>
        </section>
    )
}