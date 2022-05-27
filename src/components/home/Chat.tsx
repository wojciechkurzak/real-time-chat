import ChatMessage from './ChatMessage'
import '../../styles/Chat.scss'

const Chat = ({users, messages}: any) => {
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
        </div>
    )
}

export default Chat