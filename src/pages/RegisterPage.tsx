import React from 'react'
import Register from '../components/register/Register'
import image1 from '../images/vector1.png'
import image2 from '../images/vector2.png'
import '../styles/FormPage.scss'

const RegisterPage = () => {
    return (
        <div className='formPage'>
            <img className='imageBottom' src={image1} alt='loginimage'></img>
            <img className='imageTop' src={image2}alt='loginimage'></img>
            <Register />
        </div>
    )
}

export default RegisterPage