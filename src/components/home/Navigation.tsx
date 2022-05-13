import React from 'react'
import DisplayUser from './DisplayUser'
import '../../styles/Navigation.scss'

const Navigation = () => {
    return (
        <nav className='navigation'>
            <DisplayUser />
            <div className='settings'></div>
        </nav>
    )
}

export default Navigation