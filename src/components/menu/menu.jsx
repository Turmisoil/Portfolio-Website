import React, { useEffect, useState } from "react";

export const Menu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    const sideBar = (
        <aside className={`shadow-[-10px_0px_30px_-15px_#020c1bb3] flex justify-center items-center fixed top-0 bottom-0 right-0 py-[50px] px-[10px] w-[min(75vw,_400px)] h-[100vh] outline-[0] bg-[#112240] z-[9] ${isOpen ? 'visible' : 'invisible'} `}>
            <nav className="w-[100%] flex flex-col text-center justify-between items-center">
                <ol className="font-test p-0 m-0 list-none w-[100%] text-[#ccd6f6] text-[18px]">
                    <li className="relative mx-auto mt-0 mb-[20px] list-none w-[100%] before:block before:mb-[5px] before:text-[14px] before:content-['01''.'] before:text-[#64ffda] hover:text-[#64ffda]">
                        <a className="inline-block pt-[3px] px-[20px] pb-[20px] w-[100%] no-underline relative" href="">Home</a>
                    </li>
                    <li className="relative mx-auto mt-0 mb-[20px] list-none w-[100%] before:block before:mb-[5px] before:text-[14px] before:content-['02''.'] before:text-[#64ffda] hover:text-[#64ffda]">
                        <a className="inline-block pt-[3px] px-[20px] pb-[20px] w-[100%] no-underline relative"  href="">About</a>
                    </li>
                    <li className="relative mx-auto mt-0 mb-[20px] list-none w-[100%] before:block before:mb-[5px] before:text-[14px] before:content-['03''.'] before:text-[#64ffda] hover:text-[#64ffda]">
                        <a className="inline-block pt-[3px] px-[20px] pb-[20px] w-[100%] no-underline relative"  href="">Projects</a>
                    </li>
                    <li className="relative mx-auto mt-0 mb-[20px] list-none w-[100%] before:block before:mb-[5px] before:text-[14px] before:content-['04''.'] before:text-[#64ffda] hover:text-[#64ffda]">
                        <a className="inline-block pt-[3px] px-[20px] pb-[20px] w-[100%] no-underline relative"  href="">Contact</a>
                    </li>
                </ol>
                <a href="" className="text-[#64ffda] bg-transparent border border-solid border-[#64ffda] rounded-[4px] leading-[1] text-[13px] cursor-pointer py-[18px] px-[50px] mt-[10%] mb-[auto] mx-0 hover:outline-none hover:bg-[#64ffda1a]">
                    Resume
                </a>
            </nav>
        </aside>
    )

    return(
        <>
            <div className="block md:hidden">
                {sideBar}
            </div>
        </>
    )
}