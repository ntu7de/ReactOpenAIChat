import UserMessage from "./UserMessage";
import Chat from "./Chat";
import '../styles/ChatSection.css';

const ChatSection = () => {
    return (
        <>
            <div className='chat-section'>
                <div className='user-message-div'>
                    <UserMessage />
                </div>
            </div>
            <div className='chat-div'>
                <Chat />
            </div>
        </>
    )
}

export default ChatSection