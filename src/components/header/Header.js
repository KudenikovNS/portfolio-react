import "./style.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Hi, my name is <em>Nikita</em>
          </strong>
          <br />
          This is my portfolio as a frontend developer
        </h1>
        <div className='header__text'>
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href='https://drive.google.com/file/d/1M9XuyRGf9eyv9mSUkCbF8_urcXlZZFid/view?usp=sharing'
          className='btn'
          target='_blank'
          rel='noreferrer'
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
