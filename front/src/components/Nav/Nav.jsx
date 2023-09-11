import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css';
import LogoLogin from '../../../public/img/logo.png'

const Nav = ({ onSearch }) => {
    return (
        <nav>
            <div className='NavBar'>

                <Link to='/'>
                    <img className='Imgen' src={LogoLogin} alt='logo' width='140px' height='45px' />
                </Link>

                <SearchBar onSearch={onSearch} />


                <div className='ButtonsContainer'>
                    <Link to='/about'>
                        <button className='ButtonNav'>
                            ABOUT
                        </button>
                    </Link>

                    <Link to='/home'>
                        <button className='ButtonNav'>
                            HOME
                        </button>
                    </Link>

                    <Link to='/favorites'>
                        <button className='ButtonNav'>
                            FAVORITES
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
};

export default Nav;