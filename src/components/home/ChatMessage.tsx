import React from 'react'

const ChatMessage = ({displayName, imageURL, message}: {displayName: String, imageURL: String, message: String}) => {
    return (
        <div className='message'>
            <p>{displayName}</p>
            <p>{message}</p>
        </div>
    )
}

export default ChatMessage