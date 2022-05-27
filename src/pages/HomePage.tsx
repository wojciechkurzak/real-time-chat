import { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import Chat from '../components/home/Chat'
import ChatInput from '../components/home/ChatInput'
import Menu from '../components/home/Menu'
import Navigation from '../components/home/Navigation'
import '../styles/HomePage.scss'

const HomePage = () => {
    const [slide, setSlide] = useState(false)
    const [users, setUsers] = useState(null)
    const [messages, setMessages] = useState(null)

    useEffect(() => {
        let usersData : Array<Object> = []
        let messagesData : Array<Object> = []
    
        let unsubscribeUsers: Function = onSnapshot(collection(db, 'users'), (snapshot) => {
            snapshot.forEach((user) => {
                usersData = {
                    ...usersData,
                        [user.id]: user.data()
                }
            })
            setUsers(usersData)
        })
    
        let unsubscribeMessages: Function = onSnapshot(query(collection(db, 'messages'), orderBy('createdAt')), (snapshot) => {
            snapshot.forEach(message => {
                messagesData = {
                    ...messagesData,
                    [message.id]: message.data()
                }
            })
            setMessages(messagesData)
        })

        return () => {
            unsubscribeUsers()
            unsubscribeMessages()
        }
    }, [])

    return (
        <div className='homePage'>
            <Navigation slide={slide} setSlide={setSlide}/>
            <Menu slide={slide} setSlide={setSlide}/>
            <div className='chatBox'>
                <Chat users={users} messages={messages} />
                <ChatInput />
            </div>
        </div>
    )
}

export default HomePage