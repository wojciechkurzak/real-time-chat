import React from 'react'

const Input = ({id, label, errorMessage, ...props}: any) => {
    return (
        <>
            <span>{errorMessage}</span>
            <label>{label}</label>
            <input {...props}/>
        </>
    )
}

export default Input