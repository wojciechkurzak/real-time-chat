import React, { BaseSyntheticEvent, useContext, useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import sendIcon from '../../images/send.png'
import '../../styles/ChatInput.scss'
import { AuthContext } from '../utils/AuthProvider'

const ChatInput = () => {
    const [value, setValue] = useState('')

    const currentUser = useContext(AuthContext)

    const handleChange = (e: BaseSyntheticEvent): void => {
        setValue(e.target.value)
    }

    const sendMessage = async () => {
        if(value.length === 0) return
        await addDoc(collection(db, 'messages'), {
            uid: currentUser.uid,
            message: value,
            createdAt: serverTimestamp(),
        })
        setValue('')
    }

    return (
        <div className='chatInput'>
            <input type='text' placeholder='Type here...' value={value} onChange={handleChange}/>
            <div className='send' onClick={sendMessage}>
                <img src={sendIcon} alt="send" />
            </div>
        </div>
    )
}

export default ChatInput