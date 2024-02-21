import './Header.css'; // Assuming you have a CSS file for styling
import logo from '../../../assets/cheflee_logo.webp'; // Adjust the path as necessary

const Header = () => {

    return (
        <header className="header">
            <img src={logo} alt="Chef Lee Logo" className="logo-above" />
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;