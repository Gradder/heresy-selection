import logo from '../assets/images/logo_notext.png';
import './Header.css';

function Header() {
  return (
    <div className="Header">
        <img src={logo} className="SaintP-logo"/>
    </div>
  );
}

export default Header;
