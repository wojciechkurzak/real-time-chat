import React from 'react'
import Register from '../components/register/Register'
import imageBottom from '../images/stain-bottom.svg'
import imageTop from '../images/stain-top.svg'
import '../styles/FormPage.scss'

const RegisterPage = () => {
    return (
        <div className='formPage'>
            <img className='imageBottom' src={imageBottom} alt='loginimage'></img>
            <img className='imageTop' src={imageTop}alt='loginimage'></img>
            <Register />
        </div>
    )
}

export default RegisterPage