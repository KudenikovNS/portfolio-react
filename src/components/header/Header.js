import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Nikita</em>
          </strong>
          <br />
          This is my portfolio as a <br/> frontend developer
        </h1>
        <div className="header__text">
          <p>
            * Due to the fact that the rights to the real commercial projects I
            participated in belong to the companies I collaborated with, these
            projects are not available for public demonstration. In my
            portfolio, I showcase pet-projects that were created to demonstrate
            my skills.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1PV664GyQNj4SOL3VZis4RWw74G5vljWH/view?usp=sharing"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
