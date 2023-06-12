import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import "./style.css";

const Logo = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to='/portfolio-react' className='logo'>
            <strong>Portfolio</strong>
          </NavLink>
          <HamburgerMenu />
          <BtnDarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Logo;
