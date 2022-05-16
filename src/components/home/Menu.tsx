import React from 'react'
import '../../styles/Menu.scss'

const Menu = ({slide}: {slide: boolean}) => {
    return (
        <div className={slide ? 'menu menuOut' : 'menu'}></div>
    )
}

export default Menu