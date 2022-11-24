import React from "react"

export const FormInput = ({placeholder, name, select, type, refer}) => {

    const textarea = (
        <>
            <textarea ref={refer} className="appearance-none bg-transparent focus:outline-none p-2 rounded-xl font-test text-[black]" rows='8' name={name} placeholder={placeholder} required></textarea>
        </>
    )

    const input = (
        <>
        <input ref={refer} className="appearance-none bg-transparent border-none focus:outline-none p-2 rounded-[4px] font-test text-[black]" type={type} name={name} placeholder={placeholder} required></input>
        </>
    )

    return(
        <>
        {select ? (textarea) : (input) }
        </>
    )
}