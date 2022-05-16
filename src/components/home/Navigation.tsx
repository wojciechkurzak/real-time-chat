import React from 'react'
import DisplayUser from './DisplayUser'
import '../../styles/Navigation.scss'
import settings from '../../images/settingsicon.png'

const Navigation = () => {
    return (
        <nav className='navigation'>
            <DisplayUser />
            <div className='settingsIcon'>
                <img src={settings} alt='settings' />
            </div>
        </nav>
    )
}

export default Navigation