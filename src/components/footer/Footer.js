import "./style.css";

import linkedIn from "./../../images/icons/linkedIn.svg";
import gitHub from "./../../images/icons/gitHub.svg";
import vk from "./../../images/icons/vk.svg";
import instagram from "./../../images/icons/instagram.svg";
import facebook from "./../../images/icons/facebook.svg";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <ul className='social'>
            <li className='social__item'>
              <a
                className='social__link'
                href='https://www.linkedin.com/in/kudenikovns/'
                target='_blank'
                rel='noreferrer'
              >
                <img className='social__icon' src={linkedIn} alt='linkedIn' />
              </a>
            </li>
            <li className='social__item'>
              <a
                className='social__link'
                href='https://github.com/KudenikovNS?tab=repositories'
                target='_blank'
                rel='noreferrer'
              >
                <img className='social__icon' src={gitHub} alt='gitHub' />
              </a>
            </li>
            <li className='social__item'>
              <a
                className='social__link'
                href='https://vk.com/id10591245'
                target='_blank'
                rel='noreferrer'
              >
                <img className='social__icon' src={vk} alt='vk' />
              </a>
            </li>
            <li className='social__item'>
              <a
                className='social__link'
                href='https://www.instagram.com/kudenikovns'
                target='_blank'
                rel='noreferrer'
              >
                <img className='social__icon' src={instagram} alt='instagram' />
              </a>
            </li>
            <li className='social__item'>
              <a
                className='social__link'
                href='https://www.facebook.com/profile.php?id=100009445453730'
                target='_blank'
                rel='noreferrer'
              >
                <img className='social__icon' src={facebook} alt='facebook' />
              </a>
            </li>
          </ul>
          <div className='copyright'>
            <p>&copy; {new Date().getFullYear()} Kudenikov Nikita</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
