import React from 'react'
import '../../styles/FormInput.scss'

const Input = ({id, label, errorMessage, error, ...props}: any) => {
    return (
        <div className='formInput'>
            <label>{label}</label>
            <input {...props}/>
            <span>{error && errorMessage}</span>
        </div>
    )
}

export default Input