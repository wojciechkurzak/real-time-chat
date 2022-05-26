import React from 'react'
import defaultIcon from '../../images/defaulticon.png'
import '../../styles/ChatMessage.scss'

const ChatMessage = ({displayName, imageURL, message}: {displayName: String, imageURL: String, message: String}) => {
    return (
        <div className='message'>
            <img src={defaultIcon} alt="default" />
            <div className='text'>
                <p>{displayName}</p>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage