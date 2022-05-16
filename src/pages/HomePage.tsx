import React from 'react'
import Chat from '../components/home/Chat'
import ChatInput from '../components/home/ChatInput'
import Navigation from '../components/home/Navigation'
import '../styles/HomePage.scss'

const HomePage = () => {
    return (
        <div className='homePage'>
            <Navigation />
            <div className='chatBox'>
                <Chat />
                <ChatInput />
            </div>
        </div>
    )
}

export default HomePage