import React, { useContext } from 'react'
import { AuthContext } from '../utils/AuthProvider'
import defaulticon from '../../images/defaulticon.png'

const DisplayUser = () => {
    const currentUser = useContext(AuthContext)

    return (
        <div className='user'>
            <img src={currentUser.photoURL === null ? defaulticon : currentUser.photoURL} alt="userIcon" />
            <span>{currentUser.displayName}</span>
        </div>
    )
}

export default DisplayUser