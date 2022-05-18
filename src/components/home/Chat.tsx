import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import '../../styles/Chat.scss'
import ChatMessage from './ChatMessage'

const Chat = () => {
    const [users, setUsers] = useState(null)
    const [messages, setMessages] = useState(null)

    useEffect(() => {
        let unsubscribeUsers: Function
        let unsubscribeMessages: Function

        const getData = async () => {
            let usersData : Array<Object> = []
            let messagesData : Array<Object> = []
    
    
            unsubscribeUsers = await onSnapshot(collection(db, 'users'), (snapshot) => {
                snapshot.forEach((user) => {
                    usersData = {
                        ...usersData,
                        [user.id]: user.data()
                    }
                })
                setUsers(usersData)
            })
    
            unsubscribeMessages = await onSnapshot(collection(db, 'messages'), (snapshot) => {
                snapshot.forEach(message => {
                    messagesData = {
                        ...messagesData,
                        [message.id]: message.data()
                    }
                })
                setMessages(messagesData)
            })
        }

        getData()

        return () => {
            unsubscribeUsers()
            unsubscribeMessages()
        }
    }, [])

    return (
        <div className='chat'>
            {(users || messages) !== null ? Object.entries(messages).map((message: Array<any>) => {
                return <ChatMessage 
                            key={message[0]}
                            displayName={users[message[1].uid].displayName}
                            imageURL={users[message[1].uid].imageURL}
                            message={message[1].message}
                        />
        }) : null}
        </div>
    )
}

export default Chat