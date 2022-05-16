import React, { BaseSyntheticEvent, useState } from 'react'
import '../../styles/ChatInput.scss'

const ChatInput = () => {
    const [value, setValue] = useState('')

    const handleChange = (e: BaseSyntheticEvent): void => {
        setValue(e.target.value)
    }

    return (
        <div className='chatInput'>
            <input type='text' placeholder='Type here...' value={value} onChange={handleChange}/>
        </div>
    )
}

export default ChatInput