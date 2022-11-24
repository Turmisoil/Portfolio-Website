import React from "react";
import { Hero } from "../hero/hero";
import { About } from "../about/about";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";

export const Main = () => {


    return (
        <main id="main" className="w-full min-h-screen flex flex-col justify-between sm:px-[50px] md:px-[100px] lg:px-[200px] px-[50px]">
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    )
}