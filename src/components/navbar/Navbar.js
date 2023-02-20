import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {
  const activLink = "nav-list__link nav-list__link_activ";
  const normalLink = "nav-list__link";

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to='/portfolio-react' className='logo'>
            <strong>Portfolio</strong>
          </NavLink>

          <BtnDarkMode />

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <NavLink
                to='/portfolio-react'
                className={({ isActive }) =>
                  isActive ? activLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink
                to='/aboutme'
                className={({ isActive }) =>
                  isActive ? activLink : normalLink
                }
              >
                About Me
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink
                to='/contacts'
                className={({ isActive }) =>
                  isActive ? activLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
