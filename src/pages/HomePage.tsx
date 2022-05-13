import React from 'react'
import Navigation from '../components/home/Navigation'
import { AuthContext } from '../components/utils/AuthProvider'

const HomePage = () => {
    return (
        <div className='homePage'>
            <Navigation />
        </div>
    )
}

export default HomePage