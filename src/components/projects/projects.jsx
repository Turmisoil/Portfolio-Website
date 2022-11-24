import React from "react";
import {motion} from 'framer-motion';
import {GrMysql} from 'react-icons/gr'
import {SiFramer, SiJavascript, SiJquery, SiLeaflet, SiReact, SiTailwindcss, SiVite} from 'react-icons/si'
import {FaBootstrap, FaPhp} from 'react-icons/fa'
import {FiFramer} from 'react-icons/fi'
import {TbBrandTailwind} from 'react-icons/tb'

export const Projects = () => {

    return (
        <section id="projects" className="max-w-[1200px] md:mx-0 mx-[5px]">
            <motion.h2 initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .6}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(20px)'}}} className="mb-[60px] flex font-sans font-semibold items-center relative w-full whitespace-nowrap m-[10px_0px_40px_0px] text-[black] text-[clamp(20px,_3vw,_26px)] after:content-[''] after:block after:relative after:w-full after:top-[1px] after:ml-[20px] after:h-[1px] after:mt-[2px] after:bg-[rgba(0,_0,_0,_0.2)]">Projects</motion.h2>
            <div className="flex flex-col justify-between items-center gap-[100px] xl:gap-[160px]">
                <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .6}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(20px)'}}} id="project-1" className="w-[100%] flex flex-col justify-between items-center gap-2 xl:gap-0 xl:grid grid-cols-10 grid-rows-[repeat(12,_minmax(0,_1fr))]">
                    <div id="company-directory-image" className="w-[fit-content] [box-shadow:0_10px_30px_-15px_rgba(2,_12,_27,_0.7)] xl:row-span-full xl:col-start-1 xl:col-span-6 xl:self-center hover:scale-105 ease-in duration-200">
                        <a href="https://liamrphillips.co.uk/Companydirectory" target={'_blank'}>
                            <img className="cursor-pointer object-cover min-w-[100px] rounded-md border-2 border-black" src="../../src/assets/images/companydirectory.png" alt="database table" />
                        </a>
                    </div>
                    <div id="company-directory-feature" className="xl:row-start-1 xl:row-span-2 xl:self-center xl:col-span-6 xl:col-end-12">
                        <div className="flex mt-[20px] xl:mt-0 xl:justify-end text-[black] font-mono text-[14px]">
                            <p>Fullstack Application</p>
                        </div>
                    </div>
                    <div id="company-directory-title" className="xl:row-start-2 xl:row-span-2 xl:self-end xl:col-span-6 xl:col-end-12">
                        <div className="flex mb-[10px] items-center xl:mb-0 xl:justify-end text-[black] font-sans font-semibold text-[clamp(24px,_5vw,_28px)]">
                            <p className="text-center xl:text-left">Company Directory</p>
                        </div>
                    </div>
                    <div id="company-directory-description" className="xl:row-span-full xl:col-span-7 xl:col-end-12 xl:self-center" >
                        <div className="z-[100] mb-[20px] xl:mb-0 border-2 border-black bg-[white] rounded-[4px] shadow-xl text-[black] font-sans text-[14px] p-[25px] leading-[1.7]">
                            <p className="font-mono text-center xl:text-left">
                                A <span className="text-[black]">"mobile first"</span> web application for managing company information. <span className="text-[black]">Create</span>, <span className="text-[black]">read</span>, <span className="text-[black]" >update</span> and <span className="text-[black]" >delete</span> employee data alongside, your business's <span className="text-[blu]">departments </span> 
                                and the <span className="text-[black]">locations</span> they are based at.
                            </p>
                        </div>
                    </div>
                    <div id="company-directory-tech" className="xl:row-start-[10] xl:row-span-2 xl:self-start xl:col-span-6 xl:col-end-12">
                        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center mb-[20px] xl:mb-0 xl:justify-end gap-[25px] font-mono text-[13px] text-[black]">
                                <a href="https://jquery.com" target={'_blank'}>
                                    <SiJquery className="w-[30px] h-[30px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                                <a href="https://php.net" target={'_blank'}>
                                    <FaPhp className="w-[35px] h-[35px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                                <a href="https://mysql.com" target={'_blank'}>
                                    <GrMysql className="w-[30px] h-[30px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                                <a href="https://getbootstrap.com" target={'_blank'}>
                                    <FaBootstrap className="w-[35px] h-[35px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                                <a href="https://javascript.com/" target={'_blank'}>
                                    <SiJavascript className="w-[30px] h-[30px] rounded-md cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                        </div>
                    </div>
                    <div id="company-directory-links" className="xl:row-start-[11] xl:row-span-2 xl:self-end xl:col-span-6 xl:col-end-12">
                        <div className="flex justify-center xl:justify-end items-center font-test text-[13px] text-[black]">
                            <a className="flex justify-center items-center p-[10px] pt-[15px] mt-2 relative" href='https://github.com/Turmisoil/LiamPhillips/tree/main/project2-LP' target={'_blank'}>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px] align-middle fill-none hover:text-[#89cff0] hover:scale-125 hover:cursor-pointer ease-in duration-200">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a className="flex justify-center items-center xl:pr-0 p-[10px] pt-[12px] mt-[8px] relative" href="https://liamrphillips.co.uk/CompanyDirectory" target={'_blank'}>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[32px] h-[32px] align-middle fill-none hover:text-[#89cff0] hover:scale-125 hover:cursor-pointer ease-in duration-200">
                                    <title>External Link</title>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .6}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(20px)'}}} id="project-2" className="w-[100%] flex flex-col justify-between items-center gap-2 xl:gap-0 xl:grid grid-cols-10 grid-rows-[repeat(12,_minmax(0,_1fr))]">
                    <div id="gazetter-image" className="w-[fit-content] [box-shadow:0_10px_30px_-15px_rgba(2,_12,_27,_0.7)] xl:row-span-full xl:col-span-7 xl:col-end-12 xl:self-center hover:scale-105 ease-in duration-200">
                        <a href="https://liamrphillips.co.uk" target={'_blank'}>
                            <img className="cursor-pointer object-cover min-w-[100px] rounded-md border-2 border-black" src="../../src/assets/images/gazetter.png" alt="" />
                        </a>
                    </div>
                    <div id="gazetter-feature" className="xl:row-start-1 xl:row-span-2 xl:self-end xl:col-start-1 xl:col-span-6" >
                        <div className="flex mt-[20px] xl:mt-0 xl:justify-start text-[black] font-mono text-[14px]">
                            <p>Frontend Application</p>
                        </div>
                    </div>
                    <div id="gazetter-title" className="xl:row-start-3 xl:row-span-2 xl:self-center xl:col-start-1 xl:col-span-6" >
                        <div className="flex mb-[10px] xl:mt-0 xl:justify-start text-[black] font-sans font-semibold text-[clamp(24px,_5vw,_28px)]">
                            <p>Gazetteer</p>
                        </div>
                    </div>
                    <div id="gazetter-description" className="xl:row-span-full xl:col-span-7 xl:col-end-7 xl:self-center">
                        <div className="z-[100] mb-[20px] xl:mb-0 bg-[white] border-2 border-black rounded-[4px] shadow-xl text-[black] font-mono text-[14px] p-[25px] leading-[1.7]">
                            <p className="text-center xl:text-left">
                                An interactive map application that allows <span className="text-[black]">exploration</span> of the globe. Select from a wide range of <span className="text-[black]">countries</span> and instantly see the main <span className="text-[black]">cities</span>, recent <span className="text-[black]">earthquakes</span> and other
                                useful information with just the click of a button.
                            </p>
                        </div>
                    </div>
                    <div id="gazetter-tech" className="xl:row-start-[10] xl:row-span-1 xl:self-start xl:col-span-7 xl:col-end-7">
                        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center mb-[20px] xl:mb-0 xl:justify-start gap-[25px] font-mono text-[13px] text-[black]">
                            <a href="https://leafletjs.com/" target={'_blank'}>
                                <SiLeaflet className="w-[30px] h-[30px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                            </a>
                            <a href="https://jquery.com" target={'_blank'}>
                                    <SiJquery className="w-[30px] h-[30px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                            </a>
                            <a href="https://getbootstrap.com" target={'_blank'}>
                                <FaBootstrap className="w-[35px] h-[35px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                            </a>
                            <a href="https://javascript.com/" target={'_blank'}>
                                <SiJavascript className="w-[30px] h-[30px] rounded-md cursor-pointer hover:scale-125 duration-200 ease-in" />
                            </a>
                        </div>
                    </div>
                    <div id="gazetter-links" className="row-start-[11] row-span-2 self-center col-span-7 col-end-7">
                        <div className="flex justify-start font-mono text-[13px] text-[black]">
                            <a className="flex justify-start items-start xl:pl-0 p-[10px] pt-[12px] relative" href="https://github.com/Turmisoil/LiamPhillips/tree/main/project1-noclass" target={'_blank'}>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px] align-middle fill-none hover:text-[#89cff0] hover:scale-125 hover:cursor-pointer ease-in duration-200">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a className="flex justify-start items-start p-[10px] relative" href="https://liamrphillips.co.uk/Gazetteer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[32px] h-[32px] align-middle fill-none hover:text-[#89cff0] hover:scale-125 hover:cursor-pointer ease-in duration-200">
                                    <title>External Link</title>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>   
                <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .6}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(20px)'}}} id="project-1" className="w-[100%] flex flex-col justify-between items-center gap-2 xl:gap-0 xl:grid grid-cols-10 grid-rows-[repeat(12,_minmax(0,_1fr))]">
                    <div id="company-directory-image" className="w-[fit-content] [box-shadow:0_10px_30px_-15px_rgba(2,_12,_27,_0.7)] xl:row-span-full xl:col-start-1 xl:col-span-6 xl:self-center hover:scale-105 ease-in duration-200">
                        <a href="https://liamrphillips.co.uk/Companydirectory" target={'_blank'}>
                            <img className="cursor-pointer object-cover min-w-[100px] rounded-md border-2 border-black" src="../../src/assets/images/portfolio.png" alt="database table" />
                        </a>
                    </div>
                    <div id="company-directory-feature" className="xl:row-start-1 xl:row-span-2 xl:self-start xl:col-span-6 xl:col-end-12">
                        <div className="flex mt-[20px] xl:mt-0 xl:justify-end text-[black] font-mono text-[14px]">
                            <p>Frontend Application</p>
                        </div>
                    </div>
                    <div id="company-directory-title" className="xl:row-start-2 xl:row-span-2 xl:self-center xl:col-span-6 xl:col-end-12">
                        <div className="flex mb-[10px] items-center xl:mb-0 xl:justify-end text-[black] font-sans font-semibold text-[clamp(24px,_5vw,_28px)]">
                            <p className="text-center xl:text-left">Portfolio Wesbite</p>
                        </div>
                    </div>
                    <div id="company-directory-description" className="xl:row-span-full xl:col-span-7 xl:col-end-12 xl:self-center" >
                        <div className="z-[100] mb-[20px] xl:mb-0 bg-[white] border-black border-2 rounded-[4px] shadow-xl text-[black] font-sans text-[14px] p-[25px] leading-[1.7]">
                            <p className="font-mono text-center xl:text-left">
                                A fully responsive personal portfolio website utilising modern javascript frameworks for animation and styling.
                            </p>
                        </div>
                    </div>
                    <div id="company-directory-tech" className="xl:row-start-[10] xl:row-span-2 xl:self-start xl:col-span-6 xl:col-end-12">
                        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center mb-[20px] xl:mb-0 xl:justify-end gap-[25px] font-mono text-[13px] text-[black]">
                                <a href="https://reactjs.org" target={'_blank'}>
                                    <SiReact className="w-[30px] h-[30px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                                <a href="https://tailwindcss.com" target={'_blank'}>
                                    <TbBrandTailwind className="w-[35px] h-[35px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                                <a href="https://framer.com" target={'_blank'}>
                                    <FiFramer className="w-[30px] h-[30px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                                <a href="https://vitejs.dev" target={'_blank'}>
                                    <SiVite className="w-[30px] h-[30px] cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                                <a href="https://javascript.com/" target={'_blank'}>
                                    <SiJavascript className="w-[30px] h-[30px] rounded-md cursor-pointer hover:scale-125 duration-200 ease-in" />
                                </a>
                        </div>
                    </div>
                    <div id="company-directory-links" className="xl:row-start-[11] xl:row-span-2 xl:self-center xl:col-span-6 xl:col-end-12 mt-4">
                        <div className="flex justify-center xl:justify-end items-center text-[13px] text-[black]">
                            <a className="flex justify-center items-center relative" href='https://github.com/Turmisoil/LiamPhillips/tree/main/project2-LP' target={'_blank'}>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px] align-middle fill-none hover:text-[#89cff0] hover:scale-125 hover:cursor-pointer ease-in duration-200">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>           
            </div>
        </section>
    )
}