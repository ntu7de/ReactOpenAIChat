import UserMessage from "./UserMessage";
import Chat from "./Chat";
import '../styles/ChatSection.css';

const ChatSection = () => {
    return (
        <>
            <div className='chat-section'>
                <UserMessage />
                <UserMessage />
            </div>
            <div className='chat-div'>
                <Chat />
            </div>
        </>
    )
}

export default ChatSection