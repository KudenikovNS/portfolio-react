import "./style.css";

import gitHubIcon from "./../../images/icons/gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    <a className='btn-outline' href={link} target='_blank' rel='noreferrer'>
      <img src={gitHubIcon} alt='gitHubIcon' />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
