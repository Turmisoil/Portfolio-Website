import React from "react";
import {motion} from 'framer-motion';

export const SideContact = () => {

    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3, delay: 1.5}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(20px)'}}} className="w-[40px] text-[#a8b2d1] hidden md:block md:fixed bottom-0 md:left-[20px] right-auto lg:left-[40px] z-40">
            <ul className="flex flex-col items-center m-0 p-0 list-none after:content-[''] after:block after:w-[2px] after:h-[130px] after:mx-auto after:my-0 after:bg-[black]">
                <li className="list-item">
                    <a className="inline-block relative p-[10px] hover:-translate-y-1 hover:cursor-pointer ease-in duration-200" href="https://github.com/Turmisoil" target={'_blank'} >
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-[#89cff0] duration-200 ease-in w-[30px] h-[30px] align-middle fill-none">
                        <title>GitHub</title>
                        <path className="" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a className="inline-block relative p-[10px] hover:-translate-y-1 hover:cursor-pointer ease-in duration-200" href="https://www.linkedin.com/in/liam-roy-phillips" target={'_blank'} >
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-[#89cff0] duration-200 ease-in w-[30px] h-[30px] align-middle fill-none">
                            <title>LinkedIn</title>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </li>
            </ul>
        </motion.div>
    )
}