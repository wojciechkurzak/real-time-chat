import React, { useContext } from 'react'
import { AuthContext } from '../utils/AuthProvider'
import defaulticon from '../../images/defaulticon.png'

const DisplayUser = () => {
    const currentUser = useContext(AuthContext)

    return (
        <div className='user'>
            <img src={defaulticon} alt="userIcon" />
            <span>{currentUser.displayName}</span>
        </div>
    )
}

export default DisplayUser