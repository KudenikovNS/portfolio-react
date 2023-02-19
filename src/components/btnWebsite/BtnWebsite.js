import website from "./../../images/icons/website.svg";

const BtnWebsite = ({ URL }) => {
  return (
    <a className='btn-outline' href={URL} target='_blank' rel='noreferrer'>
      <img src={website} alt='gitHubWeb' />
      Website
    </a>
  );
};

export default BtnWebsite;
