import React, { useEffect, useState } from "react";
import { IconLogo } from "../logos/iconLogo";
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs'
import './navbar.css'; 


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [firstRender, setFirstRender] = useState(true);

    const scrollToHero = () => {
        document.getElementById('hero').scrollIntoView();
    }

    const scrollToAbout = (aside) => {
        if(aside){
            setIsOpen(false)
            setTimeout(() => {
                document.getElementById('about').scrollIntoView();
            }, 150);
        } else {
            document.getElementById('about').scrollIntoView();
        }
    }

    const scrollToProjects = (aside) => {
        if(aside){
            setIsOpen(false)
            setTimeout(() => {
                document.getElementById('projects').scrollIntoView();
            }, 150);
        } else {
            document.getElementById('projects').scrollIntoView();
        }
    }

    const scrollToContact = (aside) => {
        if(aside){
            setIsOpen(false)
            setTimeout(() => {
                document.getElementById('contact').scrollIntoView();
            }, 150)
        } else {
            document.getElementById('contact').scrollIntoView();
        }
    }

    const variants = {
        open: { opacity: 1, x: 0},
        closed: { opacity: 0, x: '100%'}
    }

    const controlNavbar = () => {
        if(typeof window !== 'undefined'){
            if(window.scrollY > lastScrollY){
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY)
        }
    }

    const controlBlur = () => {
        if(typeof window !== 'undefined'){
            if(window.innerWidth > 768){
                document.getElementById('main').style.filter = ''
                setIsOpen(false)
            }
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        if(firstRender){
            setFirstRender(false)
        }
    }

    useEffect(() => {

        if(isOpen){
            document.getElementById('main').style.filter = 'blur(5px)'
            document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        } else {
            document.getElementById('main').style.filter = ''   
            document.getElementsByTagName('body')[0].style.overflow = ''  
        }

        if(typeof window !== 'undefined'){
            window.addEventListener('scroll', controlNavbar)
            window.addEventListener('resize', controlBlur)
        }

        return() => {
            window.removeEventListener('scroll', controlNavbar)
            window.removeEventListener('resize', controlBlur)
        }

    }, [lastScrollY, isOpen])

    const logo = (
        <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}}  className="logo cursor-pointer" tabIndex={-1}>
            <a onClick={scrollToHero}>
                <IconLogo />
            </a>
        </motion.div>
    )

    const links = (
        <div className="hidden items-center md:flex">
            <ol className="p-0 m-0 list-none flex items-center font-mono">
                <motion.li initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}}  className="my-0 mx-[5px] relative">
                    <a onClick={scrollToAbout} className="cursor-pointer border-b-2 mr-12 transition-[border] border-transparent hover:border-black text-[black] uppercase text-[16px] p-[2px] ease-in duration-300">About</a>
                </motion.li>
                <motion.li initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3, delay: 0.2}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}}  className="my-0 mx-[5px] relative">
                    <a onClick={scrollToProjects} className="cursor-pointer border-b-2 mr-12 transition-[border] border-transparent hover:border-black text-[black] uppercase text-[16px] p-[2px] ease-in duration-300">Projects</a>
                </motion.li>
                <motion.li initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3, delay: 0.4}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}}  className="my-0 mx-[5px] relative">
                    <a onClick={scrollToContact} className="cursor-pointer border-b-2 mr-12 transition-[border] border-transparent hover:border-black text-[black] uppercase text-[16px] p-[2px] ease-in duration-300">Contact</a>
                </motion.li>
                <motion.li initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3, delay: 0.6}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}} >
                    <a href="../../src/assets/resume.pdf" target={'_blank'} className="md:flex gap-[2px] items-center justify-center font-mono rounded-full uppercase w-[120px] h-[120px] transition duration-1000 hover:rotate-[360deg] bg-[#89cff0] border-2 border-black">
                        <p>Resume</p>
                        <BsArrowUpRight />
                    </a>
                </motion.li>
            </ol>
        </div>
    )

    const hamburgerButton = (
        <motion.button initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .3}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(-20px)'}}}  className="flex md:hidden relative z-10 mr-[-15px] p-[15px] border-0 bg-transparent text-inherit" onClick={toggleMenu}>
            <div className="inline-block relative w-[10px] h-[24px] hover:scale-125 duration-300 ease-in">
                <div className="absolute top-[50%] right-0 w-[30px] h-[2px] rounded-[4px] bg-[black] before:content-[''] before:block before:absolute before:left-auto before:right-0 before:w-[120%] before:h-[2px] before:top-[-10px] before:rounded-[4px] before:bg-[black] after:content-[''] after:block after:absolute after:left-auto after:right-0 after:w-[80%] after:h-[2px] after:top-[10px] after:rounded-[4px] after:bg-[black]"></div>
            </div>
        </motion.button>
    )

    const sideBar = (
        <motion.aside animate={isOpen ? 'open' : 'closed'} variants={variants} className={`${firstRender ? 'hidden' : 'flex'} shadow-[-10px_0px_30px_-15px_#020c1bb3] flex-col justify-center items-center right-0 fixed top-0 bottom-0 py-[50px] px-[10px] w-[min(75vw,_400px)] h-[100vh] outline-[0] bg-[white] z-[9] duration-100`}>
            <button className="hover:scale-125 duration-300 ease-in flex cursor-pointer absolute top-[25px] right-[25px] z-10 mr-[-15px] p-[15px] border-0 bg-transparent text-inherit" onClick={toggleMenu}>
                <div className="inline-block relative w-[10px] h-[24px]">
                    <div className="absolute top-[38px] rotate-[225deg] right-0 w-[30px] h-[2px] rounded-[4px] bg-[black] before:content-[''] before:block before:absolute before:left-auto before:right-0 before:w-[100%] before:h-[2px] before:top-[0px] before:rounded-[4px] before:bg-[black] before:opacity-[0] after:content-[''] after:block after:absolute after:left-auto after:right-0 after:w-[100%] after:h-[2px] after:top-[0px] after:-rotate-90 after:rounded-[4px] after:bg-[black]"></div>
                </div>
            </button>
            <nav className="w-[100%] flex flex-col text-center justify-between items-center mt-[60px]">
                <ol className="font-mono p-0 m-0 list-none w-[100%] text-[black] text-[18px]">
                    <li className="cursor-pointer relative mx-auto mt-0 mb-[20px] list-none w-[100%]">
                        <a onClick={() => scrollToAbout(true)} className="inline-block pt-[3px] px-[20px] pb-[20px] w-[100%] no-underline relative hover:text-[#89cff0] hover:scale-110 ease-in duration-200">About</a>
                    </li>
                    <li className="cursor-pointer relative mx-auto mt-0 mb-[20px] list-none w-[100%]">
                        <a onClick={() => scrollToProjects(true)} className="inline-block pt-[3px] px-[20px] pb-[20px] w-[100%] no-underline relative hover:text-[#89cff0] hover:scale-110 ease-in duration-200">Projects</a>
                    </li>
                    <li className="cursor-pointer relative mx-auto mt-0 mb-[20px] list-none w-[100%]">
                        <a onClick={() => scrollToContact(true)} className="inline-block pt-[3px] px-[20px] pb-[20px] w-[100%] no-underline relative hover:text-[#89cff0] hover:scale-110 ease-in duration-200">Contact</a>
                    </li>
                </ol>
                <a href="" className="gap-[2px] flex items-center justify-center font-mono rounded-full uppercase w-[110px] h-[110px] transition duration-1000 hover:rotate-[360deg] bg-[#89cff0] border-2 border-black">
                    <p>Resume</p>
                    <BsArrowUpRight />
                </a>
                <div className="flex relative bottom-[-100px] items-center justify-between md:gap-4 mt-[20px]">
                    <a className="flex justify-start items-start p-[10px] pt-[12px] relative" href="https://github.com/Turmisoil" target={'_blank'}>
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px] align-middle fill-none hover:stroke-[#89cff0] hover:-translate-y-1 hover:cursor-pointer ease-in duration-200">
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a className="inline-block relative p-[10px]" href="https://www.linkedin.com/in/liam-roy-phillips" target={'_blank'} >
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px] align-middle fill-none hover:stroke-[#89cff0] hover:-translate-y-1 hover:cursor-pointer ease-in duration-200">
                            <title>LinkedIn</title>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
            </nav>
        </motion.aside>
    )

    return (
        <header className={`${show ? 'bg-[hsla(0,_0%,_100%,_0.9)]' : 'bg-transparent'} flex justify-between items-center fixed top-0 z-10 py-0 sm:px-[50px] px-[25px] w-screen h-[150px] filter-none pointer-events-auto select-auto`}>
            <nav className={`flex justify-between items-center relative w-[100%] font-test [counter-reset:item_0] z-12 ease-in duration-100 ${show ? 'visible' : 'hide'}`}>
                {logo}
                {links}
                {isOpen ? null : hamburgerButton}
            </nav>
                {sideBar}
        </header>
    )
}

export default Navbar