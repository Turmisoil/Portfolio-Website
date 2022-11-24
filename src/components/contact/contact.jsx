import React, { useRef, useState } from "react";
import { FormInput } from "./formInput";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export const Contact = () => {

    const [isValid, setIsValid] = useState({
        firstName: true,
        lastName: true,
        email: true,
        subject: true,
        message: true
    })

    const form = useRef();
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const emailInput = useRef();
    const subjectInput = useRef();
    const messageInput = useRef();

    const validateInput = async input => {
        const regex = /^[a-zA-Z\. ]*$/;
        if(regex.test(input)){
            return true;
        } else {
            return false;
        }
    }

    const validateEmail = async email => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex.test(email)){
            return false
        } else {
            return true
        }
    }

    const validateMessage = async message => {
        const regex = /^[A-Za-z0-9 .'!,@$#_\n]*$/;
        if(!regex.test(message)){
            return false
        } else {
            return true
        }
    }

    const notifySending = message => toast.loading(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "light",
    })

    const notifySuccess = (message) => toast.success(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const sendEmail = async(e) => {
       
        //PREVENT AUTO REFRESH
        e.preventDefault();

        //VALIDATE INPUT FIELDS
        const firstName = await validateInput(firstNameInput.current.value);
        const lastName = await validateInput(lastNameInput.current.value);
        const email = await validateEmail(emailInput.current.value);
        const subject = await validateInput(subjectInput.current.value);
        const message = await validateMessage(messageInput.current.value);

        if(!firstName){
            firstNameInput.current.value = '';
            return setIsValid(prev => ({...prev, firstName: false}))
        } else {
            setIsValid(prev => ({...prev, firstName:true}))
        }

        if(!lastName){
            lastNameInput.current.value = '';
            return setIsValid(prev => ({...prev, lastName: false}))
        } else {
            setIsValid(prev => ({...prev, lastName:true}))
        }

        if(!email){
            emailInput.current.value = '';
            return setIsValid(prev => ({...prev, email: false}))
        } else {
            setIsValid(prev => ({...prev, email:true}))
        }

        if(!subject){
            subjectInput.current.value = '';
            return setIsValid(prev => ({...prev, subject: false}))
        } else {
            setIsValid(prev => ({...prev, subject:true}))
        }

        if(!message){
            return setIsValid(prev => ({...prev, message: false}))
        } else {
            setIsValid(prev => ({...prev, message:true}))
        }

        notifySending('Your email is being sent.')

        emailjs.sendForm('service_h7jg216', 'template_ilkln6i', form.current, 'gdLagBAvy2dLA1BwL')
        .then(result => {
            toast.dismiss();
            setTimeout(() => {
                notifySuccess('Thank you for the email!');
                firstNameInput.current.value = '';
                lastNameInput.current.value = '';
                emailInput.current.value = '';
                subjectInput.current.value = '';
                messageInput.current.value = '';
            }, 300);
        })
        
    }

    return(
        <motion.section id="contact" initial='hidden' whileInView='visible' viewport={{once: true}} transition={{duration: .6}} variants={{visible: {opacity: 1, transform: 'translateY(0px)'}, hidden: {opacity: 0.01, transform: 'translateY(20px)'}}} className="max-w-[1200px] md:mx-0 mx-[5px]">
            <h2 className="flex font-sans font-semibold items-center relative w-[100%] whitespace-nowrap mt-[10px] mr-[0px] mb-[40px] ml-[0px] text-[black] text-[clamp(20px,_3vw,_26px)] after:content-[''] after:block after:relative after:w-full after:ml-[20px] after:h-[1px] after:mt-[5px] after:bg-[rgba(0,_0,_0,_0.2)]">Contact</h2>
            <p className="font-mono text-[20px] text-[black] mb-[30px]">Have a <span className="text-black">burning</span> question? get in touch!</p>
            <form ref={form} onSubmit={sendEmail}>
                <div className="w-full flex flex-col sm:grid md:grid-cols-2 gap-8 py-8 font-mono">
                    <div>
                        <div className="flex flex-col lg:w-full border-2 border-[black] rounded-md">
                            <FormInput refer={firstNameInput} type="text" name="first_name" placeholder="First name" />
                        </div>
                        <p className={`${isValid.firstName ? 'opacity-0' : 'opacity-1'} mt-[15px] text-red-600 duration-200 ease-in`}>Please only use letters and whitespace</p>
                    </div>
                    <div>
                        <div className="flex flex-col border-2 border-[black] rounded-md">
                            <FormInput refer={lastNameInput} type="text" name="last_name" placeholder="Last name" />
                        </div>
                        <p className={`${isValid.lastName ? 'opacity-0' : 'opacity-1'} mt-[15px] text-red-600 duration-200 ease-in`}>Please only use letters and whitespace</p>
                    </div>
                    <div>
                        <div className="flex flex-col border-2 border-[black] rounded-md">
                            <FormInput refer={emailInput} type="email" name="email" placeholder="Email" />
                        </div>
                        <p className={`${isValid.email ? 'opacity-0' : 'opacity-1'} mt-[15px] text-red-600 duration-200 ease-in`}>Invalid characters</p>
                    </div>
                    <div>
                        <div className="flex flex-col border-2 border-[black] rounded-md">
                            <FormInput refer={subjectInput} type="text" name="subject" placeholder="Subject" />
                        </div>
                        <p className={`${isValid.subject ? 'opacity-0' : 'opacity-1'} mt-[15px] text-red-600 duration-200 ease-in`}>Please only use letters and whitespace</p>
                    </div>
                </div>
                <div>
                    <div className="font-mono flex flex-col border-2 border-[black] rounded-md">
                        <FormInput refer={messageInput} name="message" placeholder="Message..." select={true} />
                    </div>
                    <p className={`${isValid.message ? 'opacity-0' : 'opacity-1'} mt-[15px] font-mono text-red-600 duration-300 ease-in`}>Invalid characters</p>
                </div>
                <button className="font-mono mt-[40px] hover:scale-105 ease-in duration-200 text-[black] bg-transparent border-2 border-solid border-[black] px-8 py-3 rounded-md" type="submit">Submit</button>
            </form>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
        </motion.section>
    )
    
}