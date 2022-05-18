import React from 'react'
import closeIcon from '../../images/iks2.png'
import '../../styles/Menu.scss'

const Menu = ({slide, setSlide}: {slide: boolean, setSlide: Function}) => {
    return (
        <div className={slide ? 'menu menuOut' : 'menu'}>
            <div className='menuClose' onClick={() => setSlide(!slide)}>
                <img src={closeIcon} alt="close" />
            </div>
        </div>
    )
}

export default Menu