import "./style.css";

import gitHubIcon from "./../../images/icons/gitHub-black.svg";
import website from "./../../images/icons/website.svg";

const ProjectBtns = ({ link, linkBackend, URL }) => {
  return (
    <>
      {link && (
        <a className='btn-outline' href={link} target='_blank' rel='noreferrer'>
          <img src={gitHubIcon} alt='gitHubIcon' />
          GitHub repo
        </a>
      )}
      {linkBackend && (
        <a
          className='btn-outline'
          href={linkBackend}
          target='_blank'
          rel='noreferrer'
        >
          <img src={gitHubIcon} alt='gitHubIcon' />
          GitHub Backend
        </a>
      )}
      {URL && (
        <a className='btn-outline' href={URL} target='_blank' rel='noreferrer'>
          <img src={website} alt='gitHubWeb' />
          Website
        </a>
      )}
    </>
  );
};

export default ProjectBtns;
