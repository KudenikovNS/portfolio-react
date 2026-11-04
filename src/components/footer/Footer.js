import "./style.css";

import linkedIn from "./../../images/icons/linkedIn.svg";
import gitHub from "./../../images/icons/gitHub.svg";
import vk from "./../../images/icons/vk.svg";
import instagram from "./../../images/icons/instagram.svg";
import facebook from "./../../images/icons/facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Kudenikov Nikita</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
