import React from 'react'
import DisplayUser from './DisplayUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Navigation.scss'

const Navigation = ({slide, setSlide}: {slide: boolean, setSlide: Function}) => {
    return (
        <nav className='navigation'>
            <DisplayUser />
            <div className='menuIcon' onClick={() => setSlide(!slide)}>
                <FontAwesomeIcon icon={faGear} />
            </div>
        </nav>
    )
}

export default Navigation