import '../styles/MainPage.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

const MainPage = () => {
    return (
        <div className='main-page'>
            <div>
                <Sidebar />
            </div>
            <div>
                <Header />
                <div className='chat-div'>
                    <Chat />
                </div>
            </div>
        </div> 
    )
}

export default MainPage