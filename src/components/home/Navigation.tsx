import React from 'react'
import DisplayUser from './DisplayUser'
import '../../styles/Navigation.scss'
import settings from '../../images/settingsicon.png'

const Navigation = ({slide, setSlide}: {slide: boolean, setSlide: Function}) => {
    return (
        <nav className='navigation'>
            <DisplayUser />
            <div className='settingsIcon' onClick={() => setSlide(!slide)}>
                <img src={settings} alt='settings' />
            </div>
        </nav>
    )
}

export default Navigation