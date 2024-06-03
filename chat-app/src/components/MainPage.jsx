import '../styles/MainPage.css'
import Header from './Header';
import Sidebar from './Sidebar';

const MainPage = () => {
    return (
        <div className='main-page'>
            <div>
                <Sidebar />
            </div>
            <div>
                <Header />
            </div>
        </div> 
    )
}

export default MainPage