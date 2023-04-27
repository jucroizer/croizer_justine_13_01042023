import { Link } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import "../styles/Header.css";
import { Store } from "../store/store";
import { useDispatch } from "react-redux";
// import { logout } from "../store/store.js";
import { useNavigate } from "react-router-dom";
// import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const isLogged = Store.getState();
  console.log("logged", isLogged.isLogged)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //fonction logout
  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logout);
    navigate('/SignIn');
  }

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
          {
            isLogged.isLogged === true ? (
              <Link to="/Profil" className="main-nav-item" href="./sign-in.html" onClick={logout}>
                <i className="fa fa-user-circle"></i>
                Sign Out
              </Link>
            ) : (
              <Link to="/Login" className="main-nav-item" href="./sign-in.html">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            )
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;
