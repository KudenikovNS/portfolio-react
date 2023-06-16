import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import "./style.css";
import { useState, useEffect } from "react";

const Logo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to='/portfolio-react' className='logo'>
            <strong>Portfolio</strong>
          </NavLink>
          {windowWidth <= 600 && <HamburgerMenu />}
          <BtnDarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Logo;
