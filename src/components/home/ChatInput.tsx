import React, { BaseSyntheticEvent, useState } from 'react'
import sendIcon from '../../images/send.png'
import '../../styles/ChatInput.scss'

const ChatInput = () => {
    const [value, setValue] = useState('')

    const handleChange = (e: BaseSyntheticEvent): void => {
        setValue(e.target.value)
    }

    return (
        <div className='chatInput'>
            <input type='text' placeholder='Type here...' value={value} onChange={handleChange}/>
            <div className='send'>
                <img src={sendIcon} alt="send" />
            </div>
        </div>
    )
}

export default ChatInput