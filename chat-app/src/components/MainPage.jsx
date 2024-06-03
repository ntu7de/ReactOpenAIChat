import '../styles/MainPage.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import UserMessage from './UserMessage';

const MainPage = () => {
    return (
        <div className='main-page'>
            <div>
                <Sidebar />
            </div>
            <div>
                <Header />
                <div className='user-message-div'>
                    <UserMessage />
                </div>
                <div className='chat-div'>
                    <Chat />
                </div>
            </div>
        </div> 
    )
}

export default MainPage