import '../styles/MainPage.css'
import Header from './Header';
import Sidebar from './Sidebar';
import ChatSection from './ChatSection';

const MainPage = () => {
    return (
        <div className='main-page'>
            <div>
                <Sidebar />
            </div>
            <div>
                <Header />
                <ChatSection />
            </div>
        </div> 
    )
}

export default MainPage