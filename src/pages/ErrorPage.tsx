import React from 'react'
import image1 from '../images/vector1.png'
import image2 from '../images/vector2.png'
import '../styles/ErrorPage.scss'

const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <img className='imageBottom' src={image1} alt='loginimage'></img>
            <img className='imageTop' src={image2}alt='loginimage'></img>
            <div className='error'>
                <h1>404</h1>
                <p>Not found</p>
            </div>
        </div>
    )
}

export default ErrorPage