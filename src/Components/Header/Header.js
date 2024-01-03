import { Link } from 'react-router-dom'
import logo from '../../resource/Untitled.png'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
                <Link to='/'>
                    <img src={logo} alt='logo' className="promo__logo" />
                </Link>
                <div className="header__options">
                    <div className="toggler">
                        <div className="toggler__circle"></div>
                    </div>

                    <i className="fa-regular fa-user"></i>
                </div>
            </header>
    )
}
export default Header