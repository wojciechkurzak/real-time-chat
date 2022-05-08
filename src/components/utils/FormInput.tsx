import React from 'react'
import '../../styles/FormInput.scss'

const Input = ({id, label, errorMessage, ...props}: any) => {
    return (
        <div className='formInput'>
            <label>{label}</label>
            <input {...props}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default Input