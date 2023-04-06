import { Link } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png'
import '../styles/Header.css';
// import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link to="/Login" className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
