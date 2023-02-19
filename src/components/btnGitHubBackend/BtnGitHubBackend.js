import gitHubIcon from "./../../images/icons/gitHub-black.svg";

const BtnGitHubBackend = ({ linkBacend }) => {
  return (
    <a
      className='btn-outline'
      href={linkBacend}
      target='_blank'
      rel='noreferrer'
    >
      <img src={gitHubIcon} alt='gitHubIcon' />
      GitHub Backend
    </a>
  );
};

export default BtnGitHubBackend;
