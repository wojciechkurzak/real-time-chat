import React, { useState } from 'react'
import Chat from '../components/home/Chat'
import ChatInput from '../components/home/ChatInput'
import Menu from '../components/home/Menu'
import Navigation from '../components/home/Navigation'
import '../styles/HomePage.scss'

const HomePage = () => {
    const [slide, setSlide] = useState(false)

    return (
        <div className='homePage'>
            <Navigation slide={slide} setSlide={setSlide}/>
            <div className='chatBox'>
                <Chat />
                <ChatInput />
            </div>
            <Menu slide={slide}/>
        </div>
    )
}

export default HomePage