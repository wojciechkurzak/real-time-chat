import ChatMessage from './ChatMessage'
import '../../styles/Chat.scss'
import { useEffect, useRef, useState } from 'react'

const Chat = ({users, messages}: any) => {
    const [isLoadingData, setIsLoadingData] = useState(true)

    const bottomOfPage = useRef(null)

    useEffect(() => {
        if(isLoadingData){
            bottomOfPage.current.scrollIntoView()

            if(messages !== null){
                setIsLoadingData(false)
            }
        }
        else{
            bottomOfPage.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])
    
    return (
        <div className='chat'>
            {(users && messages) !== null ? Object.entries(messages).map((message: Array<any>) => {
                return <ChatMessage 
                            key={message[0]}
                            displayName={users[message[1].uid].displayName}
                            imageURL={users[message[1].uid].imageURL}
                            message={message[1].message}
                        />
        }) : null}
        <div ref={bottomOfPage}></div>
        </div>
    )
}

export default Chat